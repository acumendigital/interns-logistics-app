<template lang="">
  <div class="track-active-container">
    <div class="back">
      <nuxt-link to="/orders">
        <font-awesome-icon icon="arrow-left" />
        <p>Your Shipment was cancelled</p>
      </nuxt-link>
    </div>
    <div class="cancelled">
      <div class="text">
        <p>
          Your shipment was cancelled <br />
          ship an item to track progress
        </p>
        <nuxt-link to="/"> Send or Receive </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.track-active-container {
  height: 100vh;
  .back {
    padding: 2rem;
    a {
      @include flex-row();
      gap: 51px;
      text-decoration: none;
      color: #000;
      svg {
        color: #d9b608;
      }
    }
  }
  .cancelled {
    @include flex-center();
    margin: 239px;
    .text {
      @include flex-column();
      @include flex-center();
      gap: 32px;
      p {
        color: #000;
        text-align: center;
      }
      a {
        @include flex-center();
        text-decoration: none;
        width: 261px;
        height: 56px;
        color: #000;
        background: #ffd60a;
        border-radius: 8px;
        transition: all 300ms ease-in-out;
      }
      a:hover {
        border: 1px solid #000;
        background: #fff;
        color: #000;
        cursor: pointer;
        transform: scale(1.03);
        svg {
          color: #000;
          transform: scale(1.03);
        }
      }
    }
  }
}
</style>
