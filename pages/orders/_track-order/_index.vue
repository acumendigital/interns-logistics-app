<template>
  <div class="track-order-container">
    <div class="delivered" v-show="!trackCancelled">
      <the-track-delivered />
    </div>
    <div class="cancelled" v-show="trackCancelled">
      <the-track-cancelled @track-cancelled="cancelTrack" />
    </div>
  </div>
</template>
<script>
import TheTrackActive from "~/components/track-order/TheTrackActive";
import TheTrackCancelled from '~/components/track-order/TheTrackCancelled.vue';
import TheTrackDelivered from '~/components/track-order/TheTrackDelivered.vue';
export default {
  components: {
    TheTrackActive,
    TheTrackCancelled,
    TheTrackDelivered
  },
  data(){
    return{
      orderId: this.$route.params.index,
      orderDetailsReq: [],
      trackCancelled: false
    }
  },
  async mounted(){
    try {
      const orderDetailsReq = await this.$axios.get(`/api/v1/request/${this.orderId}`)
      this.orderDetailsReq = orderDetailsReq.data.data
      this.$store.commit('setOrderDetails', orderDetailsReq.data.data)
    } catch (error) {
      this.$toasted.show(
        'there was an error fetching the order details',
        {
          position: 'top-center',
          type: 'danger',
          duration: 3500,
        }
      )
    }
    
  },
  methods: {
    cancelTrack(){
      this.trackCancelled = true;
      console.log("track cancelled");
    }
  }
};
</script>
<style lang="scss" scoped>
.track-order-container {
  font-family: "Rubik Regular";
  background: #fafafa;
}
</style>
