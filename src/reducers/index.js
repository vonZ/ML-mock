//Root Reducer

import {combineReducers} from 'redux';
import posts from 'Reducers/postReducer';
import ajaxCallsInProgess from './ajaxStatusReducer';

const rootReducer = combineReducers ({
  posts,
  ajaxCallsInProgess
});

export default rootReducer;
