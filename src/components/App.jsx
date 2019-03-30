
import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader/root';

// Components
import Popular from './Popular.jsx';
import MainSlider from './MainSlider.jsx';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=b8250ca3c30d2309a8d3f99989c99410';

class App extends Component {
	state = {
		movies: [],
    };

    async apiCall () {
        const getData = await fetch(`${BASE_URL}/discover/movie${API_KEY}`);
        const data = await getData.json();

        this.setState({ movies: this.state.movies.concat(data.results) });
        
        console.log(data.results);
    };
    
    componentDidMount () { 
        this.apiCall ();
    }

    render () {
        return (
            <Fragment>
                <MainSlider movies={this.state.movies} />
                <Popular movies={this.state.movies}/>
            </Fragment>
        );
    }
}
 
export default hot(App);