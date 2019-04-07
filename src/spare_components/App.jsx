
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { hot } from 'react-hot-loader/root';

// Assets
import '../assets/movie_rating';

// Components
import MainSlider from './MainSlider.jsx';
import Navbar from './Navbar.jsx';
import Popular from './Popular.jsx';
import InTheaters from './InTheaters.jsx';
import Kids from './Kids.jsx';
import TV from './TV.jsx';
import NotFound from './NotFound.jsx';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=b8250ca3c30d2309a8d3f99989c99410';

class App extends Component {
	state = {
        movies: [],
        animations: [],
        released: [],
        onTV: [] 
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
            <BrowserRouter>
                <Fragment>
                    <MainSlider movies={this.state.movies} />
                    <Navbar />
                    
                    <Switch>
                        <Route path='/' component={Popular} exact>
                            <Popular collection={this.state.movies}/>
                        </Route>
                        <Route path='/theaters' component={InTheaters} />
                        <Route path='/kids' component={Kids} />
                        <Route path='/tv' component={TV} />
                        <Route component={NotFound} />
                    </Switch>
                    
                </Fragment>
            </BrowserRouter>
        );
    }
}
 
export default hot(App);