import axios, { type AxiosInstance } from 'axios'
import type { App } from 'vue'

export default {
  install: (app: App, options: any) => {
    axios.defaults.baseURL = options.baseURL

    app.config.globalProperties.$axios = axios

    app.provide('axios', axios)
  }
}