import React, { Fragment } from 'react';

// assets
import { BASE_URL, API_KEY, DISCOVER } from '../../assets/api_bits.js';
import useFetch from '../../assets/use_fetch';

// components
import Carousel from '../carousel/Carousel.jsx';
import MoviesList from '../movies_list/MoviesList.jsx';

export default () => {
    const movies = useFetch(`${BASE_URL}/tv/popular${API_KEY}&language=en-US&page=1`);
    
    return (
       <Fragment>
            <Carousel movies={movies} />
            <MoviesList movies={movies} />
       </Fragment>
    );
};