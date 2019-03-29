
import React from 'react';

import Movie from './Movie.jsx';

const Popular = ({movies}) => {
    return (
        <div className='panel-group'>
            {movies.map (movie => (
                <Movie movie={movie} key={movie.id} />
            ))}
        </div>
    );
}

export default Popular;

