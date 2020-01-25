<template>
  <footer>
    <span class="text">{{ footerText }}</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footerText: 'Nuxt Devmeeting 2020'
    }
  }
}
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #000;
}
</style>
