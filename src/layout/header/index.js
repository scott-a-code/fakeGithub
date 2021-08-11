import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './style.css';
import logo from './GitHub-Mark-Light-64px.png';

const Header = () => {

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
                        {/* <NavLink exact to={userLink} activeClassName="current">Repos</NavLink> */}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;