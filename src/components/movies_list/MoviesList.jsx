import React from 'react';
import Movie from './Movie.jsx';

export default ({movies}) =>  (
    <div className='container'>
        <div className='row'>
            <div className='panel-group'>
                {movies.map(movie => (
                    <Movie data={movie} key={movie.id} />
                ))}
            </div>
        </div>
    </div>
);