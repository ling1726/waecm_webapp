import * as types from './types'
import WebAPIUtils from '../utils/WebAPIUtils'


export function changeLimit(limit){
    return dispatch => {
        dispatch({type: types.CHANGELIMIT_REQUEST});

        WebAPIUtils.changeLimit(limit).then((res)=> {
            dispatch({type:types.CHANGELIMIT_SUCCESS, message: res.message});
         }).catch((err)=>{
            dispatch({type: types.CHANGELIMIT_FAILED, error:err});
        })


    }
}


