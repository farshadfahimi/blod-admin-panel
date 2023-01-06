import type { SigninForm, SignupForm } from "@/interface";
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { App } from "vue";

export default {
  install: (app: App, options: any) => {
    const { $axios, $store } = app.config.globalProperties
    const token = window.localStorage.getItem('auth_token')
    
    if (token) {
      $axios.defaults.headers.common['Authorization'] = token

      $axios.get('users/me').then((response: AxiosResponse) => {
        $store.commit('setUser', response.data)
        $store.commit('setLoggedIn', true)
      }).catch(() => {})
    }

    // class Auth {
    //   private axios: AxiosInstance

    //   constructor(axios: AxiosInstance) {
    //     this.axios = axios
    //   }

    //   setUser(data: any) {
    //     $store.commit('setUser', data)
    //   }

    //   setLoggedIn(loggin: boolean) {
    //     $store.commit('setLoggedIn', loggin)
    //   }

    //   setToken(token: string) {
    //     window.localStorage.setItem(options.token, token)
    //   }

    //   getToken() {
    //     return window.localStorage.getItem(options.token)
    //   }

    //   async login(data: SigninForm) {
    //     try {
    //       const { response: ResponseType } = await this.axios.post('/auth/signup', data)
    //     } catch (e) {
    //       throw e
    //     }
    //   }
    // }


    // const authClass = new Auth($axios)

    // app.config.globalProperties.$auth = authClass
    // app.provide('auth', authClass)
  },
}