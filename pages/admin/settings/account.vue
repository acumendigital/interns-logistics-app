<template>
  <div class="main-container">
    <div class="sub-container">
      <div class="details">
        <div class="modal-header">
          <h2>Pick-up</h2>
          <p>(Local)</p>
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
        <div class="pickup-agent">
          <img src="~assets/images/agents-icon.svg" alt="">
          <div class="agent-container">
            <div class="sender-agent">
              <h2 class="from">From</h2>
              <div class="image-text">
                <img src="~assets/images/user-icon.png" alt="">
              <div class="agent-text">
                <p>Ajibike Lola</p>
                <p>07064783993</p>
                <p>lola231@gmail.com</p>
              </div>
              </div>
            </div>
            <div class="receiver-agent">
              <h2 class="to">To</h2>
              <img src="~assets/images/user-icon.png" alt="">
              <div class="agent-text">
                <p>Ajibike Lola</p>
                <p>07064783993</p>
                <p>lola231@gmail.com</p>
              </div>
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
        </div>
        <button class="pickup-submission">Assign</button>
      </div>
      <div class="requests-map">
        <img src="~assets/images/requests-map.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'AdminLayout'
  }
</script>

<style scoped>
.main-container{
  padding-top: 8rem;
}
.sub-container{
  border: 1px solid #E4E4E4;
  box-shadow: 0px 17px 42px rgba(0, 0, 0, 0.12);
  padding: 1.5rem 1.5rem 2rem 2rem;
  display: flex;
  column-gap: 6.2rem;
}
.modal-header{
  display: flex;
  column-gap: .5rem;
  align-items: center;
  padding-left: 3rem;
  padding-bottom: 2.1rem;
}
.modal-header > p{
  color: #777777;
  font-size: 14px;
  line-height: .7rem;
  font-family: 'DM Sans Regular';
}
.modal-header > h2{
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.3rem;
  font-family: 'DM Sans Regular';
}
.pickup-location{
  display: flex;
  column-gap: 1.9rem;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #F3F3F3;
}
.pickup-agent{
  display: flex;
  column-gap: 1rem;
  align-items: flex-start;
  padding: 2rem 0 1.5rem 0;
  border-bottom: 1px solid #F3F3F3;
}
.image-text{
  display: flex;
  column-gap: .3rem;
  align-items: flex-start;
}
.agent-text{
  margin-left: .3rem;
  color: #777777;
  font-weight: 400;
  line-height: 1rem;
  font-size: .7rem;
  font-family: 'DM Sans Regular';
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
.agent-container{
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.sender-agent,.receiver-agent{
  display: flex;
  column-gap: .3rem;
  align-items: flex-start;
}
.pickup-time{
  display: flex;
  align-items: flex-start;
  padding-top: 1.8rem;
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
  margin: 1rem 0 0 3rem;
  width: 192px;
  height: 40px;
  text-align: center;
  background-color: #FFD60A;
  border-radius: .5rem;
  font-weight: 400;
  font-size: .8rem;
  line-height: 1.5rem;
  font-family: 'DM Sans Regular';
}
.details-text{
  color: #777777;
  line-height: 1rem;
  font-size: .75rem;
  font-family: 'DM Sans Regular';
}
</style>