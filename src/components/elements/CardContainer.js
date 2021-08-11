import React from 'react';
import { CardStyle } from '../styles/CardContainer';

const Card = ({ result }) => {

    const dates = "MWTFS";

    function flipCard(e) {
        if ((e.parentNode.className === "datacard" || e.parentNode.className === "datacard is-flipped") && e.className !== "link") {
            e.parentNode.classList.toggle("is-flipped");
        } else if ((e.parentNode.parentNode.className === "datacard" || e.parentNode.parentNode.className === "datacard is-flipped") && e.className !== "link") {
            e.parentNode.parentNode.classList.toggle("is-flipped");
        } else if ((e.parentNode.parentNode.className === "datacard" || e.parentNode.parentNode.parentNode.className === "datacard is-flipped") && e.className !== "link") {
            e.parentNode.parentNode.parentNode.classList.toggle("is-flipped");
        }
    };


    return (
        <CardStyle style={{ display: "inline-flex", margin: "auto", width: "250px" }}>
            <div className="card"
                key={result.resultsKey}
                onClick={event => flipCard(event.target)}>
                <div className="datacard" >
                    <div className="resultimage"></div>
                    <span className="resultname">{result.resultsName}</span>
                    <div className="resultdetailsfront">
                        <p className="resultdistance">{result.resultsDistance}</p>
                        <p className="detail address">{result.address}</p>
                        <div className="detail">{result.schedule.map(time => {
                            if (dates.indexOf(time.charAt(0)) === -1 && time.charAt(0) !== " ") {
                                return <div>{time.substr(25)}</div>
                            } else if (time.charAt(0) !== " ") {
                                return <div>{time}</div>
                            };
                        })}
                        </div>
                    </div>
                    <div className="resultdetailsback">
                        <div className="detail"><p>Available Products</p>{result.produce}</div>
                        <a className="link" href={result.link}>Google Maps Link</a>
                    </div>
                </div>
            </div>
        </CardStyle>
    );
};
export default Card;