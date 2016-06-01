import React from 'react';
import {
  render
} from 'react-dom';
import configureStore from './store/configureStore';
import routes from './routes';
import Hello from './components/hello';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

render(
  <Provider store={configureStore()}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root')
);