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

export {
  login
}
