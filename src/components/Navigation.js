import React from 'react';
import { NavLink } from 'react-router-dom' ;

const Navigation = () => {
    return (
        <div className = "navigation-barre" >
            <NavLink exact to = "/" activeClassName = "nav-bouton" >
                Accueil
            </NavLink>

            <NavLink exact to = "/about" activeClassName = "nav-bouton" >
                A Propos
            </NavLink>
        </div>
    );
};

export default Navigation;