import React, {PropTypes} from 'react';
import Header from 'Common/Header';
import Hero from 'Common/Hero';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgess > 0
  };
}
export default connect(mapStateToProps)(App);
