<template>
  <div class="product-list">
    <h3 v-if="title" class="title">{{ title }}</h3>
    <ul class="list">
      <li v-for="product in products" :key="product.id" class="item">
        <Product :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'ProductList',
  components: {
    Product
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 20px;
  font-size: 30px;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 -20px;
  padding: 0;
}

.item {
  box-sizing: border-box;
  width: 25%;
  padding: 20px;
}
</style>
