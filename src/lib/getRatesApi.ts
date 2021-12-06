import http from 'lib/http'
import { TOKEN } from '@env'

export async function getRatesApi(base: string) {
  const response = await http.get(`${TOKEN}/latest/${base}`)
  return response.data
}
