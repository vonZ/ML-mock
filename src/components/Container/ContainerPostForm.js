import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as postActions from 'Actions/ActionCreators/PostActions';
import PostList from 'Static/PostList';
import RevealRightModal from 'Common/RevealRightModal';
import ManageMemoryPost from 'Container/ContainerManageMemoryPost';

class PostForm  extends React.Component {
  constructor(props, context) {
      super(props, context);
      // this.redirectToAddPostPage = this.redirectToAddPostPage.bind(this);
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

      </div>
    );
  }
}

/**
  Prop types
**/
PostForm.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
