import React, { useState } from 'react';
import { AppWrapperStyle } from "../styles/AppWrapper"

import Title from "../elements/AppTitle";
import Search from "../elements/SearchBar";
import Results from "../elements/ResultsContainer";


const AppWrapper = () => {

    const [locationZip, setZip] = useState('');

    return (
        <AppWrapperStyle>
            <div id="appwrapper">
                <Title />
                <Search setZip={setZip} />
                <Results locationZip={locationZip} />
            </div>
            <div class="footer">
                <div id="footertext">
                    <p>Website designed by <a href="https://github.com/PaulSaunders90/">Paul Saunders</a>
                        © 2021</p>
                </div>
            </div>
        </AppWrapperStyle>
    )
};

export default AppWrapper;