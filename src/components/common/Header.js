import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({}) => {
  return (
    <nav>
      {/*<IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/posts" activeClassName="active">Posts</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>*/}
    </nav>
  );
};

Header.propTypes = {
}

export default Header;
