<template lang="">
  <main>
    <div class="main">
      <section class="close">
        <nuxt-link to="/home"> <font-awesome-icon icon="x" /></nuxt-link>
      </section>
      <section class="send">
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
              />
            </div>
          </div>
          <div class="input">
            <label for="pickup">Drop-off Location</label>
            <div class="input-form">
              <font-awesome-icon icon="location-dot" class="red" />
              <input
                type="text"
                name="pickup"
                placeholder="Choose drop-off location"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="date">
        <p>Time and Date</p>
        <input
          type="date"
          value="2022-06-01"
          min="2022-06-20"
          max="2025-12-31"
        />
      </section>
      <div class="desc">
        <p>Package Description</p>
        <div class="images">
          <div
            class="form-element"
            :style="{ 'background-image': `url(${previewImage})` }"
          >
            <input
              type="file"
              ref="fileInput"
              id="file-1"
              accept="image/*"
              @input="pickFile"
            />
            <label for="file-1" id="file-1-preview">
              <img
                src="~assets/images/preview.png"
                alt=""
                @click="selectImage"
              />
            </label>
          </div>

          <div
            v-for="(images, index) in previewImage + 1"
            class="form-element"
            :style="{ 'background-image': `url(${previewImage})` }"
          >
            <input
              type="file"
              id="file-2"
              ref="fileInput"
              accept="image/*"
              @input="pickFile"
            />
            <label for="file-1" id="file-1-preview">
              <img src="~assets/images/plus.png" alt="" @click="selectImage" />
            </label>
          </div>
        </div>
        <div class="tags">
          <div class="tag">Big</div>
          <div class="tag">Medium</div>
          <div class="tag unselected">Small</div>
          <div class="tag unselected">Fragile</div>
          <div class="tag">Fragile</div>
        </div>
        <div class="desc-text">
          <input type="text" value="More Description" />
        </div>
      </div>
      <button class="payment-btn">Continue to Payment</button>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      previewImage: [],
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage.push(e.target.result);
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Rubik Regular";
  .main {
    width: 100%;
  }
  padding: 2rem;
  .close {
    display: flex;
    justify-content: flex-start;
    svg {
      font-size: 20px;
      color: #d9b608;
    }
  }
  .send {
    p {
      margin: 2.2rem 0rem;
      font-size: 20px;
    }
    .locations {
      .input {
        label {
          color: #d9b608;
          font-size: 15px;
        }
        .input-form {
          padding: 1rem 0rem;
          svg {
            position: absolute;
            margin: 1rem 1rem;
            font-size: 20px;
          }
          input {
            height: 55px;
            width: 100%;
            border-radius: 8px;
            border: 1px solid #b0b0b0;
            padding: 1rem 2.5rem;
          }
        }
      }
    }
  }
  .date {
    p {
      font-size: 20px;
      margin: 2rem 0rem;
    }
    input {
      width: 100%;
      height: 50px;
      border-radius: 8px;
      border: 1px solid #b0b0b0;
    }
  }
  .yel {
    color: #d9b608;
  }
  .red {
    color: #cc5500;
  }

  // Package Description
  .desc {
    p {
      font-size: 20px;
      margin: 2rem 0rem;
    }
    .images {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      .form-element {
        padding: 2rem;
        width: 100px;
        height: 100px;
        border: 1px solid #b0b0b0;
        border-radius: 8px;
        input {
          display: none;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
          transition: transform ease-in-out 200ms;
        }
        img:hover {
          transform: scale(1.1);
        }
        div {
          position: relative;
          height: 40px;
          margin-top: -40px;
          background: rgba(0, 0, 0, 0.5);
          text-align: center;
          line-height: 40px;
          font-size: 13px;
          color: #f5f5f5;
          font-weight: 600;
          span {
            font-size: 40px;
          }
        }
      }
    }
    .tags {
      display: flex;
      gap: 20px;
      .tag {
        padding: 0.3rem;
        margin: 1rem 0;
        border-radius: 12px;
        width: 80px;
        text-align: center;
        background-color: #ffd60a;
      }
      .unselected {
        background-color: #ccc;
      }
    }
    // description text
    .desc-text {
      input {
        width: 100%;
        height: 55px;
        padding: 1rem 2rem;
        margin: 1rem 0rem;
        border-radius: 8px;
        color: #949494;
        border: 1px solid #b0b0b0;
      }
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
