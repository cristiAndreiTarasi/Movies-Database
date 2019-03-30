import React from 'react';

const Navbar = () => {
    return (
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color p-0">
            <div className='container'>
                <a class="navbar-brand" href="#">
                    <img src='../images/mdb.png' />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">
                                Popular
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Kids</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link">TV</a>
                        </li>
                    </ul>

                    {/* <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;