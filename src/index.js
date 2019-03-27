// babel polyfill for new features - generators, async/await etc
import '@babel/polyfill';

// react modules
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// styles related modules and files
import './styles/main.scss';

// main component
import App from './App.jsx';

// Clears the console after every reload/refresh, 
// this way solving the HMR overly verbose console output
/* window.addEventListener('message', e => {
    if ('production' !== process.env.NODE_ENV) {
        console.clear();
    }
}); */

// React Hot Loader stuff beyond this point - don't tamper with :))
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
}

render(App);

if(module.hot) {
    module.hot.accept('./App.jsx', () => { render(App) });
}


