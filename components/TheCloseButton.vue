<template lang="">
  <main class="top-nav">
    <nuxt-link to="/store"> <font-awesome-icon icon="x" /></nuxt-link>
  </main>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
main {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 32.75px;
  a {
    text-decoration-color: none;
    svg {
      width: 20px;
      color: #d9b608;
    }
  }
}
</style>
