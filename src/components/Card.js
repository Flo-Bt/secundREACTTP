import React from 'react';

const Card = (props) => {
    
    const {country} = props;

    return (
        <li className = "card" >
            <img src = {country.flag} alt = " flag" />
            <div className = " data-container ">
                <ul>
                    <li> {country.name} </li>
                    <li> Capitale: {country.capital} </li>
                    <li> Pop. : {country.population} </li>
                </ul>
            </div>

        </li>
    );
};

export default Card;