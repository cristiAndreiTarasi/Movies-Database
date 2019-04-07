import React, { Fragment } from 'react';

// assets
import { BASE_URL, API_KEY, DISCOVER } from '../../assets/api_bits.js';
import useFetch from '../../assets/use_fetch';

// components
import Carousel from '../carousel/Carousel.jsx';
import MoviesList from '../movies_list/MoviesList.jsx';

export default () => {
    const {movies} = useFetch(`${BASE_URL}${DISCOVER}${API_KEY}&sort_by=popularity.desc&certification_country=US&certification.lte=PG&include_adult=false&include_video=false&page=1`);
    
    return (
       <Fragment>
            <Carousel movies={movies} />
            <MoviesList collection={movies} />
       </Fragment>
    );
};