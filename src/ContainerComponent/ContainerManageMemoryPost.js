import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as postActions from 'Actions/ActionCreators/PostActions';
import PostForm from 'PresentationalComponent/PostForm';
import toastr from 'toastr';

class ManageMemoryPost extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      post: Object.assign({}, this.props.post),
      errors: {},
      saving: false
    };

    this.updatePostState = this.updatePostState.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  componentWillReceiveProps(nextProps ) {
    // When we are getting new posts via props, then run update the state
    // Don´t want to overwriting the state
    if (this.props.post.id != nextProps.post.id) {
      // Necessary to populate form when existing course is loaded directly
      this.setState({post: Object.assign({}, nextProps.post)});
    }
  }

  updatePostState(event) {
    const field = event.target.name;
    let post = this.state.post;
    post[field] = event.target.value;
    return this.setState({post: post});
  }

  savePost(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.savePost(this.state.post)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          console.log("this.state.post: ", this.state.post);
          console.log("error: ", error);
          this.setState({saving: false});
        })
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Post was sucessfully saved');
    this.context.router.push('/memoryposts');
  }

  redirectToCoursePage() {
    browserHistory.push('/memoryposts');
  }

  render() {
    return (
      <div>
        <h1>ContainerManageMemoryPost</h1>
        <p>Edit specific memory post</p>
        <PostForm
          allPosts={this.props.posts}
          onChange={this.updatePostState}
          onSave={this.savePost}
          post={this.state.post}
          errors={this.state.errors}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageMemoryPost.propTypes = {
  post: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageMemoryPost.contextTypes = {
  router: PropTypes.object
};

function getPostById(posts, id) {
  const post = posts.filter(post => post.id == id);
  if (post.length) return post [0]; //since filter returns an array, grab the first one in the array
  return null;
}

function mapStateToProps(state, ownProps) {
  const postId = ownProps.params.id; // from the path '/memorypost/:id'
  let post = {id: '', Author: '', Text: '', Image: null, Date: '', Location: ''};

  if (postId && state.posts.length > 0) {
    post = getPostById(state.posts, postId);
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageMemoryPost);
