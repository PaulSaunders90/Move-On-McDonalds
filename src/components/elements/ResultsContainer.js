import React, { useEffect, useState } from 'react';
import { ResultsContainer } from '../styles/ResultsContainer';
import Card from "./CardContainer";


const Results = ({ locationZip }) => {

    const [locationResults, setResults] = useState([]);
    const [loaded, hasLoaded] = useState();
    const hasData = (locationResults.length !== 0);

    let resultsData = [],
        fetchRequests = [];

    function requestLocations() {
        hasLoaded(false)
        fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + locationZip)
            .then((response) => response.json())
            .then(async (data) => {
                if ((data.results[0].id === "Error") || !data){
                setResults([])
                setTimeout(hasLoaded(true), 4000)
                };

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
                            // eslint-disable-next-line
                        }).then((detaildata) => {
                            resultObj = {
                                resultsKey: idKey[i],
                                resultsName: marketName[i],
                                resultsDistance: "Within " + milesAway[i][0] + " Miles",
                                detailsKey: idKey[i] + "d",
                                address: detaildata.marketdetails.Address,
                                link: detaildata.marketdetails.GoogleLink,
                                produce: detaildata.marketdetails.Products.replaceAll(';', '. '),
                                schedule: detaildata.marketdetails.Schedule.replaceAll("<br>", "").substr(25,).split(";")
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
                setTimeout(hasLoaded(true), 4000)
            }).catch((error) => console.log(error))
    };

    useEffect(() => {
        requestLocations()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationZip]);



    return (
        <ResultsContainer>
            <div id="results">
                {loaded === true ?
                    (hasData) ?
                    <div id="resultsheader">{"There are " + locationResults.length + " Farmer's Markets Near This Location!"}</div>
                    :                    
                    <div id="resultsheader">{"No Markets Near That McDonald's!"}</div>
                     :
                    <div id="resultsheader">{"Fetching Data..."}</div>
                }
                {locationResults.map(result => <Card result={result} key={result.resultsKey} />)}
            </div>
        </ResultsContainer >
    )
};

export default Results;