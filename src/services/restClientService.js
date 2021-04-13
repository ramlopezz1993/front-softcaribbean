'use strict'

import Vue from 'vue'

export default {

  delete (url) {
    return Vue.axios.delete(url)
  },

  get (url, opcionesHttp) {
    return Vue.axios.get(url, opcionesHttp)
  },

  post (url, modelo) {
    return Vue.axios.post(url, modelo)
  },

  put (url, filtros = {}) {
    return Vue.axios.put(url, filtros)
  }
}
