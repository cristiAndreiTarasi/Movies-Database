import React, { Component } from 'react';
import gen from '../assets/genres';

class Movie extends Component {
    render () {
        const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
        const { poster_path, title, genre_ids, vote_average } = this.props.movie;

        return (
            <div className="panel">
                <img className="panel-img" src={`${IMG_URL}` + poster_path} alt="Card image cap" />
                <div className="panel-body">
                    <h3 className='panel-title'>
                        { title.length >= 24 ? title.slice(0, 24).concat('...') : title }
                    </h3>
                    <h4 className="panel-genres">
                        {gen.map (genre => (
                            genre_ids.includes(genre.id) 
                                ? `${genre.name}\xa0\xa0` 
                                : null
                        ))}
                    </h4>
                    <h5 className="panel-rating">
                        <span><i className="fas fa-heart"></i>&nbsp;{vote_average}</span>
                    </h5>
                </div>
            </div>
        );
    }
}

export default Movie;