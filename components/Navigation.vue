<template>
  <nav>
    <ul class="nav-list">
      <li v-for="link in links" :key="link.path" class="nav-link">
        <nuxt-link :to="link.path">{{ link.label }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.nav-list {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  padding: 10px;
}
</style>
