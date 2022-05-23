<template lang="">
  <main>
    <section class="nav">
      <TheTopNav />
    </section>
    <section class="body"></section>
    <section class="footer">
      <TheBottomNav />
    </section>
  </main>
</template>
<script>
export default {
  layout: "auth-layout",
};
</script>
<style lang="scss" scoped>
main {
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 32px 24px;
}
</style>
