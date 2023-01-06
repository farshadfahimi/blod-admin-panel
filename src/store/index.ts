import { createStore } from 'vuex'

interface Toast {
  type: string,
  message: string | string[]
}

interface StoreStates {
  toasts: Toast[],
  user: any,
  loggedIn: boolean
}

const store = createStore({
  state: () => ({
    toasts: [],
    user: null,
    loggedIn: false
  }) as StoreStates,

  mutations: {
    // start user mutations
    setUser(state, payload) {
      state.user = payload
    },

    setLoggedIn(state, payload) {
      state.loggedIn = payload
    },

    // start toaster mutations
    clearToast(state) {
      state.toasts = []
    },

    addToast(state, payload: Toast) {
      state.toasts.push(payload)
    },

    removeToast(state) {
      state.toasts.splice(state.toasts.length - 1, 1)
    }
  }
})


export default store