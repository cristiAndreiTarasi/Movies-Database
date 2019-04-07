import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Popular from './Popular.jsx';
import InTheaters from './InTheaters.jsx';
import Kids from './Kids.jsx';
import TV from './TV.jsx';
import NotFound from './NotFound.jsx';

export default () => (
    <nav className="mb-1 navbar navbar-expand-lg navbar-dark info-color p-0">
        <div className='container'>
            <a className="navbar-brand" href="#">
                <img src='../images/mdb.png' />
            </a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to='/'>Popular</Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/theaters'>In Theaters</Link>
                    </li>

                    <li className="nav-item active">
                        <Link to='/kids'>Kids</Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/tv'>TV</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
 
