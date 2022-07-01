<template>
  <main>
    <div class="container">
      <!-- <div class="back">
        <nuxt-link to="/orders" class="" exact-active-class="">
          <img src="~/assets/images/leftArrow.svg">
        </nuxt-link>
      </div> -->
      <div class="title">
        <nuxt-link
          to="#"
          :class="[
            'kemi',
            $route.name.includes('profile') ? 'nuxt-link-exact-active' : '',
          ]"
        >
          <p>Profile Settings</p>
        </nuxt-link>
        <nuxt-link
          to="/account"
          :class="[
            'kemi',
            $route.name.includes('account') ? 'nuxt-link-exact-active' : '',
          ]"
          exact-active-class=""
        >
          <p>Account Settings</p>
        </nuxt-link>
      </div>
      <div class="profileUpload">
        <!-- <img src="~/assets/images/profile.svg"> -->
        <img
          :src="imgSrc"
          alt="avatar"
          class="imgSrc"
        >
         <!-- <img :src="imgSrc || '/profile.jpg'" alt="avatar" class="imgSrc"> -->
      </div>
      <div v-show="!loading">
        <div class="profileDetails">
          <div class="pencil">
            <label>First Name</label>
            <img
              src="~/assets/images/pencil.svg"
              @click="
                clicked = true;
                $router.push('/profile/editProfile');"
            >
          </div>
          <input v-model="first_name" type="text" disabled>
        </div>
        <div class="profileDetails">
          <label>Last Name</label>
          <input v-model="last_name" type="text" disabled>
        </div>
        <div class="profileDetails">
          <label>Phone Number</label>
          <input v-model="number" type="text" disabled>
        </div>
        <div class="profileDetails">
          <label>Email Address</label>
          <input v-model="email" type="text" disabled>
        </div>
        <div class="profileDetails">
          <label>Home Address</label>
          <input v-model="address" type="text" disabled>
        </div>
      </div>
      <div v-show="loading" class="loading">
        <img src="~/assets/images/loader_black.svg" alt="black loader">
      </div>
      <section class="footer">
        <TheBottomNav />
      </section>
    </div>
    <!-- <section class="footer">
        <TheBottomNav />
      </section> -->
  </main>
</template>

<script>
import imgProfile from '~/assets/images/profile.svg'
export default {
  name: 'Profile',
  data () {
    return {
      title: 'Save',
      clicked: false,
      first_name: '',
      last_name: '',
      email: '',
      number: '',
      address: '',
      imgSrc: imgProfile
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  created () {
    this.getUserdetails()
  },
  methods: {
    async getUserdetails () {
      const response = await this.$axios.get(
        `https://xyz-logistics-api.herokuapp.com/api/v1/user/profile/${this.$store.state.userDetails._id}`
      )
      console.log(response.data.data)
      this.first_name = response.data.data.firstname
      this.last_name = response.data.data.lastname
      this.email = response.data.data.email
      this.number = response.data.data.phone_number
      this.address = response.data.data.address.primary
      if (response.data.data.photo !== '/avatar.png') {
        this.imgSrc = response.data.data.photo
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
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .container {
    width: 90%;
    background: #fff;
    margin: 0 auto;
    max-width: 428px;
    height: 926px;
    padding: 37px 32px 0 32px;
    overflow-y: scroll;
    // overflow-x: hidden;
    .back {
      margin: 0 0 37px 0;
      img {
        cursor: pointer;
      }
    }
    a.nuxt-link-exact-active {
      border-radius: 8px;
      p {
        color: #000;
        border-radius: 8px;
        background: #ffd60a;
      }
    }
    .title {
      display: flex;

      p {
        text-decoration: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #b0b0b0;
        padding: 2px 8px;
        margin-right: 16px;
      }
    }
    .profileUpload {
      width: 100%;
      display: flex;
      margin: 20px auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 58px;
      img {
        cursor: pointer;
      }
      .imgSrc {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
      }
      p {
        margin: 16px 0 24px 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #d9b608;
      }
    }
    .profileDetails {
      margin-bottom: 32px;
      position: relative;
      .pencil {
        display: flex;
        justify-content: space-between;
        img {
          cursor: pointer;
        }
      }
      label {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
      input {
        background: #f4f4f4;
        border-radius: 8px;
        outline: none;
        width: 364px;
        border-style: none;
        padding: 20px;
        margin-top: 8px;
      }
      .master {
        position: absolute;
        top: 50px;
        right: 16px;
        cursor: pointer;
      }
    }

    .btn {
      width: 100%;
      display: flex;
      padding: 0 0 32px 0;
      margin-top: 466px;
      justify-content: center;
    }
    .footer {
      width: 100%;
      margin: 0 0 32px 0;
    }
    .loading{
      @include flex-center;
      height: 55vh;
      img{
       width: 80px;
       height: 80px;
      }
    }
  }
  // .footer {
  // position: fixed;
  // bottom: 20px;
  // bottom: 130px;
  //  width: 19%;
  //  width: 100%;
  //  width: 100%;
  // left: 40.5%;
  // background: red;
  // margin: 0px 27px 32px 0px;

  // }
}
@media screen and (max-width: 500px) {
  main {
    .container {
      width: 100%;
      .profileDetails {
        input {
          width: 100%;
        }
      }
    }
  }
}
</style>
