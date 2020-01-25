<template>
  <div class="container">
    <div>
      <h1 class="title">{{ title }}</h1>
      {{ data }}
    </div>
  </div>
</template>

<script>
export default {
  layout: 'custom',
  async asyncData({ app, params }) {
    const { data } = await app.$service.get('albums')

    return {
      title: `Product ${params.id}`,
      data
    }
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
