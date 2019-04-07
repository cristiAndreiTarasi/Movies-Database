import React, { useState, useEffect } from 'react';
import loadRating from './movie_rating';

export default (url) => {
    const [movies, setMovies] = useState([]);

    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        const api_movies = data.results;
        
        setMovies(api_movies);
        loadRating(); 
        // console.log(api_movies);
    }, []); 

    return {movies};
};