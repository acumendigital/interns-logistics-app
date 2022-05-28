<template lang="">
  <div class="freight-container">
    <div>
      <div class="x">
        <font-awesome-icon icon="x" />
      </div>
      <div class="freight-nav-bar">
        <p :class="active ? 'active' : 'active'">
          Information
        </p>
        <p :class="active ? 'active' : ''">
          Transport Info
        </p>
        <p :class="active ? 'active' : ''">
          Company Billing
        </p>
        <p :class="active ? 'active' : ''">
          Billing
        </p>
      </div>
    </div>
    <div class="info">
      <div class="left">
        <div>
          <p>Tracking Number</p>
          <p class="bold">
            NA-0135557
          </p>
        </div>
        <div>
          <p>Order Date</p>
          <p>17/05/2022</p>
          <p class="status">
            Status: <span>Fulfilled</span>
          </p>
        </div>
      </div>
      <div class="right">
        <div>
          <p>Recipient</p>
          <p class="bold">
            Shammah Imisiwe
          </p>
        </div>
        <div>
          <p>Recipient Address</p>
          <p class="bold">
            23 Adebayo Akakija St.
          </p>
          <p class="bold">
            Lekki Phase II
          </p>
          <p class="bold">
            Lagos, Nigeria
          </p>
        </div>
      </div>
    </div>
    <div class="trans">
      <div class="top">
        <p class="bold">
          Transport Info
        </p>
        <div class="cards">
          <div class="card">
            <p>Truck</p>
            <h4>KTU-A1033</h4>
          </div>
          <div class="card">
            <p>Space</p>
            <h4>70% / 30%</h4>
          </div>
          <div class="card">
            <p>Weight</p>
            <h4>KTU-A1033</h4>
          </div>
          <div class="card">
            <p>Volume</p>
            <h4>KTU-A1033</h4>
          </div>
        </div>
        <div class="load">
          <p>Load Capacity</p>
          <div class="image">
            <img src="~assets/images/okada.png" alt="">
            <div class="box">
              <p>70%</p>
            </div>
          </div>
        </div>
        <div class="boxes">
          <img src="~assets/images/box.png" alt="">
          <img src="~assets/images/box.png" alt="">
          <img src="~assets/images/box.png" alt="">
          <img src="~assets/images/box.png" alt="">
        </div>
        <div class="dots">
          <div class="dot" />
          <div class="dot" />
          <div class="dot" />
        </div>
      </div>
      <div class="bottom">
        <div class="map">
          <p>Route Map</p>
          <div class="map-img">
            <img src="~assets/images/map.png" alt="">
          </div>
        </div>
        <div class="stops-container">
          <div class="stops">
            <div>
              <p class="bold">
                Stops
              </p>
            </div>
            <div>
              <div class="stop">
                <font-awesome-icon icon="location-dot" />
                <p>Ikeja Warehouse</p>
                <p>8:02AM</p>
              </div>
              <div class="stop">
                <!-- <font-awesome-icon icon="location-dot" /> -->
                <font-awesome-icon icon="circle-dot" />
                <p>Delivery to Anike</p>
                <p>8:02AM</p>
              </div>
              <div class="stop">
                <font-awesome-icon icon="location-dot" />
                <p>Delinery to Rema</p>
                <p>8:02AM</p>
              </div>
              <div class="stop">
                <font-awesome-icon icon="location-dot" class="green" />
                <p>Ikeja Warehouse</p>
                <p>8:02AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comp">
      <p class="bold">
        Company
      </p>
      <div>
        <div class="uber">
          UBER
        </div>
      </div>
    </div>
    <div class="bill">
      <div>
        <div class="bold">
          Billing
        </div>
      </div>
      <div class="billing-card">
        <div class="balance">
          <p>Balance:</p>
          <span> N7, 000</span>
        </div>
        <div class="activities">
          <p class="bold">
            Activities
          </p>
          <div class="act">
            <div>
              <p>Package delivery</p>
              <p>Tue, March 2022</p>
            </div>
            <p>N1,000</p>
          </div>
          <hr>
          <div class="break" />
          <div class="act">
            <div>
              <p>Package delivery</p>
              <p>Tue, March 2022</p>
            </div>
            <p>N1,000</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: null
    }
  }
}
</script>
<style lang="scss" scoped>
.freight-container {
  display: flex;
  flex-direction: column;
  max-width: 592px;
  font-family: "Inter Regular";
  font-size: 15px;
  padding: 0rem 2rem;
  background-color: #ebebeb;
  // Nav Bar
  .x {
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0rem;
  }
  .freight-nav-bar {
    @include flex-row();
    justify-content: left;
    gap: 25px;
    border-bottom: 0.6px solid #000;
    .active {
      border-bottom: 3px solid #000;
    }
  }
  .info {
    @include flex-row();
    justify-content: space-between;
    padding: 2rem 0;
    border-bottom: 0.6px solid #000;
    .left {
      @include flex-column();
      gap: 2rem;
      .status {
        margin-top: 2rem;
        span {
          background-color: #575757;
          color: #000;
          padding: 0.3rem 0.7rem;
          border-radius: 10px;
        }
      }
    }
    .right {
      @include flex-column();
      gap: 2rem;
    }
  }
  .trans {
    padding: 2rem 0;
    border-bottom: 0.6px solid #000;
    .top {
      .cards {
        @include flex-row();
        justify-content: space-around;
        gap: 0.5rem;
        padding: 1rem 0;
        .card {
          background-color: #c4c4c4;
          padding: 0.3rem 0.8rem;
          border-radius: 10px;
        }
      }
      .load {
        p {
          padding: 1rem 0;
        }
        .image {
          @include flex-center();
          img {
            width: 70%;
          }
        }
        .box {
          position: absolute;
          right: 25%;
          height: 60px;
          width: 85px;
          margin-bottom: 100px;
          border: 0.6px solid #000;
          p {
            text-align: center;
            position: relative;
            margin-bottom: 0;
            margin-top: 16px;
            background-color: #444;
            padding: 12px;
          }
        }
      }
      .boxes {
        @include flex-row();
        align-items: center;
        justify-content: space-around;
        margin: 10px 0;
      }
      .dots {
        @include flex-row();
        align-items: center;
        justify-content: center;
        gap: 5px;
        margin: 1rem 0;
        .dot {
          height: 5px;
          width: 5px;
          border-radius: 7px;
          background-color: #c4c4c4;
        }
      }
    }
    .bottom {
      .map {
        p {
          padding: 1rem 0;
        }
        .map-img {
          img {
            width: 100%;
          }
        }
      }
      .stops-container {
        @include flex-center();
        .stops {
          @include flex-center();
          @include flex-column();
          width: 324px;
          margin-top: 2rem;
          padding: 0 1rem;
          align-items: flex-start;
          .stop {
            @include flex-row();
            margin: 20px 0;
            gap: 3rem;
          }
        }
      }
    }
  }
  .comp {
    border-bottom: 0.6px solid #000;
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
      text-align: left;
    }
    .uber {
      @include flex-center();
      padding-bottom: 1rem;
    }
  }
  .bill {
    @include flex-column();
    padding: 1rem 0;
    .bold {
      text-align: left;
      padding: 1rem 0;
    }
    .billing-card {
      border: 1px solid #000000;
      border-radius: 10px;
      width: 532px;

      .balance {
        @include flex-row();
        background-color: #575757;
        border-radius: 10px 10px 0px 0px;
        color: #fff;
        padding: 1rem 2rem;
        p {
          margin-right: 139px;
        }
        span {
          text-align: center;
        }
      }
      .activities {
        @include flex-column();
        p {
          margin: 0rem 2rem;
        }
        hr {
          height: 0.3px;
        }
        .break {
          height: 3px solid #000;
          width: 100px;
        }
        .act {
          @include flex-row();
          justify-content: space-between;
          margin-left: 55px;
          width: 400px;
          padding: 1rem 0;
        }
      }
    }
  }
  .bold {
    font-family: "Rubik Regular";
    font-size: 18px;
  }
  .green {
    color: #7fb069;
  }
}
</style>
