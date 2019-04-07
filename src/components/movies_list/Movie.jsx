import React, { Component } from 'react';
import gen from '../../assets/genres.js';

export default ({data}) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
    const { poster_path, title, genre_ids, vote_average, original_name } = data;
    
    return (
        <div className="panel">
            <img className="panel-img" src={`${IMG_URL}` + poster_path} alt="Card image cap" />
            <div className="panel-body">
                <h3 className='panel-title'>
                    { (title || original_name).length >= 24 
                        ? (title || original_name).slice(0, 24).concat('...') 
                        : title || original_name }
                </h3>
                <h4 className="panel-genres">
                    {gen.map (genre => (
                        genre_ids.includes(genre.id) 
                            ? `${genre.name}\xa0\xa0` 
                            : null
                    ))}
                </h4>
                <h5 className="panel-rating">
                    <p>
                        <i className="fas fa-heart"></i>
                        &nbsp;
                        <span>{vote_average}</span>
                    </p>
                </h5>
            </div>
        </div>
    );
};
