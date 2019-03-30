import React, { Component, Fragment } from 'react';
import gen from '../assets/genres';

class CarouselItem extends Component {
    render () {
        const IMG_URL = 'https://image.tmdb.org/t/p/w1280/';
        const { backdrop_path, title, genre_ids, release_date } = this.props.movie;
        const random = Math.floor(Math.random() * gen.length);
        console.log(gen[random].name)

        return (
            <Fragment>
                <img 
                    className="carousel-item-img" 
                    alt="First slide" 
                    src={`${IMG_URL}` + backdrop_path}
                />

                <div className="carousel-caption p-0">
                    <div className='container p-0'>
                        <h1>{title}</h1>
                        {/* {genre_ids.map(id => {
                            return id === gen[random].id && (
                                <p key={id}>{gen[random].name}</p>
                            );
                        })} */}
                        <p className='lead'>Action, Drama, Comedy</p>
                        <button type="button" class="btn btn-warning">
                            <span>Watch Trailer &nbsp;</span>
                            <i className="far fa-play-circle"></i>
                        </button>
                        <div className='extra-info'>
                            <span className='in-theather'>In theaters</span>
                            <br />
                            <span className='release'>{release_date}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default CarouselItem;