/**
 * Created by Administrator on 2017/7/19 0019.
 */
import Vue from 'vue'
import axios from 'axios'
import qs from 'querystring'

Vue.use(axios);

axios.defaults.timeout=1000;
axios.defaults.headers.get['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8';

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config)=> {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config
},(err)=>{
        return Promise.reject(err);
    }
);

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res)=>{
    //在这里对返回的数据进行处理
    return res;
},(err)=>{
    return Promise.reject(err);
});

//返回一个Promise,fetch可以多加一个params参数
export function  fetch(url){
    return new Promise((resolve,reject)=>{
        axios.get(url)
            .then((res)=>{
                resolve(res.data);
            },(err)=>{
                reject(err);
            })
            .catch(err=>{
                reject(err);
            })
    })
}
export default {
    yingjiesheng(){
        //return fetch('/api/yingjiesheng');
        return fetch('http://localhost:3000/api/yingjiesheng');

    }
}