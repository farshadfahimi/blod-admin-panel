import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.headers.common['Content-Type'] = 'application/json'

export const setAuthorization = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  axios.defaults.headers.withCredentials = true
}

export default axios
