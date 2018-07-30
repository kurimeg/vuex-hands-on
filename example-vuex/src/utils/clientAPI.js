import axios from 'axios'
import * as messages from '@/assets/messages'

const client = axios.create({
  baseURL: process.env.API_BASE_URL
})
export default (Vue, { store }) => {
  client.interceptors.request.use((config) => {
    return config
  }, (error) => {
    store.commit('components/globals/snackbar/error', messages.E_001)
    return Promise.reject(error)
  })

  client.interceptors.response.use((response) => {
    return Promise.resolve(response.data)
  }, (error) => {
    if (error.response) {
      store.commit('components/globals/snackbar/error', error.response.data.status.message)
    } else {
      store.commit('components/globals/snackbar/error', messages.E_001)
    }
    return Promise.reject(error)
  })

  Vue.clientAPI = Vue.prototype.$clientAPI = client
}
