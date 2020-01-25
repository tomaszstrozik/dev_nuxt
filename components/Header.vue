<template>
  <header>
    <div class="section top">
      <Logo class="logo" />
      <h1 class="title">Devmeeting nuxt sample app</h1>
    </div>
    <div class="section nav">
      <Navigation :links="navLinks" />
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'

export default {
  name: 'Header',
  components: {
    Logo,
    Navigation
  },
  data() {
    return {
      navLinks: [
        {
          label: 'Homepage',
          path: '/'
        },
        {
          label: 'Category',
          path: '/category'
        },
        {
          label: 'Product',
          path: '/product'
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;
}

.section {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.top {
  padding-bottom: 10px;
}

.logo {
  width: 100px;
  height: 100px;
}

.title {
  font-size: 30px;
  margin-left: 20px;
}
</style>
