import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import SignIn from './components/auth/SignInPage';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>

        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="signin" component={SignIn}/>
            </Route>
        </Router>

    </Provider>
    , document.querySelector('.container'));
