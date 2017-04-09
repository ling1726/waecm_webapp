import axios from 'axios';

export default class {
    static incrementCounter(){
        return axios({
            url: '/api/counter',
            method: 'post',
            headers:{'Authorization': `JWT ${localStorage.token}`}
        }).then((res) => {
            return res.data
        })
    }

    static getCurrentCounter(){
        return axios({
            url: '/api/counter',
            method: 'get',
        }).then((res) => {
            return res.data
        })
    }

    static getAuthToken(loginData){
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

    static checkAuthToken(){
        return axios({
            url: '/checkAuth',
            method: 'post',
            headers: {'Authorization': `JWT ${localStorage.token}`}
        }).then((res) => {
            return res.data
        })
    }

    static getUserData(){
        return axios({
            url: '/api/user',
            method: 'get',
            headers: {'Authorization': `JWT ${localStorage.token}`}
        }).then((res) => {

            return res.data
        }).catch((err) => {

            return err
        })
    }
}
