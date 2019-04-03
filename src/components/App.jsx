
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

// components
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Theaters from './Theaters.jsx';
import Kids from './Kids.jsx';
import TV from './TV.jsx';
import NotFound from './NotFound.jsx';

export default hot(() => (
    <BrowserRouter>
        <Fragment>
            <Navbar />

            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/theaters' component={Theaters} exact />
                <Route path='/kids' component={Kids} exact />
                <Route path='/tv' component={TV} exact />
                <Route component={NotFound} exact />
            </Switch>
        </Fragment>
    </BrowserRouter>
));