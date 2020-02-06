<template>
  <div class="container">
    <div class="page-title">
      <h1 class="title">{{ title }}</h1>
      <h2>{{ counterValue }}</h2>
    </div>
    <div class="promoted">
      <ProductList :products="promotedProducts" title="Promoted products" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductList from '@/components/ProductList'

export default {
  layout: 'custom',
  components: {
    ProductList
  },
  middleware: ['assign-counter'],
  computed: {
    ...mapState(['counterValue'])
  },
  async asyncData({ app, params }) {
    const { id } = params
    // const { data: category } = await app.$service.get(`category/${id}`)
    const { data: promotedProducts } = await app.$service.get(
      `products?_page=2`
    )
    return {
      title: `Category - ${id}`,
      // category
      promotedProducts
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content: this.category.description
        // }
      ]
    }
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped>
.container {
  padding: 0 20px;
}

.page-title {
  margin: 20px 0;
}
</style>
