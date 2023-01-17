import { serialize as serializeCookie, parse as parseCookie } from 'cookie'
import axios, { setAuthorization } from '@/lib/Axios'
import type { Cookies } from '@sveltejs/kit'
import jwtDecode from 'jwt-decode'
import { writable, type Writable } from "svelte/store";

export enum Mode {
  CLIENT = 'client',
  SERVER = 'server'
}

interface IToken {
  sub: string,
  email: string
}

export interface Form {
  email: string,
  password: string
}

export interface User {
  id: string
  name: string,
  email: string
}

export const isLoggedIn: Writable<boolean> = writable(true)

export const user: Writable<null|User> = writable(null)

export const login = async (data: Form) => {
  try {
    const response = await axios.post(`/auth/signin`, data)

    setToken(response.data.token)
    
    getUser()

    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const signup = async (data: Form) => {
  try {
    const response = await axios.post('/auth/signup', data)
  
    setToken(response.data.token)
    
    getUser()

    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const setToken = (token: string, mode: Mode = Mode.CLIENT) => {
  try {
    if (mode === Mode.CLIENT) {
      setLocalStorage(token)
      setCookie(token)
    } else {
      setSession(token)
    }

    isLoggedIn.set(true)
    setAuthorization(token)
  } catch (e) {}
}

export const setLocalStorage = (token: string) => {
  localStorage.setItem(import.meta.env.VITE_AUTH_ORIGIN, token)
}

export const checkCookieToken = () :void => {
    const token = localStorage.getItem(import.meta.env.VITE_AUTH_ORIGIN)

    if (token && getToken() === null)
      setCookie(token)
}

export const setCookie = (token: string) :void => {
  const response = serializeCookie(import.meta.env.VITE_AUTH_ORIGIN, token, {
    httpOnly: import.meta.env.PROD,
    maxAge: 60 * 60 * 1000,
    path: '/',
    sameSite: 'none',
    secure: import.meta.env.PROD
  })

  document.cookie = response
}

export const getCookie = () :string|null => {
  const cookies = parseCookie(document.cookie)
  if (cookies[import.meta.env.VITE_AUTH_ORIGIN])
    return cookies[import.meta.env.VITE_AUTH_ORIGIN]

  return null
}

export const setSession = (token: string) :void => {
  // @TODO implement for ssr and set token
}

export const getToken = () :string|null => {
  return localStorage.getItem(import.meta.env.VITE_AUTH_ORIGIN)
}

export const getUser = async () :Promise<void> => {
  try {
    const response = await axios.get('/auth/me')
    user.set(response.data)
  } catch (e) {
    user.set(null)
  }
}

export function authHook(cookies: Cookies) {
  const token = cookies.get(import.meta.env.VITE_AUTH_ORIGIN)
  
  if (token) {
    isLoggedIn.update(_from => true)
    const info = jwtDecode(token) as IToken

    user.update(_from => ({ id: info.sub, email: info.email, name: '' }))
  }
}