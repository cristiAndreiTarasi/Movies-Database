
import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Navbar from './sections/Navbar.jsx';
import Footer from './sections/Footer.jsx';

// lazy loaded
const Theaters = lazy(() => import('./sections/Theaters.jsx'));
const Kids = lazy(() => import('./sections/Kids.jsx'));
const TV = lazy(() => import('./sections/TV.jsx'));

export default hot(() => (
    <BrowserRouter>
        <>
            <Suspense fallback={<p>Loading... ⏳⏳⏳</p>}>
                <Navbar />
                <Switch>
                    <Route path='/' component={Theaters} exact />
                    <Route path='/kids' component={Kids} exact />
                    <Route path='/tv' component={TV} exact />
                    <Route component={Theaters} exact />
                </Switch>
                <Footer />
            </Suspense>
        </>
    </BrowserRouter>
));