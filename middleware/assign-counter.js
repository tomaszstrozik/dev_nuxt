export default async function({ store, res }) {
  if (process.server) {
    const { counterValue } = res

    if (counterValue) {
      await store.dispatch('setCounterValue', counterValue)
    }
  }
}
