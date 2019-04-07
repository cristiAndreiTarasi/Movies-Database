import React, { Component, Fragment } from 'react';
import gen from '../../assets/genres.js';


export default ({movies}) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/original/';
    const random = Math.floor(Math.random() * movies.length);
        
    return (
        <div className="carousel-item active">
            {movies.map ((movie, index) => {
                return index === random && (
                    <Fragment>
                        <img 
                            className="carousel-item-img" 
                            alt="First slide" 
                            src={`${IMG_URL}` + movies[random].backdrop_path}
                            key={index}
                        /> 
    
                        <div className="carousel-caption p-0">
                            <div className='container p-0'>
                                <h1>{movie.title || movie.name}</h1>
                                <p className='lead' key={movie.id}>
                                    {gen.map ((genre, index) => (
                                        movie.genre_ids.includes(genre.id) 
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
                                        {(movie.release_date || movie.first_air_date).split('-').join(' ')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            })}
        </div>
    );
};