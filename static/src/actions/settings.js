import * as types from './types'
import WebAPIUtils from '../utils/WebAPIUtils'
import * as userActions from './user'

export function changeLimit(limit){
    return dispatch => {
        dispatch({type: types.CHANGELIMIT_REQUEST});

        return WebAPIUtils.changeLimit(limit).then((res)=> {
            dispatch({type:types.CHANGELIMIT_SUCCESS, message: res.message});
         }).catch((err)=>{
            dispatch({type: types.CHANGELIMIT_FAILED, error:err});
        })


    }
}

export function changeLimitAndUpdateUserData(limit){
    return (dispatch, getState) => {
        return dispatch(changeLimit(limit)).then(() => {
            return dispatch(userActions.getUserData())
        })
    }
}
