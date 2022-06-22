<template>
  <div class="track-order-container">
    <TheTrackDelivered />
  </div>
</template>
<script>
import TheTrackActive from "~/components/track-order/TheTrackActive";
import TheTrackDelivered from "~/components/track-order/TheTrackDelivered";
import TheTrackCancelled from "~/components/track-order/TheTrackCancelled";
export default {
  components: {
    TheTrackActive,
    TheTrackDelivered,
    TheTrackCancelled,
  },
  data(){
    return{
      orderId: this.$route.params.index,
      orderDetailsReq: []
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
    
  }
};
</script>
<style lang="scss" scoped>
.track-order-container {
  font-family: "Rubik Regular";
  background: #fafafa;
}
</style>
