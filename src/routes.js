import React from 'react';
// Route object is the object that we're going to use to define
// a match between a URL and a component
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';


// This matches the path of forward slash to the component of App
// Whenever the user at this path, show the component App

// Exports this rule back to index.js so it can know about this rule

// IndexRoute
// If the route is forward slash, show App and show PostsIndex
// If the route only matches the parent, then show the IndexRoute (the default route)
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
    </Route>
);