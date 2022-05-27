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
         <div class="check"><div class="inside"></div></div>
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
      img {
        cursor: pointer;
      }
    }
    .title {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      margin: 0 0 26px 32px;
    }
    .wallet {
      border-bottom: 1px solid #dedede;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .details {
        margin: 24px 0 24px 0;
        position: relative;
        input {
          margin-left: 32px;
        }
        span {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          margin-left: 10px;
          display: block;
          position: relative;
          font-weight: 300;
          font-size: 1.35em;
          padding: 25px 25px 25px 80px;
          margin: 10px auto;
          height: 30px;
          z-index: 9;
          cursor: pointer;
        }
        input[type="radio"] {
          position: absolute;
          visibility: hidden;
        }
        .check {
          display: block;
          // background: red;
          position: absolute;
          border: 1px solid #d9b608;
          border-radius: 100%;
          height: 24px;
          width: 24px;
          top: 30px;
          left: 20px;
          z-index: 5;
        }
        .check::before {
          display: block;
          position: absolute;
          content: "";
          border-radius: 100%;
          height: 15px;
          width: 15px;
          top: 5px;
          left: 5px;
          margin: auto;
        }
        input[type="radio"]:checked ~ .check {
          border: 1px solid #d9d9d9;
        }

        input[type="radio"]:checked ~ .check::before {
          background: #d9b608;
        }
      }

      .amount {
        margin-right: 32px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #ffd60a;
      }
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
      // input[type="radio"] {
      //   appearance: none;
      //   background-color: #d9b608;
      //   margin: 0;
      //   font: inherit;
      //   font-family: "Rubik Regular";
      //   color: red;
      //   width: 1.15em;
      //   height: 1.15em;
      //   width: 24px;
      //   height: 24px;
      //   border: 1px solid #d9d9d9;
      //   border-radius: 50%;
      // }
      // .label-name-10 > input:checked {
      //   border: 2px solid #41b883;
      //   background-color: white;
      //   color: white;
      // }
      span {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-left: 10px;
      }
    }
  }
  .btn {
    width: 100%;
    display: flex;
    padding: 0 32px 32px 32px;
    margin-top: 540px;
    margin-bottom: 32px;
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
      cursor: pointer;
    }
  }
}
</style>
