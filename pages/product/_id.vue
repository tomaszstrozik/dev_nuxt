<template>
  <div class="container">
    <div class="page-title">
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="product-info">
      <p>
        {{ 'Category: '
        }}<nuxt-link :to="`/category/${product.category}`">{{
          product.category
        }}</nuxt-link>
      </p>
      <p>Description: {{ product.description }}</p>
      <p class="price">Price: {{ product.price }}</p>
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
  computed: {
    ...mapState(['promotedProducts'])
  },
  async asyncData({ app, params }) {
    const { id } = params
    const { data: product } = await app.$service.get(`products/${id}`)

    return {
      title: `Product - ${product.name}`,
      product
    }
  },
  async fetch({ store }) {
    if (!store.state.promotedProducts.length) {
      await store.dispatch('getPromotedProducts')
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.description
        }
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

.product-info {
  margin-bottom: 20px;
  font-size: 20px;
}

.product-info p {
  margin-bottom: 10px;
}

.price {
  color: red;
  font-weight: bold;
}
</style>
