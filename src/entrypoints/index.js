import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from 'Store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from 'mainPath/routes';
import {loadPosts} from 'Actions/ActionCreators/PostActions';
import 'mainPath/styles/styles.css';
import 'distPath/screen.css';
import 'nodeModulesPath/bootstrap/dist/css/bootstrap.min.css';
import 'nodeModulesPath/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadPosts());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
