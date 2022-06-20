<template lang="">
  <nuxt-link to="/" class="package-container">
    <div class="package-card">
      <div class="package-info">
        <img src="~assets/images/tracker.png" alt="" />
        <div class="package">
          <p class="time">Iyana Ipaja, Lagos</p>
          <p class="black">Festac Lagos</p>
          <p class="time">Nywj-079</p>
        </div>
      </div>
      <div class="loader center">
        <font-awesome-icon icon="circle-check" />
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.package-container {
  text-decoration: none;
  .package-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 364px;
    height: 110px;
    padding: 1rem 2rem;
    margin: 2rem 0rem;
    background-color: #fff;
    border-radius: 8px;
    .package-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 15px;
        height: 70px;
        margin-right: 1rem;
      }
    }
    .package {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .time {
      color: #777;
      font-size: 14px;
      line-height: 21px;
    }
    .loader {
      svg {
        color: #06d6a0;
        font-size: 30px;
      }
    }
  }
  .black {
    color: #000;
  }
}
</style>
