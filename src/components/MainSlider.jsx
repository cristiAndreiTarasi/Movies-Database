import React, { Component, Fragment } from 'react';

import Navbar from './Navbar.jsx';
import CarouselItem from './CarouselItem.jsx';
import gen from '../assets/genres';

class MainSlider extends Component {
    render () {
        const IMG_URL = 'https://image.tmdb.org/t/p/original/';
        const random = Math.floor(Math.random() * this.props.movies.length);

return (
    <Fragment>
        <div className='jumbotron'>
            <Navbar />

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="15"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="16"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="17"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="18"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="19"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="20"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {this.props.movies.map ((movie, index) => {
                            return index === random && (
                                <Fragment>
                                    <img 
                                        className="carousel-item-img" 
                                        alt="First slide" 
                                        src={`${IMG_URL}` + this.props.movies[random].backdrop_path}
                                        key={index}
                                    /> 

                                    <div className="carousel-caption p-0">
                                        <div className='container p-0'>
                                            <h1>{movie.title}</h1>
                                            <p className='lead' key={movie.id}>
                                                {gen.map ((genre, index) => (
                                                    movie.genre_ids.includes(genre.id) 
                                                        ? `${genre.name}\xa0\xa0\xa0\xa0` 
                                                        : null
                                                ))}
                                            </p>
                                            <button type="button" className="btn btn-warning">
                                                <span>Watch Trailer &nbsp;</span>
                                                <i className="far fa-play-circle"></i>
                                            </button>
                                            <div className='extra-info'>
                                                <span className='in-theather'>In theaters</span>
                                                <br />
                                                <span className='release'>{movie.release_date.split('-').join(' ')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })}
                    </div>
                
                    {this.props.movies.map (movie => (
                        <div className="carousel-item">
                            <CarouselItem movie={movie} key={movie.id} />
                        </div>
                    ))}
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </Fragment>
);
    }
}
 
export default MainSlider;