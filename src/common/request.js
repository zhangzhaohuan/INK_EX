/**
 * create by yinghui(张兆欢) in 2017/5/29
 * 
 */

import querystring from 'querystring';
import axios from 'axios';

const WITH_CREDENTIALS = true;
const CONTENT_TYPE = 'Content-Type';
// const MULTIPART = 'multipart/form-data';
const URLENCODED = 'application/x-www-form-urlencoded';
const HEADEERS = { 'Accept': 'application/json', [CONTENT_TYPE]: URLENCODED };

/**
 * 发起一个请求
 * @param {string} method HTTP method
 * @param {string} url 请求的目标 URL
 * @param {object} params 请求参数对象
 * @param {object} opts 请求选项
 */
export async function request(method, url, params, opts) {
  opts = Object.assign({}, opts);
  params = Object.assign({}, params);
  const headers = Object.assign({}, HEADEERS, opts.headers);
  const withCredentials = opts.withCredentials || WITH_CREDENTIALS;
  // if (opts.multipart) delete headers[CONTENT_TYPE];
  let query, config;
  config = {
    "method": method,
    "url": url,
    "headers": headers,
    "withCredentials": withCredentials
  }
  if (method === 'GET') {
    query = querystring.stringify(params);
    const url_query = JSON.stringify(params) === "{}" ? url : `${url}?${query}`;
    config = Object.assign(config, { "params": params }, { "url": url_query });
  } else {
    config = Object.assign(config, { "data": params })
  }
  axios.interceptors.request.use(function (config) {
    //在请求发出之前进行一些操作
    return config;
  }, function (err) {
    //Do something with request error
    console.log(err);
    return Promise.reject(error);
  });
  axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  try {
    const res = await axios(config);
    return res;
  } catch (e) {
    console.log(e);
    return {};
  }

}

/**
 * 发起一个 get 请求
 * @param {*} args 参数：url,param,opts
 */
export function get(...args) {
  return request('GET', ...args);
}

/**
 * 发起一个 post 请求
 * @param {*} args 参数：url,param,opts
 */
export function post(...args) {
  return request('POST', ...args);
}



request.request = request;
request.get = get;
request.post = post;
export default request;


// 复制代码
// let fetcher = axios.create({
//   timeout: 6000, // 设置请求超时时间6s
//   baseURL: baseUrl,
// })

// fetcher.interceptors.request.use(function (config) {
//   config.headers.ssotoken = storage.get('ssotoken')
//   config.headers.ssouid = storage.get('ssouid')
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

// fetcher.interceptors.response.use(function (response) {
//   if (response.data.code === 2) {
//     location.href = login
//   }
//   return response.data
// }, function (error) {
//   console.log(error.message)  // 统一处理错误信息
//   return Promise.reject(error)
// })