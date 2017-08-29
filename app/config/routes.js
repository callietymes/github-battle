import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';
import Main from '../components/Main';

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path="playerOne" header='Player One' component={PromptContainer} />
            <Route path="playerTwo/:playerOne" header='Player Two' component={PromptContainer} />
        </Route>
    </Router>
);

export default routes;