import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <nav className="navbar navbar-expand-lg m-0">
        <div className='container'>
            <NavLink className="navbar-brand" to='/'>
                <img src='../../images/mdb.png' />
            </NavLink>

            <button 
                className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact activeClassName='is-active' to='/'>
                            Home
                            <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact activeClassName='is-active' to='/kids'>
                            Kids
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact activeClassName='is-active' to='/tv'>
                            TV
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
 
