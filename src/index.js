// babel polyfill for new features - generators, async/await etc
// import '@babel/polyfill';

// react modules
import React from 'react';
import ReactDOM from 'react-dom';

// styles related modules and files
import './styles/main.scss';

// bootstrap utilities
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// main component
import App from './components/App.jsx';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


