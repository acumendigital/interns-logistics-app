<template>
  <main>
    <div class="container">
      <div class="back">
        <img src="../assets/images/leftArrow.svg">
      </div>
      <div class="title">
        <h3>Pay with card</h3>
      </div>
      <div class="cardNumber">
        <label>Card Number</label>
        <input type="text">
      </div>
      <div>
        <div class="cardDetails">
          <label>Expiry date</label>
          <input type="text" class="expire">
        </div>
        <div>
          <label>Cvv</label>
          <input type="text" class="cvv">
        </div>
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
h1 {
  font-family: "Rubik Regular";
}
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
    padding-top: 37px;
    .back {
      margin: 0 0 37px 32px;
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
      margin: 0 0 26px 32px;
    }
    .cardNumber {
      label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */

        color: #000000;
      }
      input {
        border: 1px solid #b0b0b0;
        border-radius: 8px;
        width: 364px;
      }
    }
    .cardDetails {
      label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */

        color: #000000;
      }
      .expire {
        border: 1px solid #b0b0b0;
        border-radius: 8px;
        width: 196px;
      }
      .cvv {
        border: 1px solid #b0b0b0;
        border-radius: 8px;
        width: 132px;
      }
    }
  }
}
</style>
