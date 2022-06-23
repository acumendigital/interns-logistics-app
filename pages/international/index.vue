<template>
  <main>
    <div class="main">
      <section class="close">
        <nuxt-link to="/home">
          <font-awesome-icon icon="x" />
        </nuxt-link>
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
                ref="pickUpSendRef"
                v-model="requestDetails.pickup_address"
              />
            </div>
          </div>
          <div class="input">
            <label for="pickup">Drop-off Location</label>
            <div class="input-form">
              <!-- <select placeholder="Select Country">
                <option value="Select State">Select Country</option>
              </select>
              <select placeholder="Select State">
                <option value="Select State">Select State</option>
              </select> -->
              <div>
                <font-awesome-icon icon="location-dot" class="red" />
                <input
                  type="text"
                  name="pickup"
                  placeholder="Choose drop-off location"
                  ref="dropOffSendRef"
                  v-model="requestDetails.delivery_address"
                />
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
              <!-- <select placeholder="Select Country">
                <option value="Select State">Select Country</option>
              </select>
              <select placeholder="Select State">
                <option value="Select State">Select State</option>
              </select> -->
              <div>
                <font-awesome-icon icon="location-dot" class="red" />
                <input
                  type="text"
                  name="pickup"
                  placeholder="Choose pick-up location"
                  ref="pickUpRef"
                  v-model="requestDetails.pickup_address"
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
                ref="dropOffRef"
                v-model="requestDetails.delivery_address"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="contact-info">
        <div class="input">
          <p>Contact Information (Sender)</p>

          <input 
            type="text" 
            name="pickup" 
            value="First Name"
          />
          <input
            type="number"
            name="pickup"
            placeholder="+xxx (xxx)-xxx-xxxx"
            value="Phone Number"
            min="0"
          /><input
            type="email"
            name="pickup"
            placeholder="Choose pick-up location"
            value="Email Address"
          />
        </div>
        <div class="receiver">
          <div class="input">
            <p>Contact Information (Receiver)</p>

            <input 
              type="text" 
              name="pickup" 
              value="First Name" 
              v-model="requestDetails.receiver"
            />
            <input
              type="number"
              name="pickup"
              placeholder="+xxx (xxx)-xxx-xxxx"
              value="Phone Number"
              min="0"
              v-model="requestDetails.receiver_phone"
            />
            <input
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
              type="date"
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
          <select name="package" id="package" v-model="requestDetails.package_type">
            <option value="package1" selected disabled>Select Package</option>
            <option value="Small"> Small (30 x 25 cm)</option>
            <option value="Medium"> Medium (30 x 25 cm)</option>
            <option value="Big"> Big (30 x 25 cm)</option>
            <option value="Large"> Large (30 x 25 cm)</option>
          </select>
        </div>
        <input type="text" placeholder="name of package?" v-model="requestDetails.name">
        <input type="text" placeholder="Weight (Kg)" v-model.number="requestDetails.weight">
      </div>
      <button class="payment-btn" @click="requestDeliveryHandler" :class="{ loading : loading }"> Continue to Payment <span v-show="loading"><img src="~/assets/images/loader.svg" alt="loader"></span></button>
    </div>
  </main>
