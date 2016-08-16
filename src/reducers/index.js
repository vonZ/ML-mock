//Root Reducer

import {combineReducers} from 'redux';
import courses from 'Reducers/courseReducer';
import authors from 'Reducers/authorReducer';
import posts from 'Reducers/postReducer';
import ajaxCallsInProgess from './ajaxStatusReducer';

const rootReducer = combineReducers ({
  courses,
  authors,
  posts,
  ajaxCallsInProgess
});

export default rootReducer;
