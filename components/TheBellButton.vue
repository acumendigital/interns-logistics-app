<template lang="">
  <main class="top-nav" :style="[...styles]">
    <nuxt-link to=""> <font-awesome-icon icon="bell" /></nuxt-link>
  </main>
</template>
<script>
export default {
  props:{
    styles:{
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
main {
  display: flex;
  justify-content: flex-end;
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
