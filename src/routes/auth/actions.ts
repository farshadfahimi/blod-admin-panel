import axios, { setAuthorization } from '../../module/Axios'
import { isLoggedin, user } from './store'

export interface Form {
  email: string,
  password: string
}

export const login = async (data: Form) => {
  try {
    const response = await axios.post(`/auth/signin`, data)

    setToken(response.data)
    
    getUser()
  } catch (e) {
    console.log(e)
  }
}

export const signup = async (data: Form) => {
  try {
    const response = await axios.post('/auth/signup', data)
  
    setToken(response.data)
    
    getUser()
  } catch (e) {
    console.log(e)
  }
}

export const setToken = (token: string) => {
  try {
    localStorage.setItem('auth.token', token)

    isLoggedin.set(true)
    setAuthorization(token)
  } catch (e) {}
}

export const getToken = () => {
  try {
    return localStorage.getItem('auth.token')
  } catch (e) {
    return null
  }
}

export const getUser = async () => {
  try {
    const response = await axios.get('/auth/me')
    user.set(response.data)
  } catch (e) {
    user.set(null)
    console.log(e)
  }
}