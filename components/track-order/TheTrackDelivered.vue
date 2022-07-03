<template>
  <div class="track-active-container">
    <div class="back">
      <div @click="goToPrev">
        <font-awesome-icon icon="arrow-left" />
      </div>
    </div>
    <nuxt-link to="/orders/rider-chat" class="rider">
      <img src="~assets/images/track-rider.png" class="track-order-img" alt="" />
      <div class="rider-chat">
        <div class="left">
          <img src="~assets/images/rider-img.png" alt="" class="rider-img" />
          <div>
            <p class="name">Yusuf Aina</p>
            <p class="tag">Your Rider</p>
          </div>
        </div>
        <div class="right">
          <font-awesome-icon icon="message" />
        </div>
      </div>
    </nuxt-link>
    <div class="journey" v-show="!orderCancelled">
      <div class="stop">
        <div class="line"></div>
        <font-awesome-icon icon="circle" />
        <p>Rider Assigned</p>
      </div>
      <div class="stop">
        <div class="line"></div>
        <font-awesome-icon icon="circle" />
        <p>Rider is on the way</p>
      </div>
      <div class="stop">
        <div class="line"></div>
        <font-awesome-icon icon="circle" />
        <p>Rider is 30 mins away</p>
      </div>
      <div class="stop">
        <div class="line"></div>
        <font-awesome-icon icon="circle" />
        <p>Rider is 10 mins away</p>
      </div>
      <div class="stop">
        <font-awesome-icon icon="circle-check" class="delivered" />
        <p>Rider is at your door</p>
      </div>
    </div>
    <div class="cancelled-order">
      <the-empty-content v-show="orderCancelled" emptyCaption="This order was cancelled" :styles="{ height: '22vh', 'justify-content': 'flex-start'}" />
    </div>
    <div class="more-info">
      <div class="text">
        <div class="arrival">
          <p>Arrived</p>
          <h1>2 days <span>Ago</span></h1>
        </div>
        <div class="info">
          <p class="title">Order Number</p>
          <p class="num">{{ orderDetailsHandler.package_id }}</p>
          <p class="det" @click="toggleModal">
            More Details <font-awesome-icon icon="angle-down" />
          </p>
        </div>
      </div>
      <div class="help-btns">
        <div class="button">
          <font-awesome-icon icon="phone" /> Call
        </div>
        <button class="cancel-btn" @click="cancelOrder" :class="{ loading : loading }" v-show="!orderCancelled" >Cancel</button>
      </div>
    </div>

    <div class="track-modal-container" v-show="modalOpen" @click="toggleModal">
      <div class="x" @click="toggleModal">
        <font-awesome-icon icon="circle-xmark" @click="toggleModal" />
      </div>
      <div class="content">
        <TheTrackModal />
      </div>
    </div>
  </div>
</template>
<script>
import TheTrackModal from "~/components/track-order/TheTrackModal.vue";
import TheEmptyContent from "~/components/TheEmptyContent.vue"
export default {
  components: {
    TheTrackModal,
    TheEmptyContent
  },
  data() {
    return {
      modalOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
    goToPrev(){
      this.$router.go(-1)
    },
    async cancelOrder(){
      try {
        const cancelReq = await this.$axios.patch(`/api/v1/request/${this.orderDetailsHandler._id}/cancel`)
        this.$emit('track-cancelled')
        this.$router.go(-1);
        this.$toasted.show(
          cancelReq.data.message,
          {
            position: 'top-center',
            duration: 2500,
            type: 'success',
          }
        )
      } catch (error) {
        console.log(error);
        this.$toasted.show(
          error,
          {
            position: 'top-center',
            duration: 3500,
            type: 'danger',
          }
        )
      }
    }
  },
  computed:{
    orderDetailsHandler(){
      return this.$store.state.orderDetails
    },
    loading(){
      return this.$store.state.loading
    },
    orderCancelled(){
      if(this.orderDetailsHandler.status === "cancelled"){
        return true
      } else {
        return false
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.track-active-container {
  .back {
    padding: 2rem;
  }
  .rider {
    @include flex-column();
    @include flex-center();
    margin-top: 35px;
    padding: 2rem;
    text-decoration: none;
    .track-order-img{
      width: 100%;
    }
    .rider-chat {
      @include flex-center();
      justify-content: space-between;
      width: 70%;
      height: 65px;
      border-radius: 8px;
      background-color: #fff;
      padding-right: 33px;
      margin-top: 45px;
      .left {
        @include flex-row();
        gap: 22px;
        .name {
          font-family: "Rubik Regular";
          color: #000;
        }
        .tag {
          font-size: 12px;
          color: #777;
          margin-top: 10px;
        }
      }
    }
    .rider-img {
      z-index: 0;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
  svg {
    color: #d9b608;
  }
  .journey {
    @include flex-column();
    align-items: flex-start;
    padding: 2rem;
    gap: 2rem;
    .stop {
      @include flex-row();
      gap: 1rem;
      .delivered {
        color: #06d6a0;
        font-size: 20px;
        z-index: 0;
      }
    }
    .line {
      position: absolute;
      height: 60px;
      width: 3px;
      background-color: #d9b608;
      margin-left: 6px;
    }
  }
  .more-info {
    background-color: #fff;
    border-top: 1px solid #e9e9e9;
    padding: 2rem;
    width: 100%;
    .text {
      @include flex-row();
      justify-content: space-between;
      .arrival {
        p {
          color: #777;
        }
        h1 {
          font-family: "Rubik Medium";
          span {
            font-size: 12px;
            font-family: "Rubik Regular";
          }
        }
      }
      .info {
        @include flex-column();
        gap: 10px;
        text-align: right;
        .title {
          font-size: 16px;
          color: #777;
        }
        .num {
          font-size: 12px;
        }
        .det {
          color: #d9b608;
          font-size: 12px;
          cursor: pointer;
        }
      }
    }
    .help-btns{
      @include flex-center;
      gap: 16px;
      button{
        border: 1px solid #CC5500;
        border-radius: 8px;
        padding: 16px 35px;
        color: red;
        background: transparent
      }
      .loading{
        border: 1px solid grey;
        color: grey
      }
    .button {
      @include flex-center();
      gap: 10px;
      background-color: #ffd60a;
      height: 56px;
      width: 100%;
      border-radius: 8px;
      margin: 20px 0;
      transition: all 300ms ease-in-out;
      svg {
        color: #000;
      }
    }
    .button:hover {
      border: 1px solid #000;
      background: #fff;
      cursor: pointer;
      transform: scale(1.03);
      svg {
        transform: scale(1.03);
      }
    }
  }
  }
  .track-modal-container {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-animation-name: slideIn;
    -webkit-animation-duration: 0.4s;
    animation-name: slideIn;
    animation-duration: 0.4s;
    .x {
      position: fixed;
      right: 2rem;
      bottom: 480px;
      margin-bottom: 32px;
      cursor: pointer;
      svg {
        color: #d9b608;
        font-size: 24px;
        background-color: #000;
        border-radius: 20px;
        // cursor: pointer;
      }
    }
    .content {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
  @-webkit-keyframes slideIn {
    from {
      bottom: -300px;
      opacity: 0;
    }
    to {
      bottom: 0;
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      bottom: -300px;
      opacity: 0;
    }
    to {
      bottom: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
