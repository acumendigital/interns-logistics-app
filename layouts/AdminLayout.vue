<template>
  <div class="main">
      <TheDashboardSidebar />
    <div class="main-layout">
      <div class="header">
        <TheDashboardHeader />
      </div>
      <div class="main-content">
        <Nuxt />
      </div>               
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdminLayout'
  }
</script>

<style scoped>
.main{
  display: flex;
}
.main-layout{
  width: calc(100% - 320px);
  margin-left: 320px;
}
</style>
