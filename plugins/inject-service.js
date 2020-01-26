import axios from 'axios'

// https://nuxtjs.org/api/context#the-context
export default function(context, inject) {
  const axiosClient = axios.create({
    baseURL: 'http://products-api.arturkrasinski.pl/'
  })

  inject('service', axiosClient)
}
