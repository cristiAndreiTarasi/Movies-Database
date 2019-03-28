
import React from 'react';

import Movie from './Movie.jsx';

const Popular = ({movies}) => {
    return (
        <div className='col-md-12'>
            <div className='card-group'>
                {movies.map (movie => (
                    <Movie movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Popular;

