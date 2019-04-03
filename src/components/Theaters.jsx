import React, { Fragment, useState, useEffect } from 'react';
import { BASE_URL, API_KEY, DISCOVER, REGION, RELEASE } from '../assets/api_bits.js';

import Carousel from './carousel/Carousel.jsx';

const useFetch = (url) => {
    const [movies, setMovies] = useState([]);

    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        const api_movies = data.results;
        
        setMovies(api_movies);
    }, []);

    return {movies};
};

export default () => {
    const {movies} = useFetch(`${BASE_URL}${DISCOVER}${API_KEY}${REGION}${RELEASE}`);
    
    return (
       <div>
            <Carousel movies={movies} />
       </div>
    );
};
