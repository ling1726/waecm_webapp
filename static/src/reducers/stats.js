import * as types from '../actions/types';

const initialState = {
    interval: "monthly",
    datapoints: null,
    showDifference: false
};

export default function reducers(state = initialState, action){
    switch (action.type){
        case types.STATS_GET_DATA_FOR_INTERVAL_REQUEST:
            return state;
        case types.STATS_GET_DATA_FOR_INTERVAL_SUCCESS:
            return {...state, datapoints: action.stats};
        case types.STATS_GET_DATA_FOR_INTERVAL_FAILED:
            return {...state};
        case types.STATS_SET_SHOW_DIFFERENCE:
            return {...state, showDifference: action.showDiff};
        default:
            return state;
    }
}
