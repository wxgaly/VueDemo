import * as axios from 'axios'
import qs from 'qs'

var instance = axios.create({
  baseURL: 'http://192.168.0.4:9000',
  timeout: 2000,
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json' // application/x-www-form-urlencoded
  },
  withCredentials: true,
  credentials: 'same-origin'
})

var login = function (username, password) {
  instance.post('/api/login', qs.stringify({username: username, password: password})
  ).then(function (response) {
    console.log(response)
  }).catch(function (response) {
    console.log(response)
  })
}

export {
  login
}
