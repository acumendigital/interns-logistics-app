<template>
  <div class="main-container">
    <h2 class="text-header">Orders</h2>
    <p class="intro-message">Manage all your dispatchers, assign orders, and track orders here.</p>
    <OrderLinks />
    <div class="pickup-requests">
      <div class="pickup-details">
        <div class="pickup-header">
          <h2 class="header-text">Pickup</h2>
        <div class="header-details">
          <img src="~assets/images/yellow-dropdown.svg" alt="">
        </div>
        </div>
        <div class="pickup-location">
          <img src="~assets/images/local-terminal.svg" alt="">
            <div class="location-terminal">
              <div class="sender-location">
                <h6 class="from">From</h6>
                <img src="~assets/images/location-icon.svg" alt="">
                <h2 class="text">12 Odutola street, Adaba B/stp, Egbeda, Lagos.</h2>
              </div>
              <div class="receiver-location">
                <h6 class="to">To</h6>
                <img src="~assets/images/location-icon.svg" alt="">
                <h2 class="text">12 Odutola street, Adaba B/stp, Egbeda, Lagos.</h2>
              </div>
            </div>
        </div>
        <div class="pickup-time">
          <img class="time-icon" src="~assets/images/pickup-time.svg" alt="">
          <div class="time-details">
            <div>
              <h2 class="details-header">Date</h2>
              <p class="details-text">12/03/22</p>
            </div>
            <div>
              <h2 class="details-header">Time</h2>
              <p class="details-text">10am</p>
            </div>
            <div>
              <h2 class="details-header">Package size</h2>
              <p class="details-text">Medium</p>
            </div>
          </div>
          <button class="pickup-submission">Assign</button>
        </div>
      </div>
      <div class="pickup-map">
        <img src="~assets/images/location-map.svg" alt="">
      </div>
    </div>
    <div class="pickup-requests">
      <div class="pickup-details">
        <div class="pickup-header">
          <h2 class="header-text">Pickup</h2>
        <div class="header-details">
          <img src="~assets/images/yellow-dropdown.svg" alt="">
        </div>
        </div>
        <div class="pickup-location">
          <img src="~assets/images/local-terminal.svg" alt="">
            <div class="location-terminal">
              <div class="sender-location">
                <h6 class="from">From</h6>
                <img src="~assets/images/location-icon.svg" alt="">
                <h2 class="text">12 Odutola street, Adaba B/stp, Egbeda, Lagos.</h2>
              </div>
              <div class="receiver-location">
                <h6 class="to">To</h6>
                <img src="~assets/images/location-icon.svg" alt="">
                <h2 class="text">12 Odutola street, Adaba B/stp, Egbeda, Lagos.</h2>
              </div>
            </div>
        </div>
        <div class="pickup-time">
          <img class="time-icon" src="~assets/images/pickup-time.svg" alt="">
          <div class="time-details">
            <div>
              <h2 class="details-header">Date</h2>
              <p class="details-text">12/03/22</p>
            </div>
            <div>
              <h2 class="details-header">Time</h2>
              <p class="details-text">10am</p>
            </div>
            <div>
              <h2 class="details-header">Package size</h2>
              <p class="details-text">Medium</p>
            </div>
          </div>
          <button class="pickup-submission">Assign</button>
        </div>
      </div>
      <div class="pickup-map">
        <img src="~assets/images/location-map.svg" alt="">
      </div>
    </div>
    <div class="pickup-requests">
      <div class="pickup-details">
        <div class="pickup-header">
          <h2 class="header-text">Pickup</h2>
        <div class="header-details">
          <img src="~assets/images/yellow-dropdown.svg" alt="">
        </div>
        </div>
        <div class="pickup-location">
          <img src="~assets/images/local-terminal.svg" alt="">
            <div class="location-terminal">
              <div class="sender-location">
                <h6 class="from">From</h6>
                <img src="~assets/images/location-icon.svg" alt="">
                <h2 class="text">12 Odutola street, Adaba B/stp, Egbeda, Lagos.</h2>
              </div>
              <div class="receiver-location">
                <h6 class="to">To</h6>
                <img src="~assets/images/location-icon.svg" alt="">
                <h2 class="text">12 Odutola street, Adaba B/stp, Egbeda, Lagos.</h2>
              </div>
            </div>
        </div>
        <div class="pickup-time">
          <img class="time-icon" src="~assets/images/pickup-time.svg" alt="">
          <div class="time-details">
            <div>
              <h2 class="details-header">Date</h2>
              <p class="details-text">12/03/22</p>
            </div>
            <div>
              <h2 class="details-header">Time</h2>
              <p class="details-text">10am</p>
            </div>
            <div>
              <h2 class="details-header">Package size</h2>
              <p class="details-text">Medium</p>
            </div>
          </div>
          <button class="pickup-submission">Assign</button>
        </div>
      </div>
      <div class="pickup-map">
        <img src="~assets/images/location-map.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout:'AdminLayout'
  }
</script>

<style scoped>
.main-container{
  padding: 6rem 0 0 3rem ;
  background-color: #fffceb91;
}
.text-header{
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 700;
  font-family: 'DM Sans Regular';
}
.intro-message{
  color: #575757;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  font-family: 'DM Sans Regular';
}
.pickup-requests{
  background-color: #FFF;
  border: 1px solid #E3E3E3;
  border-radius: .5rem;
  display: flex;
  column-gap: 2rem;
  padding: 2rem 2rem 2rem 1.9rem;
  margin-top: 2rem;
}
.pickup-details{
  padding-left: 1.9rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.7rem;
}
.pickup-header{
  padding-left: 3rem;
  display: flex;
  column-gap: 1rem;
}
.header-text{
  font-weight: 500;
  font-family: 'DM Sans Regular';
  font-size: 1rem;
  line-height: 1.5rem;
}
.header-details{
  display: flex;
  /* column-gap: .4rem; */
}
.pickup-location{
  display: flex;
  column-gap: 1.9rem;
  align-items: flex-start;
}
.location-terminal{
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.sender-location,.receiver-location{
  display: flex;
  align-items: center;
}
.text{
  color: #777777;
  line-height: 1rem;
  font-size: .75rem;
  margin-left: .6rem;
  font-family: 'DM Sans Regular';
  font-weight: 400;
}
.from{
  margin-right: .8rem;
}
.to{
  margin-right: 1.6rem;
}
.from,.to{
  font-family: 'DM Sans Regular';
  font-size: .6rem;
  line-height: .75rem;
  font-weight: 700;
}
.pickup-time{
  display: flex;
  align-items: flex-start;
  /*   */
}
.time-icon{
  padding-right: 1rem;
}
.time-details{
  display: flex;
  column-gap: 1.5rem;
}
.details-header{
  font-weight: 400;
  font-size: .75rem;
  line-height: 1rem;
  font-family: 'DM Sans Regular';
}
.pickup-submission{
  border: none;
  margin-left: 3.6rem;
  width: 60px;
  height: 40px;
  text-align: center;
  background-color: #FFD60A;
}
.details-text{
  color: #777777;
  line-height: 1rem;
  font-size: .75rem;
  font-family: 'DM Sans Regular';
}
</style>