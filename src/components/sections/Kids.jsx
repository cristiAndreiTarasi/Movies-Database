import React, { useState, useEffect } from 'react';

// assets
import { BASE_URL, API_KEY, DISCOVER } from '../../assets/api_bits.js';
import loadRating from '../../assets/movie_rating';
import useFetch from '../../assets/use_fetch';

// components
import Carousel from '../carousel/Carousel.jsx';
import MoviesList from '../movies_list/MoviesList.jsx';
import Pagination from './Pagination.jsx';

export default () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    const loadMovies = async () => {
        try {
            const response = await fetch(`${BASE_URL}${DISCOVER}${API_KEY}&sort_by=popularity.desc&certification_country=US&certification.lte=PG&page=${page}`);

            if (!response.ok) throw Error(response.statusText);

            const data = await response.json();
            setMovies(data.results);
            setTotalPages(data.total_pages / 100);
            loadRating ();
        } 
        catch (error) {
            console.log(error)
        }
    };
    
    useEffect(() => {
        loadMovies();
    }, [page]);
    
    return (
       <>
            <Carousel movies={movies} />
            <MoviesList movies={movies} />
            <Pagination 
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
       </>
    );
};