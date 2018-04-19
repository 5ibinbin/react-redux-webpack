/**
 * @author Nickyzhang
 * @date 2018/4/18
 * @description file templates
 */

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