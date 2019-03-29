import React, { Component } from 'react';

class Movie extends Component {
    render () {
        const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
        const { poster_path, title } = this.props.movie;

        return (
            <div className="panel">
                <img className="panel-img" src={`${IMG_URL}` + poster_path} alt="Card image cap" />
                <div className="panel-body">
                    <h5 className="panel-title">{title}</h5>
                    <h5 className="panel-title">Action, sci-\fi</h5>
                    <h5 className="panel-title">Imdb Rating</h5>
                </div>
            </div>
        );
    }
}

export default Movie;