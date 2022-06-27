<template>
  <div class="order-container">
    <div class="order-links">
      <NuxtLink to="/admin/orders">Active Orders</NuxtLink>
      <NuxtLink to="/admin/orders/delivered">Delivered</NuxtLink>
      <NuxtLink to="/admin/orders/requests">Requests</NuxtLink>
      <NuxtLink to="/admin/orders/cancelled">Cancelled</NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'AdminLayout'
  }
</script>

<style scoped>
.order-container{
  padding: 2rem 3rem 0 0 !important;
}
.order-links{
  display: flex;
  column-gap: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #F3F3F3;
}
a{
  text-decoration: none;
  color: #777777;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: 'DM Sans Regular';
}
.nuxt-link-exact-active{
  color: #000;
  border-bottom:  2px solid#D9B608;
}
</style>