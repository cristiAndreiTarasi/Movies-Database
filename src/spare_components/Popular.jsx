
import React, { Component } from 'react';
import Movie from './Movie.jsx';

export default ({collection}) => (
    <div className='container'>
        <div className='row'>
            <div className='panel-group'>
                {collection.map(movie => (
                    <Movie data={movie} key={movie.id} />
                ))}
            </div>
        </div>
    </div>
);


