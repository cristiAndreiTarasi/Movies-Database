
import { hot } from 'react-hot-loader/root';
import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Navbar from './sections/Navbar.jsx';
import Theaters from './sections/Theaters.jsx';
import Kids from './sections/Kids.jsx';
import TV from './sections/TV.jsx';
import NotFound from './sections/NotFound.jsx';
import LoadMoreButton from './sections/LoadMoreButton.jsx';

// lazy loaded
// const Navbar = lazy(() => import('./sections/Navbar.jsx'));
// const Theaters = lazy(() => import('./sections/Theaters.jsx'));
// const Kids = lazy(() => import('./sections/Kids.jsx'));
// const TV = lazy(() => import('./sections/TV.jsx'));
// const NotFound = lazy(() => import('./sections/NotFound.jsx'));
// const LoadMoreButton = lazy(() => import('./sections/LoadMoreButton.jsx')); 

export default hot(() => (
    <BrowserRouter>
        <Fragment>
            {/* <Suspense fallback={<p>Loading... ⏳⏳⏳</p>}> */}
                <Navbar />
                <Switch>
                    <Route path='/' component={Theaters} exact />
                    <Route path='/kids' component={Kids} exact />
                    <Route path='/tv' component={TV} exact />
                    <Route component={Theaters} exact />
                </Switch>
                <LoadMoreButton />
            {/* </Suspense> */}
        </Fragment>
    </BrowserRouter>
));