</template>
<script>
export default {
  async mounted(){
    const options = {
        // componentRestrictions: { 'country': "ng" },
        fields: ["address_components", "geometry"],
        strictBounds: false,
        types: ["address"],
    };

    // Instantiating Google Place API for all four Input fields
    const pickUpRefService = await new google.maps.places.Autocomplete(this.$refs.pickUpRef, options)
    const pickUpRefSendService = await new google.maps.places.Autocomplete(this.$refs.pickUpSendRef, options)
    const dropOffRefService = await new google.maps.places.Autocomplete(this.$refs.dropOffRef, options)
    const dropOffRefSendService = await new google.maps.places.Autocomplete(this.$refs.dropOffSendRef, options)

    // Adding Event Listeners for when user clicks a new place 
    google.maps.event.addListener(pickUpRefSendService, "place_changed", ()=> {
      console.log(pickUpRefSendService.getPlace());
      let place = pickUpRefSendService.getPlace()
      this.originLngLat = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
      let addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}, ${place.address_components[4]?.long_name}`
      this.requestDetails.pickup_address = addressLiteral
    })
    google.maps.event.addListener(dropOffRefSendService, "place_changed", ()=> {
      console.log(dropOffRefSendService.getPlace());
      let place = dropOffRefSendService.getPlace()
      this.destinationLngLat = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
      let addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}, ${place.address_components[4]?.long_name}`
      this.requestDetails.delivery_address = addressLiteral
    })
    google.maps.event.addListener(pickUpRefService, "place_changed", ()=> {
      console.log(pickUpRefService.getPlace());
      let place = pickUpRefService.getPlace()
      this.originLngLat = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
      let addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}, ${place.address_components[4]?.long_name}`
      this.requestDetails.pickup_address = addressLiteral
    })
    
    google.maps.event.addListener(dropOffRefService, "place_changed", ()=> {
      console.log(dropOffRefService.getPlace());
      let place = dropOffRefService.getPlace()
      this.destinationLngLat = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
      let addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}, ${place.address_components[4]?.long_name}`
      this.requestDetails.delivery_address = addressLiteral
    })

  },
  data() {
    return {
      previewImage: [],
      isActive: true,
      send: true,
      receive: false,
      requestDetails:{
        name: "",
        receiver: "",
        receiver_phone: "",
        weight: 0,
        pickup_address: "",
        delivery_address: "",
        deliveryType: 'pickup',
        package_type: "",
        regionType: this.$route.name
      },
      originLngLat: {lat: 4.8472226, lng: 6.974604},
      destinationLngLat: {},
      distance: '',
      requestPrice: 0,
      basePrice: 5000
    };
  },
  methods: {
    toggleSend() {
      this.send = true;
      this.receive = false;
      this.requestDetails.deliveryType = "pickup"
    },
    toggleReceive() {
      this.receive = true;
      this.send = false;
      this.requestDetails.deliveryType = "dropoff"
    },
    async requestDeliveryHandler(){

      // let directionsService = await new google.maps.DirectionsService(); // Instantiating the directions service API
      // let directionsRenderer = await new google.maps.DirectionsRenderer(); // Instantiating the directions Renderer API
      
      // // Create route from existing points used for markers
      // const route = {
      //     origin: this.originLngLat,
      //     destination: this.destinationLngLat,
      //     travelMode: 'TRANSIT'
      // }
            
      // if(route.origin && route.destination && this.destinationLngLat){
      //   this.destinationLngLat && await directionsService.route(route,
      //     async function(response, status) { // anonymous function to capture directions
      //     if (status !== 'OK') {
      //         this.$toasted.show(
      //             'Directions request failed due to ' + status,
      //             {
      //                 position: 'top-center',
      //                 type: 'danger',
      //                 duration: 3500,
      //             }
      //             )
      //         return;
      //     } else {
      //         // await directionsRenderer.setDirections(response); // Add route to the map
      //         var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
      //         if (!directionsData) {
      //         this.$toasted.show(
      //             'Directions request failed due to ' + status,
      //             {
      //                 position: 'top-center',
      //                 type: 'danger',
      //                 duration: 3500,
      //             }
      //             )
      //         return;
      //         }
      //         else {
      //             let distanceText = directionsData.distance.text
      //             distanceText = distanceText.split(" ")
      //             this.distance = Number(distanceText[0])
      //             this.requestPrice = this.localBasePrice + (this.distance * 10) + (this.weight * 50) // Setting price of the request for local transactions
      //             console.log(directionsData);
      //         }
      //     }
      //     }.bind(this))}
      

      try {
        const requestDeliveryReq = await this.$axios.post('/api/v1/request', this.requestDetails)
        this.$toasted.show(requestDeliveryReq.data.message, {
          position: 'top-center',
          duration: 2500,
          type: 'success',
        })
        this.requestPrice = this.basePrice + (Number(this.requestDetails.weight) * 50) // Setting price of the request for local transactions
        this.$store.commit('setRequestPrice', this.requestPrice)
      } catch (error) {
        this.$toasted.show(
          error.response.data.message,
          {
            position: 'top-center',
            type: 'danger',
            duration: 3500,
          }
        )
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
