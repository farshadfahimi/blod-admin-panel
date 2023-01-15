import axios from '@/module/Axios'
import type { AxiosResponse } from 'axios'
import type { ICategory } from './categories'

export interface IPost {
  id?: string
  title: string,
  slug: string,
  cover?: string
  shortDesc: string,
  body: string
  category: ICategory|null
  auther?: Object,
  createdAt?: string,
  updatedAt?: string
}

export const fetchPosts = () :Promise<AxiosResponse> => {
  return axios.get(`/posts`)
}

export const fetchPost = (id: string) :Promise<AxiosResponse> => {
  return axios.get(`/posts/${id}`)
}

export const create = (data: any) :Promise<AxiosResponse> => {
  return axios.post(`/posts`, data)
}

export const update = (id: string, data: any) :Promise<AxiosResponse> => {
  return axios.put(`/posts/${id}`, data)
}

export const destroy = (id: string) :Promise<AxiosResponse> => {
  return axios.delete(`/posts/${id}`)
}