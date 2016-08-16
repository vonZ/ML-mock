import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  /**
    Render functions
  **/
  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input  type="submit"
                value="Add Course"
                className="btn btn-primary"
                onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

/**
  Prop types
**/
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

/**
  Redux connect and related functions
**/
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses //from the rootReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);