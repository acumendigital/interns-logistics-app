<template>
  <main>
    <div class="container">
      <div class="back">
         <nuxt-link to="/paymentWallet" class="" exact-active-class="">
          <img src="../assets/images/leftArrow.svg">
        </nuxt-link>
      </div>
      <div class="title">
        <h3>Pay with card</h3>
      </div>
      <div class="cardNumber">
        <label>Card Number</label>
        <input type="text">
        <img src="../assets/images/master.svg" class="master">
      </div>
      <div class="cardDetails">
        <div class="date">
          <label>Expiry date</label>
          <input type="text" class="expire">
          <img src="../assets/images/Calendar.svg" class="calendar">
        </div>
        <div>
          <label>Cvv</label>
          <input type="text" class="cvv">
        </div>
      </div>
      <div class="btn">
        <button>Pay NGN2000</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style lang="scss" scoped>
main {
  width: 100%;
  background: #1e1e1e;
  padding: 60px 0 30px;

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
      font-family: "Rubik Regular";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #000;
      margin: 0 0 26px 0;
    }
    .cardNumber {
      margin-bottom: 32px;
      position: relative;
      label {
        font-style: normal;
        font-family: "Rubik Regular";
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #000;
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
        font-family: "Rubik Regular";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #000;
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
      padding: 0 32px 32px 32px;
      margin-top: 466px;
      justify-content: center;
      button {
        background: #ffd60a;
        border-radius: 8px;
        width: 80%;
        width: 364px;
        height: 56px;
        margin: 0 auto;
        font-family: "Rubik Regular";
        border-style: none;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #000;
        cursor: pointer;
      }
    }
  }
}
</style>
