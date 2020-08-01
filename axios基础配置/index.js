import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? `${window.location.protocol}//${window.location.host}` : 'xxxx.com'

const service = axios.create({
  baseURL,  // 公共请求接口前缀
  timeout: 5000  // 最长请求等待时间
})

// 请求拦截
service.interceptors.request.use(config => {
  config.headers['Authorization'] = 'token' // token
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截
service.interceptors.response.use(response => {
  return response.data
}, err => {
  console.log('err' + err) // for debug
  return Promise.reject(err)
})

const request = service

export default request

