import React, { Fragment, useState, useEffect } from 'react';
import gen from '../../assets/genres.js';
import { BASE_URL, API_KEY, IMG_URL, YOUTUBE_LINK } from '../../assets/api_bits.js';
import Modal from '../modal/Modal.jsx';

export default ({data}) => { 
    const [video, setVideo] = useState(YOUTUBE_LINK);

    useEffect(() => {
        const get_movie_call = async () => {
            const movie = await fetch(`${BASE_URL}/movie/${data.id}/videos${API_KEY}&language=en-US`);
            const json = await movie.json();

            setVideo(`${video}${json.results[0].key}`);
        }

        get_movie_call();
    }, []);

    return (
        <Fragment>
            <div className='panel'>
                <img className="panel-img" src={`${IMG_URL}` + data.poster_path} alt={data.title} />
                <div className="panel-body">
                    <h3 className='panel-title'>
                        { (data.title || data.original_name).length >= 24 
                            ? (data.title || data.original_name).slice(0, 24).concat('...') 
                            : data.title || data.original_name }
                    </h3>
                    <h4 className="panel-genres">
                        {gen.map (genre => (
                            data.genre_ids.includes(genre.id) 
                                ? `${genre.name}\xa0\xa0` 
                                : null
                        ))}
                    </h4>
                    <div className='panel-bottom'>
                        <h5 className="panel-rating">
                            <p>
                                <i className="fas fa-heart"></i>
                                &nbsp;
                                <span>{data.vote_average}</span>
                            </p>
                        </h5>
                        <Modal data={data} video={video} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
