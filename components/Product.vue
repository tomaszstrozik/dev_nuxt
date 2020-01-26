<template>
  <div class="product">
    <img
      :src="`http://products-images/arturkrasinski.pl/${product.image}`"
      :alt="product.name"
      class="img"
    />
    <nuxt-link :to="`/product/${product.id}`" class="link"
      ><p class="name">{{ product.name }}</p></nuxt-link
    >
    <p class="desc">{{ product.description }}</p>
    <p class="price">{{ product.price }}</p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
}

.img,
.desc,
.price {
  margin-bottom: 10px;
}

.link {
  display: block;
  margin-bottom: 10px;
}

.name,
.price {
  font-weight: bold;
}

.price {
  color: red;
  font-size: 20px;
}
</style>
