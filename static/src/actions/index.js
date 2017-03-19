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
