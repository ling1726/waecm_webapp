import * as types from './types';
import WebAPIUtils from '../utils/WebAPIUtils';


/* 
    THE USE OF THIS FILE IS NOW DEPRECATED
    PLEASE PUT ALL ACTIONS INTO SEPARATED LOGICALLY
    SEPARATED FILES
*/

/*
export function increment(){
	return dispatch =>{
        dispatch({type: types.COUNTER_INCREMENT_REQUEST});

        WebAPIUtils.incrementCounter().then((res) => {
            dispatch({type: types.COUNTER_INCREMENT_SUCCESS, value: res.value});
        }).catch((err) => {
            if(err.response.status === 401){
                debugger
                dispatch({type: types.COUNTER_INCREMENT_UNAUTHORIZED, error: 'please log in and try again!'})
            }else{
                dispatch({type: types.COUNTER_INCREMENT_FAILED})
            }
        })
    	
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

export function checkAuthToken(){
    return dispatch =>{ debugger
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

}*/
