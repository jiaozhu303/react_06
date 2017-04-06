import React from 'react';
import {Router, Route, hashHistory, IndexRoute, Redirect, browserHistory} from 'react-router';

import Main from '../containers/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/profile/:userName" component={Profile}/>
        </Route>
    </Router>
);