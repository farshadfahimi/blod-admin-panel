import { AxiosResponse } from 'axios'
import Axios from './axios'
const AuthKey: string = import.meta.env.VITE_AUTH_KEY

export interface BaseAuthForm {
  email: string,
  password: string
}

interface Auth {
  isLoggedIn: boolean,
  user: Object | null
}

export function setUserToken(token: string) :void {
  localStorage.setItem(AuthKey, token)
}

export function getUserToken() :string | null {
  return localStorage.getItem('auth.token')
}

export async function baseSigninUser(data: BaseAuthForm) {
  try {
    const response: AxiosResponse = await Axios.post('/auth/signin', data)
    
    setUserToken(response.data.token)

    getUser()
  } catch (e) {

  }
}

export async function baseSignupUser(data: BaseAuthForm) {
  try {
    const response: AxiosResponse = await Axios.post('/auth/signup', data)

    setUserToken(response.data.token)

    getUser()
  } catch (e) {
    
  }
}

export async function getUser() :Promise<Auth> {
  const defaultAuth: Auth = { isLoggedIn: false, user: null }

  try {
    const token = getUserToken()
    if (!token)
      throw new Error()

    const response: AxiosResponse = await Axios.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return { isLoggedIn: true, user: response.data }
  } catch (e) {
    return defaultAuth
  }
}