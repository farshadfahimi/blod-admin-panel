import axios, { AxiosInstance } from 'axios'
import { getUserToken } from './auth'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const token = getUserToken()
if (token)
  axios.defaults.headers.Authorization = `Bearer ${ token }`


export default axios