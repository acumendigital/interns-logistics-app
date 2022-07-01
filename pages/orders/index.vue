<template>
  <main>
    <div class="main">
      <section class="close">
        <!-- <nuxt-link to="/home"> <font-awesome-icon icon="x" /></nuxt-link> -->
      </section>
      <section class="toggle">
        <p :class="active ? 'active' : 'inactive'" @click="toggleActive">
          Active
        </p>
        <p :class="delivered ? 'active' : 'inactive'" @click="toggleDelivered">
          Delivered
        </p>
        <p :class="cancelled ? 'active' : 'inactive'" @click="toggleCancelled">
          Cancelled
        </p>
      </section>
      <section v-show="active" class="active-cards">
        <TheActiveOrder v-for="shipment in activeShipments" :key="shipment._id" :shipmentProp="shipment" />
        <div class="loading">
          <span v-show="loading"><img src="~/assets/images/loader_black.svg" alt="loader"></span>
        </div>
      </section>
      <section v-show="delivered" class="active-cards">
        <the-empty-content emptyCaption="You currently have no delivered orders" />
      </section>
      <section v-show="cancelled" class="active-cards">
        <TheCancelledOrder v-for="shipment in cancelledShipments" :key="shipment._id" :cancelledShipmentProp="shipment" />
        <the-empty-content emptyCaption="You currently have no cancelled orders" v-if="!cancelledShipments" />
      </section>
    </div>

    <section class="footer">
      <TheBottomNav />
    </section>
  </main>
</template>
<script>
import TheEmptyContent from '~/components/TheEmptyContent.vue';
import TheCancelledOrder from '~/components/TheCancelledOrder.vue'
export default {
  components: { TheEmptyContent, TheCancelledOrder },
  data() {
    return {
      active: true,
      delivered: false,
      cancelled: false,
      activeShipments: [],
      cancelledShipments: [],
    };
  },
  async mounted(){
    try {
      const activeShipmentsReq = await this.$axios.get(`/api/v1/requests/user?status=pending`)
      const cancelledShipmentsReq = await this.$axios.get(`/api/v1/requests/user?status=cancelled`)
      console.log(cancelledShipmentsReq);
      this.activeShipments = activeShipmentsReq.data.data
      this.cancelledShipments = cancelledShipmentsReq.data.data
    } catch (error) {
      this.$toasted.show(
        `Can't load active shipments: ${error.response.data.message.message}`,
        {
          position: 'top-center',
          type: 'danger',
          duration: 3500,
        }
      )
    }
  },
  methods: {
    toggleActive() {
      this.active = true;
      this.delivered = false;
      this.cancelled = false;
    },
    toggleDelivered() {
      this.delivered = true;
      this.active = false;
      this.cancelled = false;
    },
    toggleCancelled() {
      this.cancelled = true;
      this.active = false;
      this.delivered = false;
    },
  },
  computed:{
    loading(){
      return this.$store.state.loading
    }
  }
};
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Rubik Regular";
  padding: 2rem 1rem;
  background: #fafafa;
  // height: 100vh;
  .main {
    width: 100%;
  }
  .close {
    display: flex;
    justify-content: flex-start;
    svg {
      font-size: 20px;
      color: #d9b608;
    }
  }
  .toggle {
    @include flex-row();
    justify-content: space-between;
    margin: 2rem 0rem;
    width: 133px;
    .active {
      background-color: #ffd60a;
      color: #000;
      padding: 6px 8px;
      border-radius: 8px;
      cursor: pointer;
    }
    .inactive {
      padding: 6px 8px;
      color: #b0b0b0;
      cursor: pointer;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 32px 24px;
  }
  .active-cards{
    margin-bottom: 100px;
    min-height: 130vh;
    .loading{
      @include flex-center;
      color: black;
      img{
        width: 80px;
        height: 80px;
      }
    }
  }
  @media screen and(min-width: 800px) {
    .main {
      width: 40%;
    }
  }
}
</style>
