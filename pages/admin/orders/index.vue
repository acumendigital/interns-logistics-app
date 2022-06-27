<template>
  <div class="main-container">
    <h2 class="text-header">Orders</h2>
    <p class="intro-message">Manage all your dispatchers, assign orders, and track orders here.</p>
    <OrderLinks />
    <div class="search-container">
      <div class="search-section">
      <input class="input-search" type="text" placeholder="Search">
      <svg class="search-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.55716 8.17016C10.2626 7.12015 10.5519 5.84513 10.3686 4.59348C10.1854 3.34196 9.54278 2.20331 8.56591 1.39965C7.58914 0.595991 6.34815 0.184654 5.08477 0.24598C3.8213 0.30723 2.62603 0.8367 1.7314 1.73117C0.83693 2.62555 0.307559 3.821 0.24621 5.08454C0.18496 6.34792 0.59629 7.589 1.39997 8.56568C2.20372 9.54246 3.34221 10.1851 4.5938 10.3684C5.84541 10.5516 7.12043 10.2623 8.17048 9.55684L10.0954 11.4818C10.3432 11.7295 10.7042 11.8262 11.0426 11.7356C11.381 11.6449 11.6453 11.3806 11.736 11.0422C11.8266 10.7038 11.7299 10.3427 11.4822 10.095L9.55716 8.17016ZM5.3359 9.24543C4.29894 9.24543 3.30447 8.83348 2.57133 8.10024C1.83819 7.36701 1.42614 6.37256 1.42614 5.33567C1.42614 4.29871 1.8381 3.30424 2.57133 2.5711C3.30456 1.83796 4.29901 1.42591 5.3359 1.42591C6.37286 1.42591 7.36733 1.83787 8.10047 2.5711C8.83377 3.30431 9.24566 4.29878 9.24566 5.33567C9.2445 6.37229 8.83218 7.36603 8.09924 8.0991C7.36621 8.83204 6.37245 9.24436 5.33581 9.24552L5.3359 9.24543Z" fill="black"/>
      </svg>
      </div>
      <div class="assign-section">
        <div class="vehicle-section">
          <h2>Vehicle</h2>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="package-section">
          <h2>Package size</h2>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.8168 2.01704C9.8168 3.01119 9.01095 3.81704 8.0168 3.81704C7.02265 3.81704 6.2168 3.01119 6.2168 2.01704C6.2168 1.02289 7.02265 0.217041 8.0168 0.217041C9.01095 0.217041 9.8168 1.02289 9.8168 2.01704Z" fill="black"/>
            <path d="M15.8168 2.01704C15.8168 3.01119 15.0109 3.81704 14.0168 3.81704C13.0226 3.81704 12.2168 3.01119 12.2168 2.01704C12.2168 1.02289 13.0226 0.217041 14.0168 0.217041C15.0109 0.217041 15.8168 1.02289 15.8168 2.01704Z" fill="black"/>
            <path d="M3.8168 2.01704C3.8168 3.01119 3.01095 3.81704 2.0168 3.81704C1.02265 3.81704 0.216797 3.01119 0.216797 2.01704C0.216797 1.02289 1.02265 0.217041 2.0168 0.217041C3.01095 0.217041 3.8168 1.02289 3.8168 2.01704Z" fill="black"/>
          </svg>
        </div>
      </div>
    </div>
    <LogisticsTable :data="orderData" />
  </div>
</template>

<script>
import OrderLinks from '~/components/OrderLinks.vue'
  export default {
  components: { OrderLinks },
    layout: 'AdminLayout',
    data () {
      return {
        orderData: {
        title: '',
        searchBy: undefined,
        rowPerPage: 10,
        headers: [
          { key: 'tracking', label: 'Tracking number', type: 'string', isFilterable: true },
          { key: 'name', label: 'Customer name', type: 'string', isFilterable: true },
          { key: 'number', label: 'Customer number', type: 'string', isFilterable: true },
          { key: 'dispatch', label: 'Dispatch name', type: 'string', isFilterable: true },
          { key: 'vehicle', label: 'Vehicle', type: 'string', isFilterable: true },
          { key: 'address', label: 'Address', type: 'string', isFilterable: true },
          { key: 'package', label: 'Package size', type: 'string', isFilterable: true },
          { key: 'date', label: 'Date', type: 'date', isFilterable: true }
        ],
        labels: [
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          },
          {
            tracking: '18-6589929',
            name: 'Ajibike lola',
            number: '0806573862587',
            dispatch: 'Yusuf',
            vehicle: 'Bike',
            address: 'Lekki',
            package: 'Small',
            date: '10/2/22'
          }
        ],
        bulkActions: undefined,
        styles: {
          fullWidth: true,
          actionText: undefined
        },
        iconType: 'arrow'
      }
      }
    }
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
.search-container{
  display: flex;
  column-gap: 9.8rem;
}
.search-section{
  border: 1px solid #F3F3F3;
  border-radius: .4rem;
  width: 500px;
  height: 30px;
  display: flex;
  column-gap: 17rem;
  align-items: center;
  padding: 1rem;
  margin: 1.5rem 0 1.5rem 0;
}
.input-search{
  border: none;
  outline: none;
}
.assign-section{
  border: 1px solid #F3F3F3;
  border-radius: .4rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 30px;
  column-gap: 2.2rem;
  margin: 1.5rem 0 1.5rem 0;
}
.vehicle-section,.package-section{
  display: flex;
  column-gap: .7rem;
  align-items: center;
}
h2{
  font-weight: 400;
  font-size: .8rem;
  line-height: 1.3rem;
  font-family: 'DM Sans Regular';
}
</style>