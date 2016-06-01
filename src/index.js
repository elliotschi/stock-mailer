import React from 'react';
import {
  render
} from 'react-dom';
import configureStore from './store/configureStore';
import routes from './routes';
import Hello from './components/hello';
import { Provider } from 'react-redux';

render(
  <Provider store={configureStore()}>
    <Hello />
  </Provider>
  , document.getElementById('root')
);