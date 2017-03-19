import axios from 'axios';

export default class {
    static incrementCounter(){
        return axios({
            url: '/api/counter',
            method: 'post'
        }).then((res) => {
            return res.data
        })
    }

    static getCurrentCounter(){ debugger
        return axios({
            url: '/api/counter',
            method: 'get',
        }).then((res) => {
            return res.data
        })
    }
}
