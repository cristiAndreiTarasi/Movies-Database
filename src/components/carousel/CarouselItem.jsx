import React, { Component, Fragment } from 'react';
import gen from '../../assets/genres.js';

export default ({movie}) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/w1280/';
    const { backdrop_path, title, genre_ids, release_date, original_name, first_air_date } = movie;

    return (
        <Fragment>
            <img 
                className="carousel-item-img" 
                alt="First slide" 
                src={`${IMG_URL}` + backdrop_path}
            />

            <div className="carousel-caption p-0">
                <div className='container p-0'>
                    <h1>{title || original_name}</h1>
                    <p className='lead'>
                        {gen.map (genre => (
                            genre_ids.includes(genre.id) 
                                ? `${genre.name}\xa0\xa0\xa0\xa0` 
                                : null
                        ))}
                    </p>
                    <button type="button" className="btn btn-warning">
                        <span>Watch Trailer &nbsp;</span>
                        <i className="far fa-play-circle"></i>
                    </button>
                    <div className='extra-info'>
                        <span className='in-theather'>In theaters</span>
                        <br />
                        <span className='release'>
                            {(release_date || first_air_date).split('-').join(' ')}
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};