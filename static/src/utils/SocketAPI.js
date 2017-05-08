import io from 'socket.io-client'
import * as types from '../actions/types'

const url = "https://localhost:8080";


export default class SocketAPI{
    socket;

    // should only be called once user is fully authenticated
    connect(dispatch){
        this.socket = io.connect(url);
        this.socket.on("connect", () => { 
            this.socket.emit("join", {token: localStorage.token});
            dispatch({type: types.SOCKET_CONNECT_SUCCESS});
        });
        this.socket.on("connect_error", (error) => dispatch({type: types.SOCKET_CONNECT_FAILED}));
    }

    disconnect(dispatch){
        this.socket.disconnect(() => {
            this.socket = null;
            dispatch({type: types.SOCKET_DISCONNECT})
        })
    }

    attach(eventName, dispatch){
        if(!this.socket){
            dispatch({type: types.SOCKET_ATTACH_FAILED})
        }
        this.socket.on(eventName, (res) => dispatch({type: eventName, result: res}));
    }
}
