import React, { useState, useEffect } from 'react';

// assets
import { BASE_URL, API_KEY, DISCOVER } from '../../assets/api_bits.js';
import loadRating from '../../assets/movie_rating';

// components
import Carousel from '../carousel/Carousel.jsx';
import MoviesList from '../movies_list/MoviesList.jsx';
// import LoadMoreButton from './LoadMoreButton.jsx';
import Pagination from './Pagination.jsx';

export default () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    
    const loadMovies = async () => {
        try {
            const response = await fetch(`${BASE_URL}${DISCOVER}${API_KEY}&language=en-US&page=${page}`);

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

    /*const addNextPage = event => {
        setPage(prevPage => prevPage + 1);
        event.preventDefault();
    };*/

    const changePages = e => {
        setPage(e => parseInt(e.target.innerHTML));
        // console.log(page)
    };
    const nextPage = e => {}; 
    const prevPage = e => {}; 

    return (
       <>
            <Carousel movies={movies} />
            <MoviesList movies={movies} />
            <Pagination 
                movies={movies} 
                changePages={changePages}
            />
            {/*<LoadMoreButton addNextPage={addNextPage} /> */}
       </>
    );
};