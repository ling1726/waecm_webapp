import * as types from './types';
import WebAPIUtils from '../utils/WebAPIUtils';

export function increment(value){
    value++;
    return {
        type: types.INCREMENT,
        value
    }
}

export function getCurrent(){ 
    return dispatch =>{
        dispatch({type: types.COUNTER_REQUEST});

        WebAPIUtils.getCurrentCounter().then((res) => {
            dispatch({type: types.COUNTER_SUCCESS, value: res.value});
        }).catch((err) => {
            dispatch({type: types.COUNTER_FAILED})
        })
    }
}


export function getAuthToken(loginData){ 
    return dispatch => {
        dispatch({type: types.AUTH_REQUEST});

        WebAPIUtils.getAuthToken(loginData).then((res) => { 
            localStorage.token = res.access_token;
            dispatch({type: types.AUTH_SUCCESS, token: res.access_token});
        }).catch((err) => { 
            dispatch({type: types.AUTH_FAILED});
        })
    }
}
