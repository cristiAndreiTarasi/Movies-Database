import React, { Component } from 'react';

class Movie extends Component {
    render () {
        const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
        const { poster_path, title } = this.props.movie;

        return (
            <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className="card">
                    <img className="card-img-top" src={`${IMG_URL}` + poster_path} alt="Card image cap" />
                </div>
            </div>
        );
    }
}

export default Movie;