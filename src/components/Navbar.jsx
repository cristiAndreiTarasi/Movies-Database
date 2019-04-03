import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <nav class="navbar navbar-expand-lg m-0">
        <div className='container'>
            <NavLink class="navbar-brand" to='/'>
                <img src='../images/mdb.png' />
            </NavLink>

            <button 
                class="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <NavLink activeClassName="active" to='/'>Home
                            <span class="sr-only">(current)</span>
                        </NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink activeClassName="active" to='/theaters'>In Theaters</NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink activeClassName="active" to='/kids'>Kids</NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink activeClassName="active" to='/tv'>TV</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
 
