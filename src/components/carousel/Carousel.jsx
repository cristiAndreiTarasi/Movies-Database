import React, { Fragment } from 'react';

import CarouselItem from './CarouselItem.jsx';
import CarouselIndicators from './CarouselIndicators.jsx';
import CarouselActiveItem from './CarouselActiveItem.jsx';
import CarouselControls from './CarouselControls.jsx';

export default ({movies}) => (
    <Fragment>
        <div className='jumbotron'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <CarouselIndicators movies={movies}/>

                <div className="carousel-inner">
                    <CarouselActiveItem movies={movies} />
                    
                    {movies.map (movie => (
                        <div className="carousel-item">
                            <CarouselItem data={movie} key={movie.id} />
                        </div>
                    ))}
                    
                </div>
                <CarouselControls />
            </div>
        </div>
    </Fragment>
);