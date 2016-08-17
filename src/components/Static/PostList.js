import React, {PropTypes} from 'react';
import PostListRow from 'Static/PostListRow';

const PostList = ({posts}) => {
  return (
    <div className="post-container small-up-1 medium-up-2 large-up-3 row">
      {posts.map(post =>
        <PostListRow key={post.id} post={post} />
      )}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
