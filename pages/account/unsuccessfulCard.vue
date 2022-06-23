<template>
  <main>
    <div class="container">
      <div class="back">
        <nuxt-link to="/account/card" class="" exact-active-class="">
          <img src="~/assets/images/leftArrow.svg">
        </nuxt-link>
      </div>
      <div class="detail">
        <img src="~/assets/images/decline.svg">
        <p>Unable to Add</p>
        <p class="decline">
          Kindly check your card details and try again
        </p>
      </div>
      <div class="btn">
        <Button :name="title" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      current: '',
      title: 'Try again'
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  width: 100%;
  background: #1e1e1e;
  padding: 15px 0 20px;
  font-family: "Rubik Regular";
  color: #000;
  font-style: normal;

  .container {
    width: 90%;
    background: #fff;
    margin: 0 auto;
    max-width: 428px;
    height: 926px;
    padding-top: 37px;
    .back {
      margin: 0 0 37px 32px;
      width: 100%;
      display: flex;
      align-items: center;
      img {
        cursor: pointer;
      }
    }
    .detail {
      width: 85%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 269px auto 0 auto;
      margin-top: 269px;
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        margin: 24px 0 8px 0;
      }
      .decline{
          font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        margin: 0 32px 32px;
        color: #666;
      }
    }
    .btn {
      width: 100%;
      display: flex;
       padding: 0 0 32px 0;
      justify-content: center;
    }
  }
}
@media screen and (max-width: 500px) {
  main {
    .container {
       width: 100%;
      .btn {
        width: 70%;
       margin-right: auto;
        margin-left: auto;
      }
    }
  }
}
</style>
