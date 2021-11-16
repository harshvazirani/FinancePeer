import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller.js';

//Controller is the Controlled Component of the BookMovieApp application. Rest all components are Functional Components.
ReactDOM.render(<Controller/>, document.getElementById('root'));
registerServiceWorker();


