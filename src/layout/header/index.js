import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <h1></h1>
            <div className="links">
                <NavLink exact to="/" activeClassName="current">User search</NavLink>
            </div>
        </nav>
    );
}

export default Header;