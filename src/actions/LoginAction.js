/**
 * @author Nickyzhang
 * @date 2018/4/19
 * @description file templates
 */
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