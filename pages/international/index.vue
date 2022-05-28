<template lang="">
  <main>
    <div class="main">
      <section class="close">
        <nuxt-link to="/home">
          <font-awesome-icon icon="x" />
        </nuxt-link>
      </section>
      <section class="toggle">
        <p :class="send ? 'active' : 'inactive'" @click="toggleSend">
          Send
        </p>
        <p :class="receive ? 'active' : 'inactive'" @click="toggleReceive">
          Receive
        </p>
      </section>
      <section v-show="send" class="send">
        <p>Send an Item</p>
        <div class="locations">
          <div class="input">
            <label for="pickup">Pick-up Location</label>
            <div class="input-form">
              <font-awesome-icon icon="location-crosshairs" class="yel" />
              <input
                type="text"
                name="pickup"
                placeholder="Choose pick-up location"
              >
            </div>
          </div>
          <div class="input">
            <label for="pickup">Drop-off Location</label>
            <div class="input-form">
              <select placeholder="Select Country">
                <option value="Select State">
                  Select Country
                </option>
              </select>
              <select placeholder="Select State">
                <option value="Select State">
                  Select State
                </option>
              </select>
              <div>
                <font-awesome-icon icon="location-dot" class="red" />
                <input
                  type="text"
                  name="pickup"
                  placeholder="Choose drop-off location"
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section v-show="receive" class="send">
        <p>Receive an Item</p>
        <div class="locations">
          <div class="input">
            <label for="pickup">Pick-up Location</label>
            <div class="input-form">
              <select placeholder="Select Country">
                <option value="Select State">
                  Select Country
                </option>
              </select>
              <select placeholder="Select State">
                <option value="Select State">
                  Select State
                </option>
              </select>
              <div>
                <font-awesome-icon icon="location-dot" class="red" />
                <input
                  type="text"
                  name="pickup"
                  placeholder="Choose drop-off location"
                >
              </div>
            </div>
          </div>
          <div class="input">
            <label for="pickup">Drop-off Location</label>
            <div class="input-form">
              <font-awesome-icon icon="location-crosshairs" class="yel" />
              <input
                type="text"
                name="pickup"
                placeholder="Choose drop-off location"
              >
            </div>
          </div>
        </div>
      </section>
      <section class="contact-info">
        <div class="input">
          <p>Contact Information (Sender)</p>

          <input type="text" name="pickup" value="First Name"><input
            type="number"
            name="pickup"
            placeholder="+xxx (xxx)-xxx-xxxx"
            value="Phone Number"
            min="0"
          ><input
            type="email"
            name="pickup"
            placeholder="Choose pick-up location"
            value="Email Address"
          >
        </div>
        <div class="receiver">
          <div class="input">
            <p>Contact Information (Receiver)</p>

            <input type="text" name="pickup" value="First Name">
            <input
              type="number"
              name="pickup"
              placeholder="+xxx (xxx)-xxx-xxxx"
              value="Phone Number"
              min="0"
            ><input
              type="email"
              name="pickup"
              placeholder="Choose pick-up location"
              value="Email Address"
            >
          </div>
        </div>
      </section>
      <section class="date">
        <p>Time and Date</p>
        <div class="input">
          <div class="input-form">
            <font-awesome-icon icon="calendar" class="red" />
            <input
              type="date"
              value="2022-06-01"
              min="2022-06-20"
              max="2025-12-31"
            >
          </div>
        </div>
      </section>
      <div class="desc">
        <p>Package Description</p>
        <div class="desc-text">
          <input type="text" value="Select Package">
          <input type="text" value="More Description">
        </div>
      </div>
      <button class="payment-btn">
        Continue to Payment
      </button>
    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      previewImage: [],
      isActive: true,
      send: true,
      receive: false
    }
  },
  methods: {
    toggleSend () {
      this.send = true
      this.receive = false
    },
    toggleReceive () {
      this.receive = true
      this.send = false
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Rubik Regular";
  padding: 2rem;
  .main {
    width: 100%;
  }
  .close {
    display: flex;
    justify-content: flex-start;
    svg {
      font-size: 20px;
      color: #d9b608;
    }
  }
  .toggle {
    @include flex-row();
    justify-content: space-between;
    margin: 2rem 0rem;
    width: 133px;
    .active {
      background-color: #ffd60a;
      color: #000;
      padding: 6px 8px;
      border-radius: 8px;
      cursor: pointer;
    }
    .inactive {
      padding: 6px 8px;
      color: #b0b0b0;
      cursor: pointer;
    }
  }
  .send {
    p {
      margin: 2.2rem 0rem;
      font-size: 20px;
    }
    .locations {
      @include input-form();
    }
  }
  .contact-info {
    @include input-box();
    p {
      margin: 1rem 0rem;
      font-family: "Rubik Medium";
      font-size: 18px;
    }
    input {
      margin: 1rem 0rem;
      color: #000;
    }
  }
  .date {
    p {
      margin: 1rem 0rem;
      font-family: "Rubik Medium";
      font-size: 18px;
    }
    @include input-form();
  }
  .yel {
    color: #d9b608;
  }
  .red {
    color: #cc5500;
  }

  // Package Description
  .desc {
    @include form-header();
    .desc-text {
      @include input-box();
    }
    input {
      margin-bottom: 2rem;
    }
  }

  .payment-btn {
    width: 100%;
    height: 50px;
    margin: 1rem 0;
    background-color: #ffd60a;
    color: #000;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 18px;
    transition: all ease-in-out 200ms;
  }
  .payment-btn:hover {
    transform: scale(1.02);
  }
  @media screen and(min-width: 800px) {
    .main {
      width: 40%;
    }
  }
}
</style>
