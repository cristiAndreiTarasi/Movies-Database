import React, { useState, useEffect } from 'react';
import loadRating from './movie_rating';

export default (url) => {
    const [movies, setMovies] = useState([]);
    
    const loadMovies = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) throw Error(response.statusText);

            const data = await response.json();
            setMovies(data.results);
            loadRating ();
        } 
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        loadMovies ();
    }, []); 

    console.log(movies);

    return movies;
};