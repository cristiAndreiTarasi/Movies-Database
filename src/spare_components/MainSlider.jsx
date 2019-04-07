import React, { Component, Fragment } from 'react';

import CarouselItem from './CarouselItem.jsx';
import CarouselIndicators from './CarouselIndicators.jsx';
import CarouselActiveItem from './CarouselActiveItem.jsx';
import CarouselControls from './CarouselControls.jsx';

class MainSlider extends Component {
    render () {
        return (
            <Fragment>
                <div className='jumbotron'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                        <CarouselIndicators />

                        <div className="carousel-inner">
                            <CarouselActiveItem movies={this.props.movies} />
                            {this.props.movies.map (movie => (
                                <div className="carousel-item">
                                    <CarouselItem movie={movie} key={movie.id} />
                                </div>
                            ))}
                        </div>

                        <CarouselControls />
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default MainSlider;