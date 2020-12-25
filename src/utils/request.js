import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:8888/api/private/v1/'
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 请求 url 是登录则通过
  if (config.path === '/login') return
  // 请求不是 /login, 则在发送请求之前在请求头添加 token
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default request
