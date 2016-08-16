import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from 'Store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from 'mainPath/routes';
import {loadCourses} from 'Actions/courseActions';
import {loadAuthors} from 'Actions/authorActions';
import 'mainPath/styles/styles.css';
import 'nodeModulesPath/bootstrap/dist/css/bootstrap.min.css';
import 'nodeModulesPath/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
