import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// browserHistory is an object that tells React router how to interpret changes to the URL
// whenever the URL updates, React router is going to interpret everything
// after the protocol (after the address?)
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
