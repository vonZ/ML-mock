/***
*
* Combined container
* - Form
* - Listing
*
***/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as postActions from 'Actions/ActionCreators/PostActions';
import * as revealActions from 'Actions/ActionCreators/RevealActions';
import toastr from 'toastr';

class DetailMemoryPost extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        post: Object.assign({}, this.props.post)
      };

      console.log("this.state: ", this.state);
  }

  componentWillReceiveProps(nextProps ) {
    // When we are getting new posts via props, then run update the state
    // Don´t want to overwriting the state
    if (this.props.post.id != nextProps.post.id) {
      this.setState({revealStatus: true});
      // Necessary to populate form when existing post is loaded directly
      this.setState({post: Object.assign({}, nextProps.post)});
    }
  }

  redirectToAddMemoryPost() {
    browserHistory.push('/add-post');
  }

  onCloseReveal(event) {
    event.preventDefault();
    browserHistory.push('/posts');
  }

  redirectToCoursePage() {
    browserHistory.push('/posts');
  }

  /**
    Render functions
  **/
  render() {
    const {posts} = this.props;
    return (
      <div>
        <input  type="submit"
                value="Tillbaka"
                className="btn"
                onClick={this.redirectToCoursePage}/>
        <h3>Postdetail</h3>
      </div>
    );
  }
}

/**
  Prop types
**/
DetailMemoryPost.propTypes = {
  post: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getPostById(posts, id) {
  const post = posts.filter(post => post.id == id);
  if (post.length) return post [0]; //since filter returns an array, grab the first one in the array
  return null;
}

function openReveal() {
  console.log("Open reveal");
}

/**
  Redux connect and related functions
**/
function mapStateToProps(state, ownProps) {
  const postId = ownProps.params.id; // from the path '/memorypost/:id'

  let post = {
    id: '',
    heading: '',
    postContent: '',
    imageSrc: null,
    date: '',
    location: ''
  };

  if (postId && state.posts.length > 0) {
    post = getPostById(state.posts, postId);
    console.log("postId: ", postId);
    openReveal();
  }
  return {
    post: post
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMemoryPost);
