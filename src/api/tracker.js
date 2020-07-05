import axios from 'axios'
import { AsyncStorage } from 'react-native'

const instance = axios.create({
  baseURL: 'https://map-tracker-rest-api.herokuapp.com/' // <- this api is only for development - subject to deletion - replace with your own
})

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
