import React, { useState, useEffect } from 'react';

// assets
import { BASE_URL, API_KEY, DISCOVER } from '../../assets/api_bits.js';
import loadRating from '../../assets/movie_rating';

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
            const response = await fetch(`${BASE_URL}${DISCOVER}${API_KEY}&release_date.gte=2018-03-01&release_date.lte=2019-07-20&sort_by=popularity.desc&page=${page}`);

            if (!response.ok) throw Error(response.statusText);

            const data = await response.json();
            setMovies(data.results);
            setTotalPages(data.total_pages / 100);
            console.log(data);
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