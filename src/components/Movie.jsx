import React from 'react';

const Movie = ({movies}) => {
    return (
        <div className='col-md-4'>
                {movies.map(movie => (
                    <div className="card">
                        <img className="card-img-top" src={movie.Poster} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="#" className="btn btn-primary">Details</a>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Movie;