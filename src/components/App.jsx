
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Navbar from './sections/Navbar.jsx';
import Theaters from './sections/Theaters.jsx';
import Kids from './sections/Kids.jsx';
import TV from './sections/TV.jsx';
import NotFound from './sections/NotFound.jsx';
import LoadMoreButton from './sections/LoadMoreButton.jsx';

export default () => (
    <BrowserRouter>
        <Fragment>
            <Navbar />
            <Switch>
                <Route path='/' component={Theaters} exact />
                <Route path='/kids' component={Kids} exact />
                <Route path='/tv' component={TV} exact />
                <Route component={NotFound} exact />
            </Switch>
            <LoadMoreButton />
        </Fragment>
    </BrowserRouter>
);