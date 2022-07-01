<template>
  <main>
    <section class="nav">
      <TheBellButton :styles="{'justify-content': 'flex-start'}" />
    </section>
    <section class="body">
      <div class="top">
        <div class="top-text">
          <h1>Welcome {{ userDetails.firstname }}, send or recieve an item.</h1>
          <!-- <p>Wallet Balance</p> -->
        </div>
      </div>
      <div class="break" />
      <div class="location">
        <p>Send or Receive Item</p>
        <div class="cards">
          <nuxt-link to="/local" class="card">
            <img src="~assets/images/local.svg" alt="">
            <p>Local</p>
          </nuxt-link>
          <nuxt-link to="/international" class="card">
            <img src="~assets/images/international.svg" alt="">
            <p>International</p>
          </nuxt-link>
        </div>
      </div>
      <div class="break" />
      <div class="shipments">
        <div class="tracking">
          <div>
            <input
              id=""
              type="search"
              name="track"
              placeholder="Enter Tracking Number"
              v-model="trackingNumber"
            >
            <button>
              <font-awesome-icon icon="magnifying-glass" />
            </button>
          </div>
        </div>
        <div class="active-shipments">
          <p>Active Shipments</p>
          <TheActiveShipment v-for="shipments in filteredShipments" :key="shipments._id" :shipmentData="shipments" v-show="!loading" />
          <div class="img-container" v-show="loading">
            <img src="~/assets/images/loader_black.svg" alt="Loading...">
          </div>
          <the-empty-content v-show="showEmpty" :emptyCaption="'You currently have no active shipments'" :styles="{ height: '30vh', 'justify-content': 'flex-start'}" />
        </div>
      </div>
    </section>
    <section class="footer">
      <TheBottomNav />
    </section>
  </main>
</template>
<script>
import TheEmptyContent from '~/components/TheEmptyContent.vue'
export default {
  components: { TheEmptyContent },
  layout: 'auth-layout',
  data(){
    return{
      activeShipments: [],
      trackingNumber: "",
    }
  },
  async mounted(){
    try {
      const activeShipmentsReq = await this.$axios.get(`/api/v1/requests/user?status=pending`)
      this.activeShipments = activeShipmentsReq.data.data
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
  computed:{
    loading(){
      return this.$store.state.loading
    },
    filteredShipments(){
      if(this.trackingNumber !== ""){
        return this.activeShipments.filter(shipments => {
          return shipments?.package_id.match(this.trackingNumber.toUpperCase())
        });
      } else {
        return this.activeShipments
      }
    },
    showEmpty(){
      if(this.filteredShipments.length == 0){
        return true
      } else {
        return false
      }
    },
    userDetails(){
      return this.$store.state.userDetails
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  font-family: "Rubik Regular";
  .body {
    .top {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
      margin: 0rem 2rem;
      .top-text {
        text-align: start;
        margin: 0.5rem;
        h1 {
          font-family: "Rubik Regular";
          font-size: 25px;
          font-weight: 400;
          line-height: 40px;
        }
        p {
          font-size: 14px;
        }
      }
      .top-btns {
        display: flex;
        flex-direction: row;
        gap: 24px;
        margin-top: 24px;
      }
      .btn {
        min-width: 100px;
        height: 24px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        cursor: pointer;
      }
      .add {
        background-color: #ffd60a;
        color: #000;
      }
    }
    .location {
      display: flex;
      flex-direction: column;
      padding: 1rem 2rem;
      .cards {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 32px;
        margin-top: 1rem;
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: #000;
          width: 169px;
          height: 110px;
          margin: 1rem 0rem;
          // padding: 1.5rem 2.5rem;
          border-radius: 8px;
          background-color: #fff;
          border: 1px solid #efefef;
          &:hover{
            background: #FFD60A;
          }
          img {
            max-width: 90%;
            // height: 130px;
            margin-bottom: 10px;
          }
          p {
            font-size: 14px;
            margin: 1%;
          }
        }
      }
    }

    .shipments {
      padding: 0px 32px 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .active-shipments{
        margin-bottom: 70px;
      }
      .tracking {
        // margin-left: -3.5rem;
        width: 100%;
        margin-bottom: 1rem;
        div{
          @include flex-center;
        }
        input {
          width: 305px;
          height: 56px;
          border-radius: 8px 0px 0px 8px;
          outline: none;
          padding: 1rem 2rem;
          border: 1px solid #dedede;
        }
        button {
          // position: absolute;
          height: 56px;
          width: 56px;
          background-color: #ffd60a;
          border-radius: 0px 8px 8px 0px;
          border: 0px;
          svg {
            font-size: 20px;
          }
        }
      }
      p {
        color: #575757;
        padding: 1rem 0rem;
        font-size: 12px;
      }
    }
    .img-container{
      @include flex-center;
      img{
        width: 30px;
        height: 30px;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 32px 24px;
  }

  .break {
    background-color: #ccc;
    height: 1px;
    margin: 2rem 0rem;
  }
  a {
    text-decoration: none;
  }
}
</style>
