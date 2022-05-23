<template lang="">
  <main>
    <section class="nav">
      <TheTopNav />
    </section>
    <section class="body">
      <div class="top">
        <div class="top-text">
          <p>Wallet Balance</p>
          <h1>N 12, 000</h1>
        </div>
        <div class="top-btns">
          <div class="add btn">+ Add Money</div>
          <div class="withdraw btn">Withdraw</div>
        </div>
      </div>
      <div class="break"></div>
      <div class="middle">
        <div class="card">
          <div class="card-img">
            <img src="~assets/images/send-item.png" alt="send-item" />
          </div>
          <div class="card-text">
            <p>Send an Item</p>
            <img src="~assets/images/arrow-right.png" alt="arrow-right" />
          </div>
        </div>

        <div class="card">
          <div class="card-img">
            <img src="~assets/images/receive-item.png" alt="receive-item" />
          </div>
          <div class="card-text">
            <p>Receive an Item</p>
            <img src="~assets/images/arrow-right.png" alt="arrow-right" />
          </div>
        </div>
      </div>
    </section>
    <section class="footer">
      <TheBottomNav />
    </section>
  </main>
</template>
<script>
export default {
  layout: "auth-layout",
};
</script>
<style lang="scss" scoped>
main {
  font-family: "Rubik Regular";
  .body {
    .top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .top-text {
        text-align: center;
        margin: 0.5rem;
        h1 {
          font-family: "Rubik Medium";
          font-size: 40px;
        }
      }
      .top-btns {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-top: 35px;
      }
      .btn {
        min-width: 166px;
        height: 40px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
      }
      .add {
        background-color: #ffd60a;
        color: #000;
      }
      .withdraw {
        border: 1px solid #cc5500;
        color: #cc5500;
      }
    }
    .break {
      background-color: #ccc;
      height: 1px;
      margin: 2rem 0rem;
    }
    .middle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      margin-bottom: 5rem;

      .card {
        max-width: 700px;
        margin: 1rem 0rem;
        .card-img {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ffe45c;
          border-radius: 8px 8px 0px 0px;
          padding: 27px;
          img {
            max-width: 80%;
          }
        }
        .card-text {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 18px;
          font-family: "Rubik Regular";
          text-align: left;
          background-color: #fff;
          height: 70px;
          padding: 2rem;
          border: 1px solid #dedede;
          border-radius: 0px 0px 8px 8px;
          img {
            width: 40%;
          }
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 32px 24px;
  }
}
</style>
