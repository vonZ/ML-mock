import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as postActions from 'Actions/ActionCreators/PostActions';
import PostList from 'Static/PostList';

class LisitingMemoryPost extends React.Component {
  constructor(props, context) {
      super(props, context);
      // this.redirectToAddPostPage = this.redirectToAddPostPage.bind(this);
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
                        value="Posta ett inlägg"
                        className="btn btn-primary"
                        onClick={this.redirectToAddCoursePage}/>
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
  posts: PropTypes.array.isRequired
};

/**
  Redux connect and related functions
**/
function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts //from the rootReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LisitingMemoryPost);
