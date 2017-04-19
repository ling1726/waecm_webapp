import * as types from './types'
import WebAPIUtils from '../utils/WebAPIUtils'


export function getTransfer(){
    return dispatch =>{
        dispatch({type: types.TRANSFER_GET_DATA_REQUEST});

        WebAPIUtils.getTransfer().then((res) => {

            dispatch({type: types.TRANSFER_GET_DATA_SUCCESS});
        }).catch((err) => {
            dispatch({type: types.TRANSFER_GET_DATA_FAILED, error: err})
        })
    }
}

export function createTransfer(transferData){
    return dispatch =>{
        dispatch({type: types.TRANSFER_CREATE_REQUEST});

        WebAPIUtils.createTransfer(transferData).then((res) => {
            dispatch({type: types.TRANSFER_CREATE_SUCCESS, message: res.message});
        }).catch((err) => {
            dispatch({type: types.TRANSFER_CREATE_FAILED, error: err})
        })
    }
}


