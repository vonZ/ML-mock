import * as types from 'Actions/ActionTypes/ActionTypes';
import initialState from 'Reducers/initialState';

export default function revealStatusReducer(state = initialState.revealOpen, action) {
  switch (action.type) {
    case types.OPEN_REVEAL:
      return {
        revealStatus: true
      }

    case types.CLOSE_REVEAL:
    return {
      revealStatus: false
    }

    default:
      return state;
  }

}
