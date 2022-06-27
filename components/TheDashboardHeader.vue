<template>
  <div class="main-container">
    <div class="navbar-content">
      <div class="notification-bell">
        <img src="~assets/images/notification.svg" alt="">
      </div>
      <div class="user-details">
        <h2 class="text">
          David Odu
        </h2>
        <img src="~assets/images/profile-picture.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DashboardHeader'
  }
</script>

<style scoped>
.main-container{
  position: fixed;
  top: 0;
  left: 0;
  height: 4.5rem;
  display: flex;
  justify-content: flex-end;
  border: 1px solid #ffff;
  width: 100%;
  background-color: #FFF;
  z-index: 3;
}
.navbar-content{
  display: flex;
  column-gap: 3.4rem;
  align-items: center;
  padding: 1.5rem 4rem 1.5rem 0;
  border-bottom: 1px solid #FFFF;
}
.user-details{
  display: flex;
  column-gap: .5rem;
  align-items: center;
}
.text{
  color: #575757;
  font-size: 1rem;
  font-family: 'DM Sans Regular';
  line-height: 1.5rem;
}
</style>