import * as types from './types'
import WebAPIUtils from '../utils/WebAPIUtils'


export function getUserData(){
    return dispatch =>{
        dispatch({type: types.USER_GET_DATA_REQUEST});

        WebAPIUtils.getUserData().then((res) => {
            dispatch({type: types.USER_GET_DATA_SUCCESS, user: res});
        }).catch((err) => {
            dispatch({type: types.USER_GET_DATA_FAILED, error: err});
        })
    }
}


