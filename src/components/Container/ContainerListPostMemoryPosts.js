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
import RevealRightModal from 'Common/RevealRightModal';
import PostList from 'Static/PostList';
import PostForm from 'Static/PostForm';
import toastr from 'toastr';

class LisitingMemoryPost extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        post: Object.assign({}, this.props.post),
        errors: {},
        saving: false,
        revealStatus: false
      };

      console.log("this.state: ", this.state);

      this.updatePostState = this.updatePostState.bind(this);
      this.savePost = this.savePost.bind(this);
      this.openReveal = this.openReveal.bind(this);
  }

  componentWillReceiveProps(nextProps ) {
    // When we are getting new posts via props, then run update the state
    // Don´t want to overwriting the state
    if (this.props.post.id != nextProps.post.id) {
      this.setState({revealStatus: true});
      console.log("this.state.revealStatus: ", this.state.revealStatus);
      // Necessary to populate form when existing post is loaded directly
      this.setState({post: Object.assign({}, nextProps.post)});
    }
  }

  redirectToAddMemoryPost() {
    browserHistory.push('/add-post');
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
    console.log("this.state.saving: ", this.state.saving);

    this.props.actions.savePost(this.state.post)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        })
  }

  onCloseReveal(event) {
    event.preventDefault();
    browserHistory.push('/posts');
  }

  openReveal() {
    this.setState({revealStatus: true});
  }

  redirect() {
    this.setState({saving: false});
    this.setState({revealStatus: false});
    toastr.success('Reveal closed');
    console.log("revealStatus: ", this.state.revealStatus);
    toastr.success('Post was sucessfully saved');
    browserHistory.push('/posts');
  }

  postItem(post, index) {
    return <div key={index}>{post.Text}</div>;
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
                <div className="align-center small-up-6 medium-up-6 large-up-6 row">
                  <div className="text-center padding-v-2">
                      <input
                        type="submit"
                        value="Dela ett minne"
                        data-open="js-form-reveal"
                        onClick={this.redirectToAddMemoryPost}
                        revealStatus={this.openReveal}
                      />
                  </div>
                </div>
                <div className="reveal reveal--custom-reveal js-form-reveal" id="js-form-reveal" data-reveal>
                    <div className="form-container">
                        <h1>Add memory</h1>
                        <PostForm
                          post={this.state.post}
                          onSave={this.savePost}
                          onChange={this.updatePostState}
                          onCloseReveal={this.onCloseReveal}
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

function openReveal() {
  console.log("Open reveal");
}

/**
  Redux connect and related functions
**/
function mapStateToProps(state, ownProps) {
  const postId = ownProps.params.id; // from the path '/memorypost/:id'

  let post = {id: '', heading: '', postContent: '', imageSrc: null, date: '', location: ''};

  //Create local constanst from the api. If api changes, only the right side of the constants needs to be changed
  const localDataConstants = state.posts.map(post => {
    return {
      id: post.id,
      heading: post.heading,
      postContent: post.postContent,
      imageSrc: post.imageSrc,
      date: post.date,
      location: post.location
    };
  });

  if (postId && state.posts.length > 0) {
    post = getPostById(state.posts, postId);
    console.log("postId: ", postId);
    openReveal();
  }
  return {
    // posts: state.posts,
    posts: localDataConstants, //From the rootReducer
    post: post
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LisitingMemoryPost);
