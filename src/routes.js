import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LisitingMemoryPost from 'Container/ContainerListingMemoryPosts';
import ManageMemoryPost from 'Container/ContainerManageMemoryPost';

export default (
  <Route path="/" component={App}>
    // Home page
    <IndexRoute component={HomePage} />
    // MemoryPost page
    <Route path="memoryposts" component={LisitingMemoryPost} />
    <Route path="memorypost" component={ManageMemoryPost} />
    <Route path="memorypost/:id" component={ManageMemoryPost} />
    // About page
    <Route path="about" component={AboutPage} />
  </Route>
);
