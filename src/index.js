import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import ReactDOM from 'react-dom';

import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

import Login from './pages/login/login';
import Home from './pages/home/home';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
