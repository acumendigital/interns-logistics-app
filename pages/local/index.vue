<template>
  <main>
    <div class="main">
      <section class="close">
        <nuxt-link to="/home"> <font-awesome-icon icon="x" /></nuxt-link>
      </section>
      <section class="toggle">
        <p :class="send ? 'active' : 'inactive'" @click="toggleSend">Send</p>
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
                ref="pickUpRefSend"
                v-model="requestDelivery.pickup_address"
              />
              <!-- <the-select-place :inputRef="pickUpRef" /> -->
            </div>
          </div>
          <div class="input">
            <label for="pickup">Drop-off Location</label>
            <div class="input-form">
              <!-- <select placeholder="Select State">
                <option value="Select State">Select State</option>
              </select> -->
              <div>
                <font-awesome-icon icon="location-dot" class="red" />
                <input
                  type="text"
                  name="pickup"
                  placeholder="Choose drop-off location"
                  ref="dropOffRefSend"
                  v-model="requestDelivery.delivery_address"
                />
              <!-- <the-select-place :inputRef="dropOffRef" /> -->
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
              <!-- <select placeholder="Select State">
                <option value="Select State">Select State</option>
              </select> -->
              <div>
                <font-awesome-icon icon="location-dot" class="red" />
                <input
                  type="text"
                  name="pickup"
                  placeholder="Choose drop-off location"
                  ref="dropOffRef"
                  v-model="requestDelivery.delivery_address"
                />
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
                ref="pickUpRef"
                v-model="requestDelivery.pickup_address"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="contact-info">
        <div class="input">
          <p>Contact Information (Sender)</p>

          <input type="text" name="first name" placeholder="First Name" />
          <input
            type="number"
            name="number"
            placeholder="+xxx (xxx)-xxx-xxxx"
            value="Phone Number"
            min="0"
          />
        </div>
        <div class="receiver">
          <div class="input">
            <p>Contact Information (Receiver)</p>

            <input type="text" name="pickup" placeholder="First Name" v-model="requestDelivery.receiver" />
            <input
              type="number"
              name="pickup"
              placeholder="+xxx (xxx)-xxx-xxxx"
              min="0"
              v-model="requestDelivery.receiver_phone"
            /><input
              type="email"
              name="pickup"
              placeholder="Choose pick-up location"
              value="Email Address"
            />
          </div>
        </div>
      </section>
      <section class="date">
        <p>Time and Date</p>
        <div class="input">
          <div class="input-form">
            <font-awesome-icon icon="calendar" class="red" />
            <input
              type="datetime-local"
              value="2022-06-01"
              min="2022-06-20"
              max="2025-12-31"
            />
          </div>
        </div>
      </section>
      <div class="desc">
        <p>Package Description</p>
        <div class="package-description">
          <select name="package" id="package" v-model="requestDelivery.package_type">
            <option value="package1" selected disabled>Select Package</option>
            <option value="Small"> Small (30 x 25 cm)</option>
            <option value="Medium"> Medium (30 x 25 cm)</option>
            <option value="Big"> Big (30 x 25 cm)</option>
            <option value="Large"> Large (30 x 25 cm)</option>
          </select>
        </div>
        <input type="text" placeholder="name of package?" v-model="requestDelivery.name">
        <input type="text" placeholder="Weight (Kg)" v-model.number="requestDelivery.weight">
      </div>
      <button class="payment-btn" @click="requestDeliveryHandler" :class="{ loading : loading }"> Continue to Payment <span v-show="loading"><img src="~/assets/images/loader.svg" alt="loader"></span></button>
    </div>
  </main>
</template>
<script>
import TheSelectPlace from '~/components/TheSelectPlace.vue';
export default {
  components: { TheSelectPlace },
  data() {
    return {
      previewImage: [],
      isActive: true,
      send: true,
      receive: false,
      requestDelivery: {
        name: "",
        receiver: "",
        receiver_phone: "",
        weight: 0,
        pickup_address: "",
        delivery_address: "",
        package_type: "",
        deliveryType: "pickup",
        regionType: this.$route.name
      },
    };
  },
  async mounted(){

        const options = {
            componentRestrictions: { 'country': "ng" },
            fields: ["address_components",],
            strictBounds: false,
            types: ["address"],
        };

        // Instantiating Google Place API for all four Input fields
        const pickUpRefService = await new google.maps.places.Autocomplete(this.$refs.pickUpRef, options)
        const pickUpRefSendService = await new google.maps.places.Autocomplete(this.$refs.pickUpRefSend, options)
        const dropOffRefService = await new google.maps.places.Autocomplete(this.$refs.dropOffRef, options)
        const dropOffRefSendService = await new google.maps.places.Autocomplete(this.$refs.dropOffRefSend, options)


          // Adding Event Listeners for when user clicks a new place 
          google.maps.event.addListener(pickUpRefSendService, "place_changed", ()=> {
            console.log(pickUpRefSendService.getPlace());
            let place = pickUpRefSendService.getPlace()
            let addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}`
            this.requestDelivery.pickup_address = addressLiteral
          })
          google.maps.event.addListener(dropOffRefSendService, "place_changed", ()=> {
            console.log(dropOffRefSendService.getPlace());
            let place = dropOffRefSendService.getPlace()
            let addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}`
            this.requestDelivery.delivery_address = addressLiteral
          })
          google.maps.event.addListener(pickUpRefService, "place_changed", ()=> {
            console.log(pickUpRefService.getPlace());
            let place = pickUpRefService.getPlace()
            let addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}`
            this.requestDelivery.pickup_address = addressLiteral
          })
          
          google.maps.event.addListener(dropOffRefService, "place_changed", ()=> {
            console.log(dropOffRefService.getPlace());
            let place = dropOffRefService.getPlace()
            let addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}`
            this.requestDelivery.delivery_address = addressLiteral
          })
  },
  methods: {
    toggleSend() {
      this.send = true;
      this.receive = false;
      this.requestDelivery.deliveryType = "pickup"
    },
    toggleReceive() {
      this.receive = true;
      this.send = false;
      this.requestDelivery.deliveryType = "dropoff"
    },
    async requestDeliveryHandler(){
      try {
        const deliveryReq = await this.$axios.post(`/api/v1/request`, this.requestDelivery);
        this.$toasted.show(deliveryReq.data.message, {
          position: 'top-center',
          duration: 2500,
          type: 'success',
        })
        console.log(deliveryReq); 
      } catch (error) {
        this.$toasted.show(
          error.response.data.message,
          {
            position: 'top-center',
            type: 'danger',
            duration: 3500,
          }
        )
        console.log(error.message);
      }
      
    }
  },
  computed:{
    loading(){
      return this.$store.state.loading
    }
  }
};
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
    .package-description {
      @include select-field;
    }
    .more-description{
      @include input-box;
    }
    input {
      margin-bottom: 2rem;
      height: 55px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid #b0b0b0;
      outline: none;
      padding: 1rem 2.5rem;
      margin-top: 16px;
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
  .loading{
    @include flex-center;
    position: relative;
    background: grey;
    color: white;
      span{
        position: absolute;
        right: 5px;
        bottom: 5px;
        img{
          width: 20px;
          height: 20px;
        }
      }
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
