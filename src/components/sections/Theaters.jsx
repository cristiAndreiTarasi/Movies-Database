import React, { Fragment } from 'react';

// assets
import { BASE_URL, API_KEY, DISCOVER, PAGE } from '../../assets/api_bits.js';
import useFetch from '../../assets/use_fetch';

// components
import Carousel from '../carousel/Carousel.jsx';
import MoviesList from '../movies_list/MoviesList.jsx';
import LoadMoreButton from './LoadMoreButton.jsx';

export default () => {
    const {movies} = useFetch(`${BASE_URL}${DISCOVER}${API_KEY}&with_release_type=2|3&region=US&page=${PAGE}`);
    
    return (
       <Fragment>
            <Carousel movies={movies} />
            <MoviesList collection={movies} />
            <LoadMoreButton />
       </Fragment>
    );
};
