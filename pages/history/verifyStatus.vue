<template>
  <main>
    <div class="container">
      <div class="back">
        <nuxt-link to="/history/paymentCard" class="" exact-active-class="">
          <img src="~/assets/images/leftArrow.svg">
        </nuxt-link>
      </div>
      <div class="detail">
        <img v-if="successImg" src="~/assets/images/success.svg">
        <img v-else src="~/assets/images/decline.svg">
        <!-- <img
          :src="'~/assets/images/decline.svg' || '~/assets/images/success.svg'"
          alt="status"
        > -->
        <!-- <p :class="{ '': status, decline: decline }">
          {{
            status
              ? "Payment successful!"
              : " Kindly check your card details again and ensure the card is funded"
          }}
        </p> -->
        <p>
          {{
            status
              ? "Payment successful!"
              : " Kindly check your card details again and ensure the card is funded"
          }}
        </p>
      </div>
      <div
        class="btn"
        @click="
          clicked = true;
          $router.push('/home');
        "
      >
        <Button :name="title" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      current: '',
      title: 'Go to Homepage',
      status: true,
      successImg: true
    }
  },
  mounted () {
    this.verifyTransaction()
  },
  methods: {
    async verifyTransaction () {
      const request = await this.$axios.get(
        `https://xyz-logistics-api.herokuapp.com/api/v1/wallet/paystack/verify-transaction?reference=${this.$route.query.reference}`
      )
      if (request) {
        console.log(request)
      }
      if (request.data.data.transactionStatus === 'success') {
        this.status = true
        this.successImg = true
      } else {
        this.status = false
        this.successImg = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  width: 100%;
  background: #1e1e1e;
  padding: 15px 0 20px;
  font-family: "Rubik Regular";
  color: #000;
  font-style: normal;

  .container {
    width: 90%;
    background: #fff;
    margin: 0 auto;
    max-width: 428px;
    height: 926px;
    padding-top: 37px;
    .back {
      margin: 0 0 37px 32px;
      width: 100%;
      display: flex;
      align-items: center;
      img {
        cursor: pointer;
      }
    }
    .detail {
      width: 85%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 269px auto 0 auto;
      .decline {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        margin: 24px 32px 32px;
        color: #666;
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        margin: 16px 0;
        text-align: center;
        margin: 24px 32px 32px;
      }
    }
    .btn {
      width: 100%;
      display: flex;
      padding: 0 0 32px 0;
      justify-content: center;
    }
  }
}
@media screen and (max-width: 500px) {
  main {
    .container {
       width: 100%;
      .btn {
        width: 70%;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
}
</style>
