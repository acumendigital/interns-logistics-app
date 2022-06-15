<template>
  <div class="main-container">
    <div class="sidebar-links">
      <NuxtLink to="/admin" class="home">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.754905 9.94999H9.69982C9.97482 9.94999 10.1998 9.72499 10.1998 9.44997V0.500023C10.1998 0.225024 9.97484 0 9.69982 0H0.754905C0.479907 0 0.254883 0.225001 0.254883 0.500023V9.44494C0.254883 9.72494 0.479884 9.94994 0.754905 9.94994V9.94999Z" fill="#C4C4C4"/>
          <path d="M12.2949 9.94999H21.2399C21.5149 9.94999 21.7399 9.72499 21.7399 9.44997V0.500023C21.7399 0.225024 21.5149 0 21.2399 0H12.2949C12.0199 0 11.7949 0.225001 11.7949 0.500023V9.44494C11.7949 9.72494 12.0199 9.94994 12.2949 9.94994V9.94999Z" fill="#C4C4C4"/>
          <path d="M0.754905 21.49H9.69982C9.97482 21.49 10.1998 21.265 10.1998 20.99V12.0401C10.1998 11.7651 9.97484 11.54 9.69982 11.54H0.754905C0.479907 11.54 0.254883 11.765 0.254883 12.0401V20.985C0.254883 21.265 0.479884 21.49 0.754905 21.49V21.49Z" fill="#C4C4C4"/>
          <path d="M12.2949 21.49H21.2399C21.5149 21.49 21.7399 21.265 21.7399 20.99V12.0401C21.7399 11.7651 21.5149 11.54 21.2399 11.54H12.2949C12.0199 11.54 11.7949 11.765 11.7949 12.0401V20.985C11.7949 21.265 12.0199 21.49 12.2949 21.49V21.49Z" fill="#C4C4C4"/>
        </svg>
        <h2 class="text">Dashboard</h2>
      </NuxtLink>
      <div @click="forOrdersButton">
        <NuxtLink to="/admin/orders" class="orders">
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.2522 2.23897C5.02952 2.23897 4.86523 2.4079 4.86523 2.61522V4.93467C4.86523 4.98449 4.87506 5.03378 4.89416 5.07967C4.91345 5.12574 4.94166 5.16735 4.97702 5.20235C5.01238 5.23735 5.05452 5.26503 5.10059 5.2836C5.14684 5.30217 5.19631 5.31146 5.24613 5.31092H16.7721C16.8722 5.31092 16.9685 5.27146 17.0399 5.20092C17.1112 5.13057 17.1519 5.03485 17.153 4.93468V2.61522C17.153 2.40486 16.9794 2.23897 16.766 2.23897H15.6171L14.081 0.702881H7.93697L6.40088 2.23897L5.2522 2.23897Z" fill="#C4C4C4"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.256836 5.29869C0.256836 3.61224 1.62968 2.24406 3.32879 2.23903V6.08671C3.32879 6.51671 3.67897 6.84707 4.1122 6.84707H17.9056C18.3388 6.84707 18.689 6.506 18.689 6.08671V2.23903H18.6797C19.4939 2.23653 20.2759 2.55742 20.8536 3.13119C21.4313 3.70495 21.7577 4.48456 21.761 5.29869V22.2194C21.761 23.9088 20.3833 25.279 18.6797 25.279H3.33848C2.52421 25.2815 1.74222 24.9606 1.16453 24.3869C0.586842 23.8131 0.260442 23.0335 0.257196 22.2194L0.256836 5.29869ZM4.86484 12.223C4.86484 12.6348 5.20876 12.9911 5.6327 12.9911H16.3847C16.7993 12.9911 17.1526 12.647 17.1526 12.223C17.1526 11.8114 16.8086 11.4552 16.3847 11.4552H5.6327C5.21806 11.4552 4.86484 11.7991 4.86484 12.223ZM4.86484 18.367C4.86484 18.7786 5.20876 19.1351 5.6327 19.1351H16.3847C16.7993 19.1351 17.1526 18.791 17.1526 18.367C17.1526 17.9554 16.8086 17.599 16.3847 17.599H5.6327C5.21806 17.599 4.86484 17.9431 4.86484 18.367ZM16.3848 14.527H5.63284C5.20873 14.527 4.86497 14.8708 4.86497 15.2949C4.86497 15.7192 5.20872 16.0629 5.63284 16.0629H16.3848C16.8089 16.0629 17.1527 15.7192 17.1527 15.2949C17.1527 14.8708 16.809 14.527 16.3848 14.527Z" fill="#C4C4C4"/>
        </svg>
        <h2 class="text">Orders</h2>
        <div class="collapse-icon">
          <svg
           v-if="!orderDropDownIsVisible"
           width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3.125V11.875" stroke="#D7D7EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.33337 7.5H12.6667" stroke="#D7D7EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg
            v-else
            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33325 8H12.6666" stroke="#D7D7EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
        </div>
      </NuxtLink>
    </div>
    <transition>
      <div class="order-items" v-if="orderDropDownIsVisible">
        <NuxtLink to="/admin/orders/active-order">
        <h2>Active Orders</h2>
        </NuxtLink>
        <NuxtLink to="/admin/orders/delivered">
        <h2>Delivered</h2>
        </NuxtLink>
        <NuxtLink to="/admin/orders/requests">
        <h2>Requests</h2>
        </NuxtLink>
        <NuxtLink to="/admin/orders/cancelled">
        <h2>Cancelled</h2>
        </NuxtLink>
      </div>
    </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DashboardSidebar',
    data(){
      return{
        orderDropDownIsVisible: false
      }
    },
    methods : {
      forOrdersButton (){
        this.orderDropDownIsVisible = !this.orderDropDownIsVisible
      }
    }
  }
</script>

<style scoped>
.main-container{
  position: fixed;
  padding-top: 8rem;
  width: 320px;
  min-height: 100vh;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.04);
}
.sidebar-links{
  padding-top: 3.3rem;
  /* padding-left: 3rem; */
  border-top: 1px solid #F3F3F3;
  display: flex;
  flex-direction: column;
  row-gap: 2.6rem;
}
h2{
  color: #666666;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: 'DM Sans Regular';
  font-weight: 400;
}
.home,.orders{
  display: flex;
  column-gap: 1.3rem;
  align-items: center;
  padding-left: 3rem;
}
.collapse-icon{
 margin-left: 35%;
}
a{
  text-decoration: none;
}
a.nuxt-link-exact-active{
  border-left: 2px solid #D9B608;
}
.home:hover svg path, .nuxt-link-active.home svg path, .orders:hover svg path, .nuxt-link-active.orders svg path{
  fill: #000;
}
h2:hover{
  color: #000;
}
.order-items{
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding-left: 5.9rem;
}
</style>