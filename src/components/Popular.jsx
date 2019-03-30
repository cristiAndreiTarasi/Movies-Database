
import React from 'react';

import Movie from './Movie.jsx';

const Popular = ({movies}) => {
    return (
        <div className='container'>
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

