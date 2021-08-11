import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import './style.css';

const Header = () => {

    const { userName } = useParams();
    let userLink;

    userName == undefined ? userLink = "NotFound" : userLink = `/repos/${userName}`;
    
    return (
        <header>
            <nav className="navbar">
                <div id="logo">
                    <img src="#" alt="Logo" /> 
                </div>
                <ul>
                    <li className="Nav-item">
                        <NavLink exact to="/" activeClassName="current">User search</NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink exact to={userLink} activeClassName="current">Repos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;