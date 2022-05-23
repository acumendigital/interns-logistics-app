<template>
  <main>
    <div>
      <font-awesome-icon icon="wallet" />

      <h1>Hello World</h1>
      <a href="/home">go to home</a>
    </div>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "no-auth-layout",
};
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Rubik Regular";
}
</style>
