import * as types from 'Actions/ActionTypes/ActionTypes';
import memoryPostApi from 'mockApi/memoryPostApi';
import {beginAjaxCall} from 'Actions/ActionCreators/ajaxStatusActions';
import {ajaxCallError} from 'Actions/ActionCreators/ajaxStatusActions';

export function loadPostsSuccess(posts) {
  return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function createPostSuccess(post) {
  return {type: types.CREATE_POST_SUCCESS, post};
}

export function updatePostSuccess(post) {
  return {type: types.UPDATE_POST_SUCCESS, post};
}

export function loadPosts() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return memoryPostApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
};

export function savePost(post) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return memoryPostApi.savePost(post).then(post => {
      post.id ? dispatch(updatePostSuccess(post)) :
      dispatch(createPostSuccess(post))
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
