import * as types from'Actions/ActionTypes/ActionTypes';

console.log("Inne i RevealActions");

export function openReveal() {
  return {type: types.OPEN_REVEAL};
}

export function closeReveal() {
  return {type: types.CLOSE_REVEAL};
}
