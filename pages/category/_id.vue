<template>
  <div class="container">
    <div class="page-title">
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="product-list">
      <ProductList :products="productList" title="Products" />
    </div>
    <div class="promoted">
      <ProductList :products="promotedProducts" title="Promoted products" />
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
  layout: 'custom',
  components: {
    ProductList
  },
  async asyncData({ app, params }) {
    const { id } = params

    const { data: category } = await app.$service.get(`categories/${id}`)

    const { data: productList } = await app.$service.get(
      `products?category=${id}`
    )

    const { data: promotedProducts } = await app.$service.get(
      `products?promo=true`
    )

    return {
      title: `Category - ${id}`,
      category,
      productList,
      promotedProducts
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.description
        }
      ]
    }
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
