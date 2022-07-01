<template>
  <main>
    <div class="container">
      <div class="back">
        <nuxt-link to="/history/addMoney" class="" exact-active-class="">
          <img src="~/assets/images/leftArrow.svg">
        </nuxt-link>
      </div>
      <div class="title">
        <h3>Pay with card</h3>
      </div>
      <div class="cardNumber">
        <label>Card Number</label>
        <input type="text">
        <img src="~/assets/images/master.svg" class="master">
      </div>
      <div class="cardDetails">
        <div class="date">
          <label>Expiry date</label>
          <input type="text" class="expire">
          <img src="~/assets/images/Calendar.svg" class="calendar">
        </div>
        <div>
          <label>Cvv</label>
          <input type="text" class="cvv">
        </div>
      </div>
      <div
        class="btn"
        @click="
          clicked = true;
          $router.push('/history/successfulPayment');
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
      title: 'Pay NGN2000'
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
    padding: 37px 32px 0 32px;
    .back {
      margin: 0 0 37px 0;
      img {
        cursor: pointer;
      }
    }
    .title {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      margin: 0 0 26px 0;
    }
    .cardNumber {
      margin-bottom: 32px;
      position: relative;
      label {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
      input {
        border: 1px solid #b0b0b0;
        border-radius: 8px;
        width: 364px;
        padding: 20px 30px;
        margin-top: 8px;
      }
      .master {
        position: absolute;
        top: 50px;
        right: 16px;
        cursor: pointer;
      }
    }
    .cardDetails {
      display: flex;
      align-items: center;
      justify-content: space-between;
      label {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
      .date {
        position: relative;
        // background: pink;
        .expire {
          border: 1px solid #b0b0b0;
          border-radius: 8px;
          width: 196px;
          margin-top: 8px;
          padding: 20px 30px;
        }
        .calendar {
          position: absolute;
          top: 49px;
          left: 16px;
          cursor: pointer;
        }
      }
      .cvv {
        border: 1px solid #b0b0b0;
        border-radius: 8px;
        width: 132px;
        margin-top: 8px;
        padding: 20px 30px;
      }
    }
    .btn {
      width: 100%;
      display: flex;
       padding: 0 0 32px 0;
      margin-top: 466px;
      justify-content: center;
      button {
        background: #ffd60a;
        border-radius: 8px;
        width: 80%;
        width: 364px;
        height: 56px;
        margin: 0 auto;
        border-style: none;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        cursor: pointer;
      }
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
        margin-top: 300px;
      }
      .cardNumber {
      input {
        width: 100%;
        padding: 20px 30px;
      }
    }
      .cardDetails{
        display: block;
        width: 100%;
        .date{
          margin-bottom: 30px;
          .expire{
        width: 100%;
      }
        }
      .cvv{
        width: 100%;
      }
    }
    }
  }
}
</style>
