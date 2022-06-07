<template lang="">
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
};
</script>
<style lang="scss" scoped>
.track-order-container {
  font-family: "Rubik Regular";
  background: #fafafa;
}
</style>
