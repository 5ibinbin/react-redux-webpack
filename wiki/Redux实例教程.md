## Redux实例教程

###### 如果你对`redux`的各个概念不熟悉请查看这篇[文章](https://github.com/5ibinbin/reduxLifeStyle/blob/master/README.md)

#### 我们以登录为例来使用`redux`

##### `Login.js`

```
import React, {Component} from 'react';
import './login.less';
import  {connect} from 'react-redux';
import { getLoginInfo } from '../../actions/LoginAction';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'Nicky',
            password: 'zhang'
        }
    }
    render() {
        return (
            <div className="login" onClick={() => this.login()}></div>
        );
    }
    /**
     * 登录
     * */
    login = () =>{
        const {dispatch} = this.props;
        let params = {
            username: this.state.username,
            password: this.state.password
        };
        dispatch(getLoginInfo(params));
        this.props.history.push('/home');
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {};
}

export default connect(mapStateToProps)(Login);
```

> 首先通过`connect`将组件与`store`进行绑定，然后触发`login()`函数，根据不同的状态类型来执行不同的函数。

##### `ActionTypes.js`

```
const Login = {
    LOGIN_SUCCESS_ACTION : 'LOGIN_SUCCESS',
    LOGIN_ERROR_ACTION: 'LOGIN_ERR',
    LOGIN_PERFORM_ACTION: 'LOGIN_PERFORM'
};

export default {
    ...Login
}
```

> 我们将所有的动作类型单独放到一个文件里

##### `LoginAction.js`

```
import Action from './ActionTypes';
import {Login} from '../api/api';

export function getLoginInfo(params) {
    return (dispatch) => {
        dispatch(performLogin());
        Login(params)
            .then(res => {
                dispatch(successLogin(res.data));
            })
            .catch(err => {
                dispatch(errorLogin(err.data));
            });
    }
}
/**
 * action 创建函数
 * */
function performLogin() {
    return {
        type: Action.LOGIN_PERFORM_ACTION,
        data: 'click'
    }
}

function successLogin(result) {
    return {
        type: Action.LOGIN_SUCCESS_ACTION,
        data: result
    }
}

function errorLogin(result) {
    return {
        type: Action.LOGIN_ERROR_ACTION,
        data: result
    }
}
```

> `Login()`是一个网络请求。我们通过`Login.js`内的点击按钮来`dispatch`来触发`getLoginInfo `，在这个网络请求执行过程中，通过执行`dispatch(performLogin())`的形式来返回状态值。  

##### `LoginReducer.js`

```
import types from '../actions/ActionTypes';

const initialState = {
    data: [],
    loading: false
};
export default function LoginReducers(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_PERFORM_ACTION:
            return {...state, loading: true};
        case types.LOGIN_SUCCESS_ACTION:
            return {...state, data: action.data, loading: false};
        case types.LOGIN_ERROR_ACTION:
            return {...state, data: action.data, loading: false};
        default:
            return state;
    }
}
```

> `LoginReducer`根据`LoginAction.js`中不同的状态来执行不同的方法，返回数据。

##### `IndexReducer.js`

```
import {combineReducers} from 'redux';
import LoginReducer from './Login';

const rootReducers = combineReducers({
    LoginReducer
});

export default rootReducers;
```

> 通过`combinReducers`将各个`reducer`整合到一起

##### `configureStore.js`

```
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducers from '../reducers/Index';

export default function configureStore(initialState) {
    const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
    const store = createStoreWithMiddleware(rootReducers, initialState);
    return store;
}
```

> 将reducer返回的数据绑定到store中  

##### `Index.js`

```
import React from 'react';

import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

import Login from './pages/login/login';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Switch>
            <Route path="/" component={Login} exact/>
        </Switch>
    </Provider>, document.getElementById('root'));
```  

> Provider接受 Redux 的 store 作为 props。  

###### 基本的流程已经梳理完毕，需要梳理一下`redux`的数据流向

参考文章：

[Redux中文文档](http://www.redux.org.cn/)