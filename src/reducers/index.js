//Root Reducer

import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgess from './ajaxStatusReducer';

const rootReducer = combineReducers ({
  courses,
  authors,
  ajaxCallsInProgess 
});

export default rootReducer;
