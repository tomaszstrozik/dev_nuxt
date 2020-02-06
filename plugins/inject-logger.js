import loggerService from '@/services/logger-service'

// https://nuxtjs.org/api/context#the-context
export default function({ app, isDev }, inject) {
  if (isDev) {
    app.$loggerService = loggerService

    // or

    inject('loggerService', loggerService)
  }
}
