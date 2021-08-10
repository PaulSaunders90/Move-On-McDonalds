import React, { useState } from 'react';
import { SearchWrapper } from '../styles/SearchBar';

const Search = ({setZip}) => {

    const json = require(`../data/mcdonalds.json`);
    const jsonData = json.features;
    const [searchInput, setInput] = useState('');
    const [filteredList, setFilteredList] = useState([]);

    var list = [];
    var maxDisplayLimit = 10;

    function generateLocationData(jsonData) {
        if (!jsonData) return;
        for (var i = 0; i < jsonData.length; i++) {
            var item = {
                storeNumber: jsonData[i].properties.storeNumber,
                address: jsonData[i].properties.address,
                city: jsonData[i].properties.city,
                state: jsonData[i].properties.state,
                zip: jsonData[i].properties.zip,
            };
            list.push(item)
        }
    }

    generateLocationData(jsonData);

    function getSearchInput(event) {
        const inputFilled = document.getElementById("searchinput").value !== "";
        inputFilled ? document.getElementsByClassName("list")[0].style.display = "block" : document.getElementsByClassName("list")[0].style.display = "none";
        inputFilled ?        document.getElementById("addresslabel").style.display = "flex" : document.getElementById("addresslabel").style.display = "none";        ;
        const punctuationRegex = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[]^_`{|}~]/g;
        event.replace(punctuationRegex, "")
        setInput(event)
        getFilteredItems()
        document.getElementById("addresslabel").style.borderBottom = "solid 1px black";
        document.getElementsByClassName("list")[0].style.border = "solid 1px black";
        document.getElementsByClassName("list")[0].style.borderTop = "none";
    }

    function textMatch(item) {
        let itemText = (item.storeNumber + " " + item.address + " " + item.city + " " +
            item.state + " " + item.zip).toLowerCase();
        return itemText.indexOf(searchInput) !== -1;
    }

    function getFilteredItems() {
        setFilteredList(list.filter(textMatch).slice(0, maxDisplayLimit));
    }

    function selectLocation(event) {
        if ((event.tagName === "SPAN") && (event.parentNode.attributes[0].value !== undefined)) {
            document.getElementById("searchinput").value = ""
            document.getElementsByClassName("list")[0].style.display = "none"
            document.getElementById("results").style.display = "block"
            setZip(parseInt(event.parentNode.attributes[0].value))
        } else {
            return
        }
    }

    return (
        <SearchWrapper>
            <div id="wrapper">
                <form action="/" method="get" id="searchbar">
                    <input
                        type="text"
                        className="text-filter"
                        id="searchinput"
                        placeholder="Search McDonald's Locations"
                        onChange={event => getSearchInput((event.target.value).toLowerCase())}
                        onKeyPress={(e) => {e.key === 'Enter' && e.preventDefault(); }}
                        name="searchbar" />
                    <ul className="list">
                        <div id="addresslabel">
                            <p>Street</p>
                            <p>City</p>
                            <p>State</p>
                            <p>Zip</p>
                        </div>
                        {filteredList.map(item => (
                            <li key={item.storeNumber}
                                data-zip={item.zip}
                                onClick={event => selectLocation(event.target)}
                            >
                                <span className="address">{item.address}</span>
                                <span className="city">{item.city}</span>
                                <span className="state">{item.state}</span>
                                <span className="zip">{item.zip}</span>
                            </li>
                        ))}
                    </ul>
                </form>
            </div>
        </SearchWrapper>
    )
};

export default Search;