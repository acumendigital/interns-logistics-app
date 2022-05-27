<template>
  <div class="receive-item-container">
    <div class="close-btn">
      <nuxt-link to="/home">
        <img src="~/assets/images/close.svg" alt="close" />
      </nuxt-link>
    </div>
    <div class="page-indicators">
      <div class="send">
        <nuxt-link to="/send-item"> Send </nuxt-link>
      </div>
      <div class="receive active">
        <nuxt-link to="/receive-item"> Receive </nuxt-link>
      </div>
    </div>

    <form action="">
      <div class="pick-up-location">
        <div class="select-state-selector">
          <label for="pick-up">Pick-up Location</label>
          <div class="select-state">
            <select name="state" id="state">
              <option value="state-1">Select state</option>
            </select>
          </div>
        </div>

        <div class="input-entry">
          <img src="~/assets/images/location.svg" alt="location" />
          <input type="text" id="pick-up" placeholder="Enter Location" />
        </div>
      </div>
      <div class="drop-off-location">
        <label for="drop-off">Drop-off Location</label>
        <div class="input-entry">
          <img
            src="~/assets/images/current-location.svg"
            alt="current location"
          />
          <input type="text" id="drop-off" placeholder="Current Location" />
        </div>
      </div>
      <div class="contact-information-container">
        <div class="container-header">
          <h2>Contact Information</h2>
        </div>
        <div class="contact-information">
          <div class="phone-number">
            <input
              type="number"
              name="phone-number"
              id="phone-number"
              placeholder="Phone Number"
            />
          </div>
          <div class="email-address">
            <input
              type="email"
              name="email-address"
              id="email-address"
              placeholder="Email Address"
            />
          </div>
        </div>
      </div>
      <div class="time-and-date-container">
        <div class="container-header">
          <h2>Time and Date</h2>
        </div>
        <div class="time-and-date">
          <label for="date-time"></label>
          <div class="date-time-picker">
            <img src="~/assets/images/calender.svg" alt="calender" />
            <input
              type="datetime-local"
              name="date-time"
              id="date-time"
              min="2022-06-20"
              max="2025-12-31"
            />
          </div>
        </div>
      </div>
      <div class="package-description-container">
        <div class="container-header">
          <h2>Package Description</h2>
        </div>
        <div class="package-description">
          <select name="package" id="package">
            <option value="package1">Select Package</option>
          </select>
        </div>
        <div class="more-description">
          <input type="text" placeholder="More description" />
        </div>
      </div>
      <div class="submit-btn">
        <button>Continue to Payment</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scopes>
.receive-item-container {
  font-family: "Rubik Regular";
  padding: 32px;
  .page-indicators {
    padding-top: 36px;
    display: flex;
    align-items: center;
    gap: 8px;
    a {
      text-decoration: none;
      color: #b0b0b0;
    }
    .active {
      background: #ffd60a;
      border-radius: 8px;
      padding: 8px;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      a {
        color: black;
      }
    }
    .receive {
      @include active-btn;
    }
  }
  form {
    padding-top: 32px;
    .pick-up-location {
      .select-state {
        @include select-field;
        margin-bottom: 12px;
      }
      display: flex;
      flex-direction: column;
      gap: 8px;
      label {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
      .input-entry {
        @include input-field;
      }
    }
    .drop-off-location {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 32px 0px 48px;
      label {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
      .input-entry {
        @include input-field;
      }
    }
    .contact-information-container {
      .container-header {
        margin-bottom: 32px;
        h2 {
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          color: #575757;
        }
      }
      .contact-information {
        // display: flex;
        // align-items: center;
        // flex-wrap: wrap;
        // gap: 32px;
        .phone-number {
          @include input-field;
          margin-bottom: 32px;
        }
        .email-address {
          @include input-field;
          margin-bottom: 48px;
        }
      }
    }
    .time-and-date-container {
      margin-bottom: 48px;
      .container-header {
        margin-bottom: 32px;
        h2 {
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          color: #575757;
        }
      }
      .time-and-date {
        .date-time-picker {
          @include input-field;
        }
      }
    }
    .package-description-container {
      .container-header {
        margin-bottom: 32px;
        h2 {
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          color: #575757;
        }
      }
      .package-description {
        @include select-field;
      }
      .more-description {
        @include input-field;
        margin-top: 32px;
      }
    }
    .submit-btn {
      button {
        @include active-btn;
        padding: 16px;
        width: 100%;
        margin-top: 100px;
        outline: none;
        border: none;
      }
    }
  }
}
@media (min-width: 1099px) {
  .receive-item-container {
    padding: 32px 30vw;
  }
}
</style>
