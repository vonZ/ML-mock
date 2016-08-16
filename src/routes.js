import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import LisitingMemoryPost from 'ContainerComponent/ContainerListingMemoryPosts';
import ManageMemoryPost from 'ContainerComponent/ContainerManageMemoryPost';

export default (
  <Route path="/" component={App}>
    // Home page
    <IndexRoute component={HomePage} />
    // Course page
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    // MemoryPost page
    <Route path="memoryposts" component={LisitingMemoryPost} />
    <Route path="memorypost" component={ManageMemoryPost} />
    <Route path="memorypost/:id" component={ManageMemoryPost} />
    // About page
    <Route path="about" component={AboutPage} />
  </Route>
);
