import axiosClient from '@/services/data-service'

// https://nuxtjs.org/api/context#the-context
export default function(context, inject) {
  inject('service', axiosClient)
}
