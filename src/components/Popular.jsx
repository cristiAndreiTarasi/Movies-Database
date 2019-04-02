
import React, { Fragment } from 'react';

import Movie from './Movie.jsx';

const Popular = ({movies}) => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <h1>Popular Movies</h1>
            </div>
            <div className='row'>
                <div className='panel-group'>
                    {movies.map (movie => (
                        <Movie movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Popular;

