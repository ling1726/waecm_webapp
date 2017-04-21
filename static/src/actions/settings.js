import * as types from './types'
import WebAPIUtils from '../utils/WebAPIUtils'


export function changeLimit(limit){
    return dispatch => {
        dispatch({type: types.CHANGELIMIT_REQUEST});

        WebAPIUtils.changeLimit(limit).then((res)=> {
            console.log("before success!")
            dispatch({type:types.CHANGELIMIT_SUCCESS, message: res.message});
            console.log("after success!")
         }).catch((err)=>{
            dispatch({type: types.CHANGELIMIT_FAILED, error:err});
        })


    }
}


