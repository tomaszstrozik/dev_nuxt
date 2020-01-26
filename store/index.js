export const state = () => ({
  promotedProducts: []
})

const TYPES = {
  SET_PROMOTED: 'SET_PROMOTED'
}

export const mutations = {
  [TYPES.SET_PROMOTED](state, promotedProducts) {
    state.promotedProducts = promotedProducts
  }
}

export const actions = {
  async getPromotedProducts({ commit }) {
    const { data: promotedProducts } = await this.app.$service.get(
      `products?_page=2`
    )

    commit(TYPES.SET_PROMOTED, promotedProducts)
  }
}
