<template>
  <button>{{ name }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: String
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>

      button {
        background: #ffd60a;
        border-radius: 8px;
        width: 80%;
        width: 364px;
        height: 56px;
        margin: 0 auto;
        border-style: none;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        cursor: pointer;
      }
</style>
