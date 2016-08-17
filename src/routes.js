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
    <Route path="posts" component={LisitingMemoryPost} />
    <Route path="post" component={ManageMemoryPost} />
    <Route path="post/:id" component={ManageMemoryPost} />
    // About page
    <Route path="about" component={AboutPage} />
  </Route>
);
