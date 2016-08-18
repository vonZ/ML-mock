//Root Reducer

import {combineReducers} from 'redux';
import posts from 'Reducers/postReducer';
import ajaxCallsInProgess from 'Reducers/ajaxStatusReducer';
import revealStatus from 'Reducers/revealStatusReducer';

const rootReducer = combineReducers ({
  posts,
  ajaxCallsInProgess,
  revealStatus
});

export default rootReducer;
