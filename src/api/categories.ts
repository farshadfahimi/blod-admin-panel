import axios from '@/module/Axios'
import type { AxiosResponse } from 'axios'

export interface ICategory {
  id: string,
  title: string,
  slug: string,
  createdAt: string,
  updatedAt: string
}

export const fetchCategories = () :Promise<AxiosResponse> => {
  return axios.get('/categories')
}

export const fetchCategory = (id: string) :Promise<AxiosResponse> => {
  return axios.get(`/categories/${id}`)
}

export const create = (data: any) :Promise<AxiosResponse> => {
  return axios.post('/categories', data)
}

export const update = (id: string, data: any) :Promise<AxiosResponse> => {
  return axios.put(`/categories/${id}`, data)
}

export const destroy = async (id: string) :Promise<AxiosResponse> => {
  return await axios.delete(`/categories/${id}`)
}