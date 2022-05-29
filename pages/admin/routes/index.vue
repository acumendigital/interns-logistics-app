<template>
  <div class="route-page-container">
    <TheAdminSidebar />
    <div class="routes-container">
        <the-dashboard-navbar />
        <the-routes-container />
    </div>
  </div>
</template>

<script>
import TheAdminSidebar from '~/components/TheAdminSidebar.vue'
import TheRoutesContainer from '~/components/TheRoutesContainer.vue';
import TheDashboardNavbar from '~/components/TheDashboardNavbar.vue';

export default {
components:{
    TheAdminSidebar,
    TheRoutesContainer,
    TheDashboardNavbar
  }
}
</script>

<style lang="scss">
    .route-page-container{
        display: flex;
        .routes-container{
            width: 100%;
        }
    }
</style>