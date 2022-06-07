<template>
  <div class="order-container">
      <div class="order-user-profile">
        <rider-profile />
      </div>
      <div class="help-btns">
          <div class="pick-up active">
              <p>Pick-ups</p>
          </div>
          <div class="deliveries">
              <p>Deliveries</p>
          </div>
      </div>
      <div class="order-cards">
          <rider-order-card v-for="i in 6" :key="i" />
      </div>
      <rider-bottom-nav />
  </div>
</template>

<script>
import RiderBottomNav from '~/components/riderComps/RiderBottomNav.vue'
import riderProfile from "~/components/riderComps/RiderProfileContainer.vue"
import riderOrderCard from "~/components/riderComps/TrackOrderCard.vue"
export default {
    components:{
        riderProfile,
        riderOrderCard,
        RiderBottomNav
    }
}
</script>

<style lang="scss" scoped>
    .order-container{
        font-family: "Rubik Regular";
        background: #FAFAFA;
        .order-user-profile{
            padding: 32px 32px 18px;
        }
        .help-btns{
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 0px 27px 32px;
            color: #B0B0B0;
            .active{
                @include active-btn;
            }
        }
        .order-cards{
            padding: 32px;
            @include flex-center;
            flex-direction: column;
            gap: 32px;
            width: 100%;
            padding-bottom: 120px;
        }
    }
</style>