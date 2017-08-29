import React from 'react';
import {NavLink} from 'react-router-dom';

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand">MERN Starter</NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/todo" className="nav-link">Task List</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/sample" className="nav-link">Sample Page</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
