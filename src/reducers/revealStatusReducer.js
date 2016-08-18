import * as types from 'Actions/ActionTypes/ActionTypes';
import initialState from 'Reducers/initialState';

export default function revealStatusReducer(state = initialState.revealOpen, action) {
  switch (action.type) {
    case types.OPEN_REVEAL:
      return [
        ...state,
        Object.assign({}, true)
      ];

    case types.CLOSE_REVEAL:
      return [
        ...state,
        Object.assign({}, false)
      ];

    default:
      return state;
  }

}
