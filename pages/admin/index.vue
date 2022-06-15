<template>
  <div class="main-container">
    <h2 class="welcome-message">Welcome back David</h2>
    <div class="order-details">
      <div class="total-revenue">
        <h2 class="text">
          Total Revenue
        </h2>
        <h2 class="figures">
          $200k
        </h2>
        <div class="money-details">
          <h6 class="money-frequency">
            Up by 50k this month
          </h6>
          <img src="~assets/images/upward-icon.svg" alt="">
        </div>
      </div>
      <div class="active-orders">
        <h2 class="text">
          Active Orders
        </h2>
        <h2 class="figures">
          200
        </h2>
        <div class="money-details">
          <h6 class="money-frequency">
            Down by 50k this month
          </h6>
          <img src="~assets/images/downward-icon.svg" alt="">
        </div>
      </div>
      <div class="pending-orders">
        <h2 class="text">
          Pending Orders
        </h2>
        <h2 class="figures">
          49
        </h2>
      </div>
      <div class="active-riders">
        <h2 class="text">
          Active Riders
        </h2>
        <h2 class="figures">
          70
        </h2>
      </div>
    </div>
    <div class="order-diagram"></div>
    <h2 class="table-header">Active Orders</h2>
  </div> 
</template>

<script>
  export default {
    name:'AdminPage',
    layout: 'AdminLayout'
  }
</script>

<style scoped>
.main-container{
  padding: 6rem 0 0 3rem;
  background-color: #fffceb91;
}
.welcome-message{
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: 'DM Sans Regular';
  font-weight: 400;
}
.order-details{
  display: flex;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid #F3F3F3;
}
.total-revenue,.active-orders,.pending-orders{
  padding-right: 4.9rem;
  border-right: 1px solid #F3F3F3;
}
.active-orders,.pending-orders,.active-riders{
  padding-left: 3rem;
}
.text{
  font-size: .8rem;
  line-height: 1.3rem;
  font-family: 'DM Sans Regular';
  font-weight: 400;
}
.figures{
  font-size: 2.5rem;
  line-height: 3.5rem;
  font-family: 'DM Sans Regular';
  font-weight: 700;
}
.money-details{
  display: flex;
  column-gap: .7rem;
  align-items: center;
}
.money-frequency{
  color: #ADADAD;
  font-size: .8rem;
  line-height: 1.3rem;
  font-family: 'DM Sans Regular';
  font-weight: 400;
}
.order-diagram{
  margin: 1.5rem 0 1.5rem 0;
  width: 34rem;
  height: 23.6rem;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.04);
  background-color: #fff;
}
.table-header{
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-family: 'DM Sans Regular';
}
</style>
