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
        })
    }


    static getAccountData(){
        return axios({
            url: '/api/account',
            method: 'get',
            headers: {'Authorization': `JWT ${localStorage.token}`}
        }).then((res) => {
            return res.data
        })
    }

    static getActivity(){
        return axios({
            url: '/api/account/activity',
            method: 'get',
            headers: {'Authorization': `JWT ${localStorage.token}`}
        }).then((res) => {
            return res.data
        })
    }

    static getStatsData(interval){
        return axios({
            url: '/api/stats',
            method: 'get',
            params: {
                interval: interval,
                diff: false
            },
            headers: {'Authorization': `JWT ${localStorage.token}`}
        }).then((res) => {
            return res.data
        })
    }

}

