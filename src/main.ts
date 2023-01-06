import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import auth from './plugins/auth'
import './assets/index.css'
import store from './store'
import toast from './plugins/toast'

const app = createApp(App)

app.use(router)
app.use(axios, {
  baseURL: import.meta.env.VITE_API_URL
})
app.use(store)
app.use(auth, {
  token: 'AuthToken'
})
app.use(toast)


app.mount('#app')
