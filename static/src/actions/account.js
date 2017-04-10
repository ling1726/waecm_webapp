import * as types from './types'
import WebAPIUtils from '../utils/WebAPIUtils'


export function getAccountData(){
    return dispatch =>{
        dispatch({type: types.ACCOUNT_GET_DATA_REQUEST});

        WebAPIUtils.getAccountData().then((res) => {

            dispatch({type: types.ACCOUNT_GET_DATA_SUCCESS, account: res});
        }).catch((err) => {

            dispatch({type: types.ACCOUNT_GET_DATA_FAILED})
        })
    }
}