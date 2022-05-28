
<template lang="">
  <main>
    <section class="nav">
      <TheBellButton />
    </section>
    <section class="body">
      <div class="top">
        <div class="top-text">
          <h1>N 12, 000</h1>
          <p>Wallet Balance</p>
        </div>
        <div class="top-btns">
          <div class="add btn">
            + Add Money
          </div>
          <div class="add btn">
            - Withdraw
          </div>
        </div>
      </div>
      <div class="break" />
      <div class="location">
        <p>Send or Receive Item</p>
        <div class="cards">
          <nuxt-link to="/local" class="card">
            <img src="~assets/images/local.png" alt="">
            <p>Local</p>
          </nuxt-link>
          <nuxt-link to="/international" class="card">
            <img src="~assets/images/international.png" alt="">
            <p>International</p>
          </nuxt-link>
        </div>
      </div>
      <div class="break" />
      <div class="shipments">
        <div class="tracking">
          <div>
            <input
              id=""
              type="search"
              name="track"
              placeholder="Enter Tracking Number"
            >
            <button>
              <font-awesome-icon icon="magnifying-glass" />
            </button>
          </div>
        </div>
        <div>
          <p>Active Shipments</p>
          <TheActiveShipment />
          <TheActiveShipment />
          <TheActiveShipment />
          <TheActiveShipment />
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
  layout: 'auth-layout'
}
</script>
<style lang="scss" scoped>
main {
  font-family: "Rubik Regular";
  .body {
    .top {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
      margin: 0rem 2rem;
      .top-text {
        text-align: start;
        margin: 0.5rem;
        h1 {
          font-family: "Rubik Regular";
          font-size: 40px;
        }
        p {
          font-size: 14px;
        }
      }
      .top-btns {
        display: flex;
        flex-direction: row;
        gap: 24px;
        margin-top: 24px;
      }
      .btn {
        min-width: 100px;
        height: 24px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        cursor: pointer;
      }
      .add {
        background-color: #ffd60a;
        color: #000;
      }
    }
    .location {
      display: flex;
      flex-direction: column;
      padding: 1rem 2rem;
      .cards {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 32px;
        margin-top: 1rem;
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: #000;
          width: 169;
          height: 230;
          margin: 1rem 0rem;
          padding: 1rem 2.3rem;
          border-radius: 8px;
          background-color: #fff;
          border: 1px solid #efefef;
          img {
            max-width: 90%;
            // height: 130px;
            margin-bottom: 10px;
          }
          p {
            font-size: 14px;
            margin: 1%;
          }
        }
      }
    }

    .shipments {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .tracking {
        margin-left: -3.5rem;
        margin-bottom: 1rem;
        input {
          width: 305px;
          height: 56px;
          border-radius: 8px 0px 0px 8px;
          outline: none;
          padding: 1rem 2rem;
          border: 1px solid #dedede;
        }
        button {
          position: absolute;
          height: 56px;
          width: 56px;
          background-color: #ffd60a;
          border-radius: 0px 8px 8px 0px;
          border: 0px;
          svg {
            font-size: 20px;
          }
        }
      }
      p {
        color: #575757;
        padding: 1rem 0rem;
        font-size: 12px;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 32px 24px;
  }

  .break {
    background-color: #ccc;
    height: 1px;
    margin: 2rem 0rem;
  }
  a {
    text-decoration: none;
  }
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
