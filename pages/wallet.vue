<template>
  <main>
    <div class="container">
      <div class="back">
        <img src="../assets/images/leftArrow.svg">
      </div>
      <div class="title">
        <h3>Payment</h3>
      </div>
      <div class="wallet">
        <div class="details">
          <input
            v-model="payment"
            type="radio"
            name="payment"
            checked="checked"
            value="Pay with wallet"
          >
          <span class="">Pay with wallet</span>
        </div>
        <div>
          <p class="amount">
            N12,000
          </p>
        </div>
      </div>
      <div class="card">
        <div class="details">
          <input
            v-model="payment"
            type="radio"
            name="payment"
            value="Pay with card"
          >
          <span>Pay with card</span>
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
    .wallet {
      border-bottom: 1px solid #dedede;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .details {
        margin: 24px 0 24px 0;
        input {
          margin-left: 32px;
        }
        span {
          font-family: "Rubik Regular";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #000;
          margin-left: 10px;
        }
      }
      .amount {
        margin-right: 32px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #ffd60a;
      }
    }
    .card {
      border-bottom: 1px solid #dedede;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .details {
        margin: 24px 0 24px 0;
        input {
          margin-left: 32px;
        }
        input[type="radio"] {
          appearance: none;
          background-color: #d9b608;
          // margin: 0;
          // font: inherit;
          color: red;
          // width: 1.15em;
          // height: 1.15em;
          width: 24px;
          height: 24px;
          border: 1px solid #d9d9d9;
          border-radius: 50%;
        }
        span {
          font-family: "Rubik Regular";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #000;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
