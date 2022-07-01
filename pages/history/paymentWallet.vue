<template>
  <main>
    <div class="container">
      <div class="back">
        <img src="~/assets/images/leftArrow.svg">
      </div>
      <div class="title">
        <h3>Payment</h3>
      </div>
      <form>
        <div class="wallet">
          <div class="details">
            <label>
              <input type="radio" name="payment" checked value="wallet">
              <span class="">Pay with wallet</span>
            </label>
          </div>
          <div>
            <p class="amount">
              N12,000
            </p>
          </div>
        </div>

        <div class="card">
          <div class="details">
            <label>
              <input type="radio" name="payment">
              <span>Pay with card</span>
            </label>
          </div>
        </div>
      </form>
      <div class="btn">
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
        }
        label {
          display: flex;
          justify-content: center;
          align-items: center;
          input[type="radio"] {
            appearance: none;
            -webkit-appearance: none;
            display: inline-block;
            background-clip: content-box;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            margin-left: 32px;
            border: 1px solid #d9b608;
          }
          input[type="radio"]:checked {
            background: #d9b608;
            border: 1px solid #d9d9d9;
          }
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
    .card {
      border-bottom: 1px solid #dedede;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .details {
        margin: 24px 0 24px 0;
        span {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          margin-left: 10px;
        }
        label {
          display: flex;
          justify-content: center;
          align-items: center;
          input[type="radio"] {
            appearance: none;
            -webkit-appearance: none;
            display: inline-block;
            background-clip: content-box;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            margin-left: 32px;
            border: 1px solid #d9b608;
          }
          input[type="radio"]:checked {
            background: #d9b608;
            border: 1px solid #d9d9d9;
          }
        }
      }
    }
    .btn {
      width: 100%;
      display: flex;
       padding: 0 0 32px 0;
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
