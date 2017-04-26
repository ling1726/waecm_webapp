import * as types from './types'
import WebAPIUtils from '../utils/WebAPIUtils'


export function getTransfer(){
    return dispatch =>{
        dispatch({type: types.TRANSFER_GET_DATA_REQUEST});

        WebAPIUtils.getTransfer().then((res) => {

            dispatch({type: types.TRANSFER_GET_DATA_SUCCESS, message: res.message});
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

export function getTags(){
    return dispatch =>{
        dispatch({type: types.TRANSFER_GET_TAGS_REQUEST});
        WebAPIUtils.getTags().then((res) => {
            dispatch({type: types.TRANSFER_GET_TAGS_SUCCESS, tags: res.tags});
        }).catch((err) => {
            dispatch({type: types.TRANSFER_GET_TAGS_FAILED, error: err})
        })
    }
}

export function getTAN(){
    return dispatch =>{
        dispatch({type: types.TRANSFER_GET_TAN_REQUEST});
        WebAPIUtils.getTAN().then((res) => {
            dispatch({type: types.TRANSFER_GET_TAN_SUCCESS, message: res.message});
        }).catch((err) => {
            dispatch({type: types.TRANSFER_GET_TAN_FAILED, error: err})
        })
    }
}

