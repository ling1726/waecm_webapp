import * as types from './types'
import WebAPIUtils from '../utils/WebAPIUtils'


export function getStatsForInterval(interval){
    return dispatch => {
        dispatch({type: types.STATS_GET_DATA_FOR_INTERVAL_REQUEST});

        WebAPIUtils.getStatsData(interval).then((res) => {
            dispatch({type: types.STATS_GET_DATA_FOR_INTERVAL_SUCCESS, stats: res});
        }).catch((err) => {
            dispatch({type: types.STATS_GET_DATA_FOR_INTERVAL_FAILED, error: err})
        })
    }
}

export function setShowDifference(showDiff){
    return dispatch => {
        dispatch({type: types.STATS_SET_SHOW_DIFFERENCE, showDiff: showDiff})
    }
}