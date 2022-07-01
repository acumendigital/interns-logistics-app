<template>
  <main>
    <div class="container">
      <div class="back">
        <img src="~/assets/images/notifications.svg">
      </div>
      <div class="transactions">
        <div class="header">
          <p>Transaction History</p>
        </div>
        <div>
          <TransactionHistory v-show="!loading" />
          <div class="loading">
            <span v-show="loading"><img src="~/assets/images/loader_black.svg" alt="loader"></span>
          </div>
        </div>
      </div>
    </div>
    <section class="footer">
      <TheBottomNav />
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      title: 'Save',
      name: this.$store.state.userDetails.firstname
    }
  },
  computed:{
    loading(){
      return this.$store.state.loading
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  width: 100%;
  background: #1e1e1e;
  background: #fff;
  font-family: "Rubik Regular";
  color: #000;
  font-style: normal;

  .container {
    width: 100%;
    background: #fff;
    margin: 0 auto;
    max-width:1200px;
    // max-width: 428px;
    height: 926px;
    padding-top: 37px;
    .back {
      margin: 0 0 37px 32px;
      img {
        cursor: pointer;
      }
    }
    .title {
      // border-bottom: 1px solid #dbdbdb;
      h3 {
        font-weight: 500;
        font-size: 40px;
        line-height: 38px;
        margin: 0 0 8px 32px;
      }
      p {
        font-weight: 4500;
        font-size: 14px;
        line-height: 21px;
        margin: 0 0 0px 32px;
      }
      .btns {
        width: 100%;
        display: flex;
          // padding: 0 0 32px 0;
          padding: 0 32px 32px 32px;
        margin: 24px 0;
        align-items: center;
        button {
          background: #ffd60a;
          border-radius: 8px;
          width: 80%;
          width: 100px;
          height: 24px;
          margin-right: 24px;
          border-style: none;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          cursor: pointer;
        }
      }
    }
    .overview {
      p {
        font-weight: 400;
        font-size: 12px;
        margin: 24px 0 8px 32px;
        line-height: 16px;
        color: #565656;
      }
    }
    .transactions {
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fafafa;
        padding-right: 32px;
        margin-bottom: 41px;
        p {
          font-weight: 400;
          font-size: 12px;
          margin: 6px 0 6px 32px;
          line-height: 16px;
          color: #565656;
        }
        .more {
          cursor: pointer;
        }
      }
      
    }
    // .footer {
    //   position: fixed;
    //   width: 39%;
    //   margin: 38px 27px 32px 28px;
    // }
  }
  .loading{
        @include flex-center;
        color: black;
        img{
          width: 80px;
          height: 80px;
        }
      }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 32px 24px;
  }
   @media screen and(min-width: 800px) {}
}
</style>
