<template>
  <div class="main-container">
    <h2 class="text-header">Orders</h2>
    <p class="intro-message">Manage all your dispatchers, assign orders, and track orders here.</p>
    <OrderLinks />
  </div>
</template>

<script>
import OrderLinks from '~/components/OrderLinks.vue'
  export default {
  components: { OrderLinks },
    layout: 'AdminLayout'
  }
</script>

<style scoped>
.main-container{
  padding: 6rem 0 0 3rem ;
}
.text-header{
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 700;
  font-family: 'DM Sans Regular';
}
.intro-message{
  color: #575757;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  font-family: 'DM Sans Regular';
}
</style>