import axios from 'axios'

// https://nuxtjs.org/api/context#the-context
export default function(context, inject) {
  const axiosClient = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
  })

  inject('service', axiosClient)
}
