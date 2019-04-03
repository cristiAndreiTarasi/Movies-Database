import React from 'react';

export default ({movies}) => (
    <ol className="carousel-indicators">
        {movies.map((movie, index) => (
            <li data-target="#carouselExampleIndicators" data-slide-to={index} key={index}></li>
        ))}
    </ol>
);