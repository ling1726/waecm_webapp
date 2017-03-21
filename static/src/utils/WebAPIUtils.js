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

    static getAuthToken(loginData){debugger
        return axios({
            url: '/auth',
            method: 'post',
            data:JSON.stringify({
                username: loginData.username,
                password: loginData.password
            }),
            headers: {'Content-Type': 'application/json'}
        }).then((res) => {
            return res.data;
        })
    }
}
