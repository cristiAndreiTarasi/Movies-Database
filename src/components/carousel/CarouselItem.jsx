import React, { Fragment, useState, useEffect } from 'react';
import gen from '../../assets/genres.js';
import { BASE_URL, API_KEY, YOUTUBE_LINK } from '../../assets/api_bits.js';
import Modal from '../modal/Modal.jsx';

export default ({data}) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/w1280/';
    const { backdrop_path, title, genre_ids, release_date, original_name, first_air_date } = data;
    const [video, setVideo] = useState(YOUTUBE_LINK);

    useEffect(() => {
        const get_movie_call = async () => {
            const movie = await fetch(`${BASE_URL}/movie/${data.id}/videos${API_KEY}&language=en-US`);
            const json = await movie.json();

            setVideo(`${video}${json.results[0].key}`);
            // console.log(video);
        }

        get_movie_call();
    }, []);

    return (
        <Fragment>
            <img 
                className="carousel-item-img" 
                alt="First slide" 
                src={`${IMG_URL}` + backdrop_path}
            />

            <div className="carousel-caption p-0">
                <div className='container p-0'>
                    <h1>{title || original_name}</h1>
                    <p className='lead'>
                        {gen.map (genre => (
                            genre_ids.includes(genre.id) 
                                ? `${genre.name}\xa0\xa0\xa0\xa0` 
                                : null
                        ))}
                    </p>
                    <Modal data={data} video={video} />
                    <div className='extra-info'>
                        <span className='in-theather'>In theaters</span>
                        <br />
                        <span className='release'>
                            {(release_date || first_air_date).split('-').join(' ')}
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};