import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import './style.css';
import logo from './GitHub-Mark-Light-64px.png';

const Header = () => {

    const { userName } = useParams();
    let userLink;

    userName == undefined ? userLink = "/NotFound" : userLink = `/repos/${userName}`;
    
    return (
        <header>
            <nav className="navbar">
                <div id="logo">
                    <img src={logo} alt="Logo" /> 
                </div>
                <ul>
                    <li className="nav-item">
                        <NavLink exact to="/" activeClassName="current">User search</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to={userLink} activeClassName="current">Repos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;