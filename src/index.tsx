import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore  from '../src/components/store/store'


import Routes from '../src/routes/routes';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

const store = configureStore()

ReactDOM.render(
  // <React.StrictMode>
  //   <App store={store} />
  // </React.StrictMode>,
  <Provider store={store}>
  <Router>
    <Routes />
  </Router>
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
