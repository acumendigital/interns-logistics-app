<template lang="">
  <div class="bottom-nav">
    <nuxt-link to="/home" :class="home ? 'button' : 'dead'">
      <img v-show="home" src="~assets/images/home-dark.png" alt="" />
      <img v-show="!home" src="~assets/images/home-light.png" alt="" />
      <p v-show="home">Home</p>
    </nuxt-link>
    <nuxt-link to="/history" :class="history ? 'button' : 'dead'">
      <img v-show="history" src="~assets/images/wallet-dark.svg" alt="" />
      <img v-show="!history" src="~assets/images/wallet-light.png" alt="" />
      <p v-show="history">History</p>
    </nuxt-link>
    <nuxt-link to="/orders" :class="orders ? 'button' : 'dead'">
      <font-awesome-icon icon="list" />
      <p v-show="orders">Orders</p>
    </nuxt-link>
    <nuxt-link to="/profile" :class="profile ? 'button' : 'dead'">
      <font-awesome-icon icon="user" />
      <p v-show="profile">Profile</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      home: null,
      history: null,
      orders: null,
      profile: null,
      route: this.$route,
    };
  },
  created() {
    switch (this.route.name) {
      case "home":
        this.home = true;
        break;

      case "history":
        this.history = true;
        break;

      case "orders":
        this.orders = true;
        break;

      case "profile":
        this.profile = true;
        break;

      default:
        this.home = true;
    }
  },
};
</script>
<style lang="scss" scoped>
.bottom-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: "Rubik Regular";
  border-radius: 16px;
  height: 72px;
  padding: 16px 36px;
  background-color: #fff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
  gap: 10%;
  a {
    text-decoration: none;
    width: 100%;
    max-width: 120px;
    gap: 10%;
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #ffd60a;
    font-size: 16px;
    color: #000;
    border-radius: 32px;
    padding: 10px 15px;
    transition: all ease-in-out 200ms;
  }
  .button:hover {
    transform: scale(1.05);
  }
  .dead {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #c4c4c4;
    border-radius: 32px;
    font-size: 16px;
    padding: 10px;
    transition: all ease-in-out 200ms;
  }
  .dead:hover {
    transform: scale(1.05);
    color: #666666;
  }

  // Mobile Responsiveness
  @media screen and (max-width: 500px) {
    .button {
      font-size: 12px;
    }
  }
}
</style>
