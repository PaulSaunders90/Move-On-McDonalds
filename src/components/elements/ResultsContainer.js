import React, { useEffect, useState } from 'react';
import { ResultsContainer } from '../styles/ResultsContainer';

const Results = ({ locationZip }) => {

    const [locationResults, setResults] = useState([]);
    const hasData = (locationResults.length !== 0);

    let resultsData = [],
        fetchRequests = [];

    useEffect(() => {
        fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + locationZip)
            .then((response) => response.json())
            .then(async (data) => {
                if ((data.results[0].id === "Error") || !data)
                    return;

                let resultObj = {},
                    idKey = [],
                    splitString = "",
                    milesAway = [],
                    marketName = [];

                for (let i = 0; i < data.results.length; i++) {
                    splitString = data.results[i].marketname.split(" ")
                    milesAway[i] = splitString.splice(0, 1)
                    marketName[i] = splitString.join(" ")
                    idKey[i] = data.results[i].id

                    await fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + idKey[i])
                        .then((response) => {
                            return response.json();
                        }).then((detaildata) => {
                            resultObj = {
                                resultsKey: idKey[i],
                                resultsName: marketName[i],
                                resultsDistance: "Within " + milesAway[i][0] + " Miles",
                                detailsKey: idKey[i] + "d",
                                address: detaildata.marketdetails.Address,
                                link: detaildata.marketdetails.GoogleLink,
                                produce: detaildata.marketdetails.Products.replaceAll(';', '. '),
                                schedule: detaildata.marketdetails.Schedule.replaceAll("<br>", "").substr(25,).replaceAll(";", `. `)
                            }
                            resultsData.push(resultObj)
                        })
                };
                resultsData = resultsData.filter((resultObj, index, self) =>
                    index === self.findIndex((o) => (
                        o.resultsName === resultObj.resultsName && o.address === resultObj.address
                    )))
                fetchRequests.push(resultsData)
                await Promise.all(fetchRequests)
                setResults(fetchRequests[0])
            }).catch((error) => console.log(error))
    }, [locationZip, fetchRequests]);

    function flipCard(e) {
        if ((e.parentNode.className === "datacard" || e.parentNode.className === "datacard is-flipped") && e.className !== "link") {
            e.parentNode.classList.toggle("is-flipped");
        } else if ((e.parentNode.parentNode.className === "datacard" || e.parentNode.parentNode.className === "datacard is-flipped") && e.className !== "link") {
            e.parentNode.parentNode.classList.toggle("is-flipped");
        } else if ((e.parentNode.parentNode.className === "datacard" || e.parentNode.parentNode.parentNode.className === "datacard is-flipped") && e.className !== "link") {
            e.parentNode.parentNode.parentNode.classList.toggle("is-flipped");
        }
    }

    return (
        <ResultsContainer>
            <div id="results">
                {hasData ?
                    <div id="resultsheader">{"There are " + locationResults.length + " Farmer's Markets Near This Location!"}</div>
                    : <div id="resultsheader">{"Fetching Data..."}</div>
                }
                {locationResults.map(result => (
                    <div className="card">
                        <div className="datacard" key={result.resultsKey}
                            onClick={event => flipCard(event.target)}>
                            <div className="resultimage"></div>
                            <span className="resultname">{result.resultsName}</span>
                            <div className="resultdetailsfront">
                                <p className="resultdistance">{result.resultsDistance}</p>
                                <p className="detail">{result.address}</p>
                                <p className="detail">{result.schedule}</p>
                            </div>
                            <div className="resultdetailsback">
                                <p className="detail"><p>Available Products</p>{result.produce}</p>
                                <a className="link" href={result.link}>Google Maps Link</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ResultsContainer >
    )
};

export default Results;