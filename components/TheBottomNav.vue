<template lang="">
  <main>
    <nuxt-link to="/home">
      <div class="button">
        <font-awesome-icon icon="house" />
        <p>Home</p>
      </div></nuxt-link
    >
    <nuxt-link to="/store">
      <div class="button">
        <font-awesome-icon icon="store" />
        <p>Store</p>
      </div>
    </nuxt-link>
    <nuxt-link to="/orders">
      <div class="button">
        <font-awesome-icon icon="list" />
        <p>Orders</p>
      </div>
    </nuxt-link>
    <nuxt-link to="/profile">
      <div class="button">
        <font-awesome-icon icon="user" />
        <p>Profile</p>
      </div>
    </nuxt-link>
  </main>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
main {
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
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #ffd60a;
    color: #000;
    border-radius: 32px;
    padding: 10px;
    transition: all ease-in-out 200ms;
  }
  .button:hover {
    transform: scale(1.05);
  }
}
</style>
