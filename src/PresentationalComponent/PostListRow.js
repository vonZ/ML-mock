import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PostListRow = ({post}) => {
  return (
        <tr>
          <td>{post.id}</td>
          <td>{post.Author}</td>
          <td><Link to={'/memorypost/' + post.id}>{post.Text}</Link></td>
          <td>{post.Location}</td>
        </tr>
  );
};

PostListRow.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListRow;
