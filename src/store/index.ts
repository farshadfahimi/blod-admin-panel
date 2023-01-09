import { configureStore } from '@reduxjs/toolkit'
import ToastReducer from '@/store/toast-slice'

export const store = configureStore({
  reducer: {
    toaster: ToastReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch