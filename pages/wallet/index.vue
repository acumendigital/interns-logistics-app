<template lang="">
  <main>
    <h1>Wallet Page</h1>
    <section class="footer">
      <TheBottomNav />
    </section>
  </main>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rubik Regular";
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    margin: 2rem;
  }
}
</style>
