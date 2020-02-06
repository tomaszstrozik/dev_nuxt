export const state = () => ({
  promotedProducts: [],
  counterValue: 0
})

const TYPES = {
  SET_PROMOTED: 'SET_PROMOTED',
  SET_COUNTER_VALUE: 'SET_COUNTER_VALUE'
}

export const mutations = {
  [TYPES.SET_PROMOTED](state, promotedProducts) {
    state.promotedProducts = promotedProducts
  },
  [TYPES.SET_COUNTER_VALUE](state, value) {
    state.counterValue = value
  }
}

export const actions = {
  async getPromotedProducts({ commit }) {
    const { data: promotedProducts } = await this.app.$service.get(
      `products?_page=2`
    )

    commit(TYPES.SET_PROMOTED, promotedProducts)
  },
  setCounterValue({ commit }, value) {
    commit(TYPES.SET_COUNTER_VALUE, value)
  }
}
