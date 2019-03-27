
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

// Components
import Popular from './components/Popular.jsx';
import Navbar from './components/Navbar.jsx';

class App extends Component {
	state = {
		movies: [],
    };

    apiCall = async () => {
        const getData = await fetch('http://www.omdbapi.com/?apikey=8f244e29&t=movie&page=1-21');
        const data = await getData.json();

        this.setState({ movies: this.state.movies.concat(data) });
        
        console.log(data);
    };
    
    componentDidMount () { 
        this.apiCall ();
    }

    render () {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <h1 className='display-1'>Popular movies</h1>
                    <Popular movies={this.state.movies}/>
                </div>
            </div>
        );
    }
}
 
export default hot(App);