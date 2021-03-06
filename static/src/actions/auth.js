import * as types from './types'
import WebAPIUtils from '../utils/WebAPIUtils'


export function getAuthToken(loginData){ 
    return dispatch => {
        dispatch({type: types.AUTH_REQUEST});

        WebAPIUtils.getAuthToken(loginData).then((res) => { 
            localStorage.token = res.access_token;
            dispatch({type: types.AUTH_SUCCESS, token: res.access_token});
            dispatch({type: types.SOCKET_CONNECT_REQUEST});
            dispatch({type: types.SOCKET_ATTACH_REQUEST, eventName: types.NOTIFICATION});
        }).catch((err) => {
            dispatch({type: types.AUTH_FAILED});
        })
    }
}

export function checkAuthToken(){
    return dispatch =>{
        if(localStorage.token){
            WebAPIUtils.checkAuthToken().then((res) => {
                if(res){
                     dispatch({type: types.AUTH_SUCCESS, token: localStorage.token});
                }
            }).catch((err) => {
                return false; // this doesn't serve any purpose
            })
        }
    }

}

export function logout() {
    return dispatch => {
        if(localStorage.token){
            delete localStorage.token;
            dispatch({type: types.AUTH_LOGOUT, isLogged: false})
        }
    }
}
