import * as types from './types'
import WebAPIUtils from '../utils/WebAPIUtils'


export function getTransfer(){
    return dispatch =>{
        dispatch({type: types.TRANSFER_REQUEST});

        WebAPIUtils.getTransfer().then((res) => {

            dispatch({type: types.TRANSFER_SUCCESS, transfer: res});
        }).catch((err) => {
            dispatch({type: types.TRANSFER_FAILED, error: err})
        })
    }
}
