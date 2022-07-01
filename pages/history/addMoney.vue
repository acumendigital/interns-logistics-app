<template>
  <main>
    <div class="container">
      <div class="back">
        <nuxt-link to="/wallet" class="" exact-active-class="">
          <img src="~/assets/images/leftArrow.svg">
        </nuxt-link>
        <p>Fund Your Wallet</p>
      </div>
      <div class="screen">
        <span>N</span>
        <h2>{{ current || '0' }}</h2>
      </div>
      <div class="line" />
      <div class="digits">
        <div class="grid-item" @click="append('1')">
          1
        </div>
        <div class="grid-item" @click="append('2')">
          2
        </div>
        <div class="grid-item" @click="append('3')">
          3
        </div>
        <div class="grid-item" @click="append('4')">
          4
        </div>
        <div class="grid-item" @click="append('5')">
          5
        </div>
        <div class="grid-item" @click="append('6')">
          6
        </div>
        <div class="grid-item" @click="append('7')">
          7
        </div>
        <div class="grid-item" @click="append('8')">
          8
        </div>
        <div class="grid-item" @click="append('9')">
          9
        </div>
        <div />
        <div class="grid-item" @click="append('0')">
          0
        </div>
        <div class="grid-item" @click="remove()">
          <img src="~/assets/images/delete.svg">
        </div>
      </div>
      <div
        class="btn"
        @click="
          pay();
        "
      >
        <Button
          :name="title"
        />
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
      title: 'Next',
      email: this.$store.state.userDetails.email,
      //  property: this.$store.state.Id,
      clicked: false
    }
  },
  // computed: {
  //   userDetails () {
  //     return this.$store.state.userDetails
  //   }
  // },
  created () {
  },
  methods: {
    append (number) {
      this.current = `${this.current}${number}`
    },
    remove () {
      this.current = this.current.slice(0, -1)
    },
    async pay () {
      const data = {

        email: this.email,
        amount: this.current
      }

      const request = await this.$axios
        .post('https://xyz-logistics-api.herokuapp.com/api/v1/wallet/paystack/initialize', data)
      window.location.href = request.data.data.authorization_url
      if (request) {
        console.log(request.data.data.authorization_url)
      }
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
    // padding: 37px 32px 0 32px;
    padding-top: 37px;
    .back {
      margin: 0 0 37px 32px;
      width: 100%;
      display: flex;
      align-items: center;
      img {
        cursor: pointer;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        margin-left: 101px;
      }
    }
    .screen {
      margin-top: 234px;
      margin-bottom: 138px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-weight: 400;
        font-size: 31px;
        line-height: 48px;
        margin-right: 8px;
      }
      h2 {
        font-weight: 500;
        font-size: 48px;
        line-height: 64px;
      }
    }
    .line {
      border-bottom: 1px solid #efefef;
    }
    .digits {
      margin-top: 40px;
      width: 80%;
      display: grid;
      margin: 30px auto 0 auto;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(65px, auto);
      .grid-item{
        text-align: center;
         font-weight: 500;
         font-weight: 500;
         cursor: pointer;
font-size: 40px;
line-height: 38px;
      }
    }
    .btn {
      width: 100%;
      display: flex;
        padding: 0 0 32px 0;
      margin-top: 56px;
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
      .back{
        p{
          font-size: 14px;
        }
      }
    }
  }
}
</style>
