<template>
  <main>
    <div>
      <font-awesome-icon icon="wallet" />

      <h1>Hello World</h1>
      <a href="/homePage">go to home</a>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'no-auth-layout'
}
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #000;
      }
    }
  }
}
</style>
