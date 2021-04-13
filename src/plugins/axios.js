'use strict'

import Vue from 'vue'
import axios from 'axios'

/* Axios instance with the new configuration. */
const _axios = axios.create({})

/* Add a request interceptor. */
_axios.interceptors.request.use(
  function (config) {
    /* Show spinner loader */
    return config
  },
  function (error) {
    /* Hide spinner loader */
    return Promise.reject(error)
  }
)

/* Add a response interceptor. */
_axios.interceptors.response.use(
  function (response) {
    /* Hide spinner loader */
    return response
  },
  function (error) {
    /* Hide spinner loader */
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {

      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)
export default Plugin
