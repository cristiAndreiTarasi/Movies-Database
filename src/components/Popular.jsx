
import React from 'react';

import Movie from './Movie.jsx';

const Popular = ({movies}) => {
    return (
        <div className='row'>
            <div className='col-md-12'>
                <div className='card-group'>
                    <Movie movies={movies}/>
                    <Movie movies={movies}/>
                    <Movie movies={movies}/>
                </div>
            </div>
        </div>
    );
}

export default Popular;

