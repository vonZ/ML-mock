import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as postActions from 'Actions/ActionCreators/PostActions';
import PostList from 'Static/PostList';
import PostForm from 'Static/PostForm';
import toastr from 'toastr';

class LisitingMemoryPost extends React.Component {
  constructor(props, context) {
      super(props, context);
      // this.redirectToAddPostPage = this.redirectToAddPostPage.bind(this);

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
          this.setState({saving: false});
        })
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Post was sucessfully saved');
  }

  postItem(post, index) {
    return <div key={index}>{post.Text}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/post');
  }

  /**
    Render functions
  **/
  render() {
    const {posts} = this.props;
    return (
      <div>
        <section className="add-memory">
          <div className="row">
            <div className="columns">
              <div className="align-center">
                <input  type="submit"
                        value="Add Course"
                        className="btn btn-primary"
                        onClick={this.redirectToAddCoursePage}/>

                <button data-open="js-form-reveal">Formulär</button>
                <div className="reveal reveal--custom-reveal" id="js-form-reveal" data-reveal>
                    <div className="form-container">
                        <h1>Add memory</h1>
                        <PostForm
                          post={this.state.post}
                          onSave={this.savePost}
                          onChange={this.updatePostState}
                          saving={this.state.saving}
                          errors={this.state.errors}
                        />
                    </div>
                </div>
                <PostList posts={posts} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

/**
  Prop types
**/
LisitingMemoryPost.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function getPostById(posts, id) {
  const post = posts.filter(post => post.id == id);
  if (post.length) return post [0]; //since filter returns an array, grab the first one in the array
  return null;
}

/**
  Redux connect and related functions
**/
function mapStateToProps(state, ownProps) {
  const postId = ownProps.params.id; // from the path '/memorypost/:id'
  let post = {id: '', Author: '', Text: '', Image: null, Date: '', Location: ''};

  if (postId && state.posts.length > 0) {
    post = getPostById(state.posts, postId);
  }
  return {
    posts: state.posts, //from the rootReducer
    post: post
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LisitingMemoryPost);
