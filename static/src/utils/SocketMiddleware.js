import * as types from '../actions/types'

export default function socketMiddleware(socket){
    return ({dispatch, getState}) => (next) => (action) => {

        if (typeof action === 'function') {
            return action(dispatch, getState);
        }

        switch(action.type){
            case types.SOCKET_CONNECT_REQUEST:
                socket.connect(dispatch);
                break;
            case types.SOCKET_ATTACH_REQUEST:
                socket.attach(action.eventName, dispatch);
                break;
        }

        return next(action);
    }
}
