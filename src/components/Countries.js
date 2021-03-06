import React, { useEffect, useState } from 'react';
import axios from 'axios' ;
import Card from './Card';

const Countries = () => {

    const [data,setData] = useState([]);
    
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag').then((res) => setData(res.data));

    },[]);
    
    return (
        <div className = "countries">
            Pays

            <ul className = "countries.liste">
                {data.map((country) => (

                    <Card country = {country} key = {country.name} />

                )) }
            </ul>

        </div>
    );
};

export default Countries;