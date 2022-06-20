<template>
  <nuxt-link :to="`/orders/track-order/${shipmentProp._id}`" class="package-container">
    <div class="package-card">
      <div class="package-info">
        <img src="~assets/images/tracker.png" alt="" />
        <div class="package">
          <p class="time">{{ shipmentProp.pickup_address }}</p>
          <div class="to">
            <p class="black">{{ shipmentProp.delivery_address }}</p>
            <p class="time">{{ shipmentProp.package_id }}</p>
          </div>
        </div>
      </div>
      <div class="loader center">
        <span></span>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props:{
    shipmentProp: {
      required: true,
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.package-container {
  text-decoration: none;
  .package-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 310px;
    height: 110px;
    padding: 1rem 2rem;
    margin: 2rem 0rem;
    background-color: #fff;
    border-radius: 8px;
    .package-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 15px;
        height: 70px;
        margin-right: 1rem;
      }
    }
    .package {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }
    .time {
      color: #777;
      font-size: 14px;
      line-height: 21px;
    }

    .loader {
      display: block;
      height: 32px;
      width: 32px;
    }

    .loader span {
      display: block;
      position: relative;
      background-image: url(~/assets/images/rocket.png);
      background-position: right;
      background-size: 25px;
      background-repeat: no-repeat;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 32px;
      width: 32px;
    }

    .loader span::before {
      content: "";
      display: block;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 32px;
      width: 32px;
      border: 3px solid #cc5500;
      border-bottom: 3px solid transparent;
      border-radius: 50%;
      -webkit-animation: loader-1 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
      animation: loader-1 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }

    @-webkit-keyframes loader-1 {
      0% {
        -webkit-transform: rotate(0deg);
      }
      20% {
        -webkit-transform: rotate(230deg);
      }
      50% {
        -webkit-transform: rotate(230deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes loader-1 {
      0% {
        transform: rotate(0deg);
      }
      20% {
        transform: rotate(230deg);
      }
      50% {
        transform: rotate(230deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .black {
      color: #000;
    }
  }
}
</style>
