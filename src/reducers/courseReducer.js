//Handle a specific slice of state
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state, //Spread operator - all items of the array
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      // Filters the items of the array from the states and returns
      // the list of courses expect the one that is beeing updated
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
