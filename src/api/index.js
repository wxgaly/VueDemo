import axios from 'axios'
import qs from 'qs'

// var instance = axios.create({
//   baseURL: 'http://localhost:9000',
//   timeout: 2000,
//   mode: 'no-cors',
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json' // application/x-www-form-urlencoded
//   },
//   withCredentials: true,
//   credentials: 'same-origin'
// })

axios.defaults.baseURL = 'http://localhost:9000'
axios.defaults.timeout = 2000
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

var login = function (username, password, callback) {
  axios.post('/api/login', qs.stringify({username: username, password: password})
  ).then(function (response) {
    callback(response)
    console.log(response)
  }).catch(function (response) {
    console.log(response)
  })
}

var registerUser = function (username, password, callback) {
  axios.post('/api/registerUser', qs.stringify({username: username, password: password})
  ).then(function (response) {
    callback(response)
    console.log(response)
  }).catch(function (response) {
    console.log(response)
  })
}

const StatusCode = {
  OK: 0,
  EXCEPTION: 10000,
  USERNAME_OR_PASSWORD_ERROR: 10001,
  USERNAME_IS_REPEAT: 10002,
  USERNAME_OR_PASSWORD_IS_NULL: 10003
}

const StatusInfo = [
  {code: StatusCode.OK, message: '正确'},
  {code: StatusCode.EXCEPTION, message: '未知异常'},
  {code: StatusCode.USERNAME_OR_PASSWORD_ERROR, message: '用户名密码错误'},
  {code: StatusCode.USERNAME_IS_REPEAT, message: '用户名重复'},
  {code: StatusCode.USERNAME_OR_PASSWORD_IS_NULL, message: '用户名密码为空'}
]

var JsonResult = {
  code: StatusCode.EXCEPTION,
  message: '未知异常'
}

var getJsonResult = function (code) {
  StatusInfo.filter(state => {
    return code === state.code
  }).forEach(state => {
    console.log(state)
    JsonResult.code = code
    JsonResult.message = state.message
  })
  return JsonResult
}

export {
  login, registerUser, StatusCode, StatusInfo, JsonResult, getJsonResult
}
