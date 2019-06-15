import React, { useState, useEffect } from 'react';

// assets
import { BASE_URL, API_KEY, DISCOVER } from '../../assets/api_bits.js';
import useFetch from '../../assets/use_fetch';

// components
import Carousel from '../carousel/Carousel.jsx';
import MoviesList from '../movies_list/MoviesList.jsx';
import LoadMoreButton from './LoadMoreButton.jsx';

export default () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    
    const loadMovies = async () => {
        try {
            const response = await fetch(`${BASE_URL}${DISCOVER}${API_KEY}&sort_by=popularity.desc&certification_country=US&certification.lte=PG&page=${page}`);

            if (!response.ok) throw Error(response.statusText);

            const data = await response.json();
            // setMovies(data.results);
            setMovies(prevMovies => [...prevMovies, ...data.results]);
            loadRating ();
        } 
        catch (error) {
            console.log(error)
        }
    };
    
    useEffect(() => {
        loadMovies();
    }, [page]);

    const addNextPage = event => {
        setPage(prevPage => prevPage + 1);
        event.preventDefault();
    };
    
    return (
       <>
            <Carousel movies={movies} />
            <MoviesList movies={movies} />
            <LoadMoreButton addNextPage={addNextPage} />
       </>
    );
};