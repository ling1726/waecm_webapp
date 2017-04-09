import * as types from './types'
import WebAPIUtils from '../utils/WebAPIUtils'


export function getUserData(){
    return dispatch =>{
        dispatch({type: types.USER_GET_DATA_REQUEST});

        WebAPIUtils.getUserData().then((res) => {
            debugger
            dispatch({type: types.USER_GET_DATA_SUCCESS, user: res});
        }).catch((err) => {
            debugger
            dispatch({type: types.USER_GET_DATA_FAILED})
        })
    }
}