
import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader/root';

// Components
import Popular from './components/Popular.jsx';
import Navbar from './components/Navbar.jsx';

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
                <Navbar />
                <div className='container'>
                    <h1 className='display-1'>Popular movies</h1>
                    <Popular movies={this.state.movies}/>
                </div>
            </Fragment>
        );
    }
}
 
export default hot(App);