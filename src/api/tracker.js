import axios from 'axios'

export default axios.create({
  baseURL: 'https://map-tracker-rest-api.herokuapp.com/' // <- this api is only for development - subject to deletion - replace with your own
})
