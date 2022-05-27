<template>
  <main>
    <div class="container">
      <div class="back">
        <nuxt-link to="/paymentWallet" class="" exact-active-class="">
          <img src="../assets/images/leftArrow.svg">
        </nuxt-link>
        <p>Fund Your Wallet</p>
      </div>
      <div class="screen">
        <span>N</span>
        <h2>2,000</h2>
      </div>
      <div class="line" />
      <div class="digits">jdjjdjk</div>
      <div class="btn">
        <button>Next</button>
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
    // padding: 37px 32px 0 32px;
    padding-top: 37px;
    .back {
      margin: 0 0 37px 32px;
      width: 100%;
      display: flex;
      align-items: center;
      img {
        cursor: pointer;
      }
      p {
        font-family: "Rubik Regular";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000;
        text-align: center;
        margin-left: 101px;
      }
    }
    .screen {
      margin-top: 234px;
      margin-bottom: 138px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-family: "Rubik Regular";
        font-weight: 400;
        font-size: 31px;
        line-height: 48px;
        color: #000;
        margin-right: 8px;
      }
      h2 {
        font-family: "Rubik Regular";
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 64px;
        color: #000;
      }
    }
    .line {
      border-bottom: 1px solid #efefef;
    }
    .digits {
      margin-top: 40px;
      background: red;
    }
    .btn {
      width: 100%;
      display: flex;
      padding: 0 32px 32px 32px;
      margin-top: 56px;
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
