import React, {PropTypes} from 'react';
import PostListRow from 'PresentationalComponent/PostListRow';

const PostList = ({posts}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Author</th>
          <th>Text</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post =>
          <PostListRow key={post.id} post={post} />
        )}
      </tbody>
    </table>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
