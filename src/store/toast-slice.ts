import { createSlice } from "@reduxjs/toolkit"

export interface ToastStates {
  type: string,
  message: string | string[]
}

interface InitialState {
  toasts: ToastStates[]
}

const initialState: InitialState = {
  toasts: []
}

const toastSlice = createSlice({
   name: 'toasts',
   initialState,
   reducers: {
    // start toaster mutations
    clear(state) {
      state.toasts = []
    },

    // add(state) {
    //   const toaster = state.toasts
    //   toaster.push(payload)
      
    //   state.toasts = toaster
    // },

    // remove(state) {
    //   state.toasts.splice(state.toasts.length - 1, 1)
    // },
   }
})

export const { clear } = toastSlice.actions
export default toastSlice.reducer