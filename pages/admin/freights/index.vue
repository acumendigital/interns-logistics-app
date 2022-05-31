<template>
  <div class="route-page-container">
    <TheAdminSidebar />
    <div class="routes-container">
        <the-dashboard-navbar />
        <div class="routes-freights">
          <the-routes-container @display-freight-details="showFreightDetails = true" :showVehicles="showFreightDetails" />
          <the-freight-detail v-if="showFreightDetails" @close-freight-details="showFreightDetails = false" />
        </div>
    </div>
  </div>
</template>

<script>
import TheAdminSidebar from '~/components/TheAdminSidebar.vue'
import TheRoutesContainer from '~/components/TheRoutesContainer.vue';
import TheDashboardNavbar from '~/components/TheDashboardNavbar.vue';
import TheFreightDetail from '~/components/TheFreightDetail.vue';

export default {
components:{
    TheAdminSidebar,
    TheRoutesContainer,
    TheDashboardNavbar,
    TheFreightDetail
  },
  data(){
    return{
      showFreightDetails: false
    }
  }
}
</script>

<style lang="scss">
    .route-page-container{
        display: flex;
        .routes-container{
            width: 100%;
            .routes-freights{
              display: flex;
            }
        }
    }
</style>