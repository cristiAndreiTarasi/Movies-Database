import React, { Component } from 'react';

class CarouselItem extends Component {
    render () {
        const IMG_URL = 'https://image.tmdb.org/t/p/w1280/';

        return (
            <div>
                <img 
                    className="carousel-item-img" 
                    alt="First slide" 
                    src={`${IMG_URL}` + this.props.movie.backdrop_path}
                />
            </div>
        );
    }
}
 
export default CarouselItem;