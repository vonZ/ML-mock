//Handle a specific slice of state
import * as types from 'Actions/ActionTypes/ActionTypes';
import initialState from 'Reducers/initialState';

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;

    case types.CREATE_POST_SUCCESS:
      return [
        ...state, //Spread operator - all items of the array
        Object.assign({}, action.post)
      ];

    case types.UPDATE_POST_SUCCESS:
      // Filters the items of the array from the states and returns
      // the list of courses expect the one that is beeing updated
      return [
        ...state.filter(course => post.id !== action.post.id),
        Object.assign({}, action.post)
      ];

    default:
      return state;
  }
}
