<template>
  <div class="rider-routes-container">
      <rider-profile />
      <div class="rider-welcome">
          <h1 class="rider-name">
              Welcome back Yusuf!
          </h1>
      </div>
      <div class="riders-map">
          <routes-map />
      </div>
      <div class="ride-details-card-container">
        <div class="delivery-no ride-details-card">
          <p>5 More deliveries</p>
        </div>
        <div class="pick-up-no ride-details-card">
            <p>10 More Pick-ups</p>
        </div>
      </div>
      <new-request-modal v-show="false" />
     <rider-bottom-nav />
  </div>
</template>

<script>
import RoutesMap from '~/components/riderComps/RoutesMap.vue'
import riderBottomNav from '~/components/riderComps/RiderBottomNav.vue';
import newRequestModal from '~/components/riderComps/NewRequestModal.vue'
import riderProfile from "~/components/riderComps/RiderProfileContainer.vue"

export default {
    components: {
        RoutesMap,
        riderBottomNav,
        newRequestModal,
        riderProfile
    }
}
</script>

<style lang="scss">
    .rider-routes-container{
        padding: 32px;
        font-family: "Rubik Regular";
        background: #FAFAFA;
        height: 100vh;
        .rider-welcome{
            .rider-name{
                width: 52.121vw;
                margin-bottom: 32px;
            }
        }
        .riders-map{
            @include flex-center;
        }
        .ride-details-card-container{
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 24px;
        }
        .ride-details-card{
            padding: 8px 32px;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            background: #FFFFFF;
            border-radius: 8px;
        }
    }
    @media (min-width: 1029px) {
        .rider-routes-container{
            .ride-details-card-container{
                @include flex-center;
                align-items: flex-start;
                flex-direction: row;
                height: 20vh;
            }
        }  
    }
</style>