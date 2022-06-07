<template>
  <div class="order-map-view-container">
      <rider-profile />
      <div class="map-view">
          <routes-map />
      </div>
      <div class="pick-up-container">
          <h3>Pick-up</h3>
          <div class="pick-up">
              <div class="location-image">
                  <img src="~/assets/images/Location.svg" alt="location">
              </div>
              <div class="pick-up-content">
                  <h3>Pick-up</h3>
                  <p>Samuel ade street, Egbeda, Lagos.</p>
              </div>
          </div>
          <div class="more-details" @click="showDetailModal = true">
              <p>More Details</p>
              <img src="~/assets/images/chevron-down.svg" alt="chevron-down">
          </div>
      </div>
      <div class="outer-more-details-container">
        <more-details-modal v-show="showDetailModal" @close-detail-modal="showDetailModal = false" />
      </div>
  </div>
</template>

<script>
import MoreDetailsModal from '~/components/riderComps/MoreDetailsModal.vue'
import RiderProfile from '~/components/riderComps/RiderProfileContainer.vue'
import RoutesMap from '~/components/riderComps/RoutesMap.vue'
export default {
  components: { 
    RiderProfile,
    RoutesMap,
    MoreDetailsModal
},
data(){
    return{
        showDetailModal: false
    }
}

}
</script>

<style lang="scss">
    .order-map-view-container{
        font-family: "Rubik Regular";
        padding: 32px;
        .map-view{
            margin-top: 32px;
        }
        .pick-up-container{
            margin-top: 16px;
            h3{
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
            }
            .pick-up{
                display: flex;
                align-content: flex-start;
                gap: 19px;
                margin-top: 16px;
                .pick-up-content{
                    h3{
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 21px; 
                    }
                    p{
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                    }
                }
            }
            .more-details{
                display: flex;
                gap: 12px;
                margin-top: 17px;
                p{
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 12px;
                    color: #D9B608;
                }       
            }
        }
        .outer-more-details-container{
            position: absolute;
            top: 0;
            left: 0;
        }
    }
</style>