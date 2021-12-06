import axios from 'axios'
import { BASE_URL } from '@env'

const http = axios.create({
  baseURL: BASE_URL
})

export const initializeHttp = () => {
  http.interceptors.response.use(
    async response => {
      return response
    },
    async error => {
      return Promise.reject(error)
    }
  )
  http.interceptors.request.use(
    request => {
      return request
    },
    error => Promise.reject(error)
  )
}

export default http
