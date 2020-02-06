<template>
  <div class="container">
    <div>
      <Navigation :links="categories" />
      <h1 class="title">dev_nuxt</h1>
      <h2 class="subtitle">Nuxt Devmeeting sample code</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  layout: 'custom',
  components: {
    Navigation
  },
  async asyncData({ app }) {
    const { data: categoriesList } = await app.$service.get(
      'categories?_page=1'
    )

    return {
      categories: categoriesList.map((category) => ({
        label: category.name,
        path: `/category/${category.id}`
      }))
    }
  }
}
</script>

<style scoped>
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
