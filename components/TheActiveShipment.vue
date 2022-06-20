<template >
<nuxt-link :to='`/orders/track-order/${shipmentData._id}`'>
  <main>
    <div class="shipment-card">
      <div class="package">
        <div class="loader center">
          <span></span>
        </div>
        <p>{{ shipmentData.package_id }}</p>
      </div>
      <p class="time">{{this.$moment(`${shipmentData.updatedAt}`).fromNow()}}</p>
    </div>
  </main>
</nuxt-link>
</template>
<script>
export default {
  name: "activeShipment",
  props:{
    shipmentData:{
      required: true,
      type: Object
    }
  },
  computed:{
    date(){
      return this.$moment(`${shipmentData.updatedAt}`).fromNow()
    }
  }
};
</script>
<style lang="scss" scoped>
main {
  .shipment-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 310px;
    height: 56px;
    padding: 1rem 1rem;
    margin-bottom: 2rem;
    border: 1px solid #dedede;
    border-radius: 8px;
    .package {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      p{
        color: black;
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
        -webkit-animation: loader-1 1.5s cubic-bezier(0.77, 0, 0.175, 1)
          infinite;
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

      img {
        width: 35%;
        transform: rotate(360deg) infinite;
      }
    }
    .time {
      color: #777;
      font-size: 14px;
    }
  }
}
</style>
