const axiosClient = require('../services/data-service').default

const counterId = 'unknown'

export default async function(req, res, next) {
  const {
    query: { count }
  } = req

  if (count) {
    const { data: counters } = await axiosClient.get('/counters')

    const counter = counters.find(
      (counterObj) => counterObj.id && counterObj.id === counterId
    )

    const { value } = counter

    const updatedValue = value + 1

    await axiosClient.put(`/counters/${counterId}`, { value: updatedValue })

    res.counterValue = updatedValue
  }

  next()
}
