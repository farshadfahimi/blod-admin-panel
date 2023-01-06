import type { App } from 'vue'

export interface IToaster {
  readonly success: Function
  readonly danger: Function
  readonly warning: Function
  readonly info: Function
}

export default {
  install: (app: App, options: any) => {
    const { $store } = app.config.globalProperties

    class Toaster {
      static success(message: string | string[]) {
        $store.commit('addToast', { type: 'success', message })
      }
  
      static danger(message: string | string[]) {
        $store.commit('addToast', { type: 'danger', message })
      }
      
      static warning(message: string | string[]) {
        $store.commit('addToast', { type: 'warning', message })
      }
  
      static info(message: string | string[]) {
        $store.commit('addToast', { type: 'info', message })
      }
    }

    app.config.globalProperties.$toaster = Toaster
    app.provide('toaster', Toaster)
  }
}