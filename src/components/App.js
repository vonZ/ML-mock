import React, {PropTypes} from 'react';
import Header from 'Common/Header';
import Hero from 'Common/Hero';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header
          loading={this.props.loading}
        />
        <Hero
          imo={this.props.imo}
          bgImage={this.props.bgImage}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  imo: PropTypes.string,
  bgImage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgess > 0
  };
}
export default connect(mapStateToProps)(App);
