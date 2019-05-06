import React, { Fragment, useContext } from 'react';
import gen from '../../assets/genres.js';
import { BASE_URL, API_KEY, YOUTUBE_LINK } from '../../assets/api_bits.js';
import Modal from '../modal/Modal.jsx';
import { GlobalContext } from '../ContextComponent.jsx';

export default (/* {data} */) => {
    const [movies] = useContext(GlobalContext);
    const IMG_URL = 'https://image.tmdb.org/t/p/w1280/';
    // const { backdrop_path, title, genre_ids, release_date, original_name, first_air_date } = data;

    console.log(movies);

    return (
        <Fragment>
            {movies.map(movie => (
                <Fragment>
                    <img 
                        className="carousel-item-img" 
                        alt="First slide" 
                        src={`${IMG_URL}${movie.backdrop_path}`}
                    />
    
                    <div className="carousel-caption p-0">
                            <div className='container p-0'>
                                <h1>{movie.title || movie.original_name}</h1>
                                <p className='lead'>
                                    {gen.map (genre => (
                                        genre_ids.includes(genre.id) 
                                            ? `${genre.name}\xa0\xa0\xa0\xa0` 
                                            : null
                                    ))}
                                </p>

                                <Modal movie={movie} />
                            
                                <div className='extra-info'>
                                    <span className='in-theather'>In theaters</span>
                                    <br />
                                    <span className='release'>
                                        {(movie.release_date || movie.first_air_date).split('-').join(' ')}
                                    </span>
                                </div>    
                            </div>
                    </div>
                </Fragment>
            ))}
        </Fragment>
    );
};