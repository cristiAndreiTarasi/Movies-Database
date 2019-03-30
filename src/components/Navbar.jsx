import React from 'react';

const Navbar = () => {
    return (
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
                            <a className="nav-link" href="#">
                                In Theaters
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Popular</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Kids</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link">TV</a>
                        </li>
                    </ul>

                    {/* <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;