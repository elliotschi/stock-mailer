import React from 'react';
import {
  render
} from 'react-dom';
import configureStore from './store/configureStore';
import routes from './routes';


render(
  <Provider store={configureStore()}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.getElementById('root')
);