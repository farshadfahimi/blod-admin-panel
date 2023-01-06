import type { Contract } from '@/interface/contract'
import { AxiosInstance } from './../plugins/axios'

// retrive the list of contracts
export function list(page: number = 1) {
  try {
    const response = AxiosInstance.get('/contracts', {
      params: {
        page,
      }
    })

    return response
  } catch (e) {
    
  }
}

export function show(id: string) {
  AxiosInstance.get(`/contracts/${id}`)
}

export function store(id: string, data: Contract) {
  AxiosInstance.post(`/contracts/${id}`, data)
}

export function destroy(id: string) {
  AxiosInstance.delete(`/contracts/${id}`)
}

export function update(id: string, data: Contract) {
  AxiosInstance.put(`/contracts/${id}`, data)
}

export function contractVotes(id: string) {
  AxiosInstance.get(`/contracts/${id}/votes`)
}