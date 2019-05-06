
import React from 'react';

export default ({onOpen}) => (
    <button type="button" className="btn btn-warning btn-sm trailer"  onClick={onOpen}>
        <span>Watch Trailer &nbsp;</span>
        <i className="far fa-play-circle fa-lg"></i>
    </button>
);