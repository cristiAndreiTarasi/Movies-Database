// babel polyfill for new features - generators, async/await etc
import '@babel/polyfill';

// react modules
import React from 'react';
import ReactDOM from 'react-dom';

// styles related modules and files
import './styles/main.scss';

// main component
import App from './components/App.jsx';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


