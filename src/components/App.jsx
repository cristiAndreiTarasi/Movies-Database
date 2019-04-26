
import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import LoadMoreButton from './sections/LoadMoreButton.jsx';

// lazy loaded
const Navbar = React.lazy(() => import('./sections/Navbar.jsx'));
const Theaters = React.lazy(() => import('./sections/Theaters.jsx'));
const Kids = React.lazy(() => import('./sections/Kids.jsx'));
const TV = React.lazy(() => import('./sections/TV.jsx'));
const NotFound = React.lazy(() => import('./sections/NotFound.jsx'));

export default hot(() => (
    <BrowserRouter>
        <Fragment>
            <React.Suspense fallback={<p>PLease wait</p>}>
                <Navbar />
                <Switch>
                    <Route path='/' component={Theaters} exact />
                    <Route path='/kids' component={Kids} exact />
                    <Route path='/tv' component={TV} exact />
                    <Route component={NotFound} exact />
                </Switch>
                <LoadMoreButton />
            </React.Suspense>
        </Fragment>
    </BrowserRouter>
));