<template>
  <main>
    <div class="container">
      <div class="back">
        <div class="" exact-active-class="" @click="goToPrev">
          <img src="~/assets/images/leftArrow.svg">
        </div>
      </div>
      <div class="title">
        <nuxt-link
          to="/profile"
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
            $route.name.includes('account')
              ? 'nuxt-link-exact-active'
              : '',
          ]"
          exact-active-class=""
        >
          <p>Account Settings</p>
        </nuxt-link>
      </div>
      <div v-show="!loading">
        <div class="profileUpload">
          <!-- <img src="~/assets/images/profile.svg"> -->
          <img :src="imgSrc || '/profile.svg'" alt="avatar" class="imgSrc">
          <p>
            Update your profile photo
          </p>
          <input id="file-input" type="file" accept=".jpeg, .png, .jpg" @change="uploadImage($event)">
        </div>
        <div class="profileDetails">
          <label>First Name</label>
          <input v-model="first_name" type="text">
        </div>
        <div class="profileDetails">
          <label>Last Name</label>
          <input v-model="last_name" type="text">
        </div>
        <div class="profileDetails">
          <label>Phone Number</label>
          <input v-model="number" type="text">
        </div>
        <div class="profileDetails">
          <label>Email Address</label>
          <input v-model="email" type="text" disabled>
        </div>
        <div class="profileDetails">
          <label>Home Address</label>
          <input
            v-model="address"
            type="text"
          >
        </div>
      </div>
      <div v-show="loading" class="loading">
        <img src="~/assets/images/loader_black.svg" alt="black loader">
      </div>
      <div class="btn" @click="save()">
        <Button :name="title" />
      </div>
    </div>
  </main>
</template>

<script>
import imgProfile from '~/assets/images/profile.svg'
export default {
  name: 'Profile',
  data () {
    return {
      title: 'Save',
      first_name: '',
      last_name: '',
      email: '',
      number: '',
      address: '',
      imgSrc: imgProfile,
      kemiData: {}
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
    async  uploadImage (event) {
      const URL = 'https://xyz-logistics-api.herokuapp.com/api/v1/user/me'

      const data = new FormData()
      data.append('image', event.target.files[0])

      const config = {
        header: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }

      const request = await this.$axios.put(
        URL,
        data,
        config
      )
      if (request) {
        console.log(request)
        console.log(request.data.data.photo)
        this.imgSrc = request.data.data.photo
      }
    },
    async getUserdetails () {
      const response = await this.$axios.get(`https://xyz-logistics-api.herokuapp.com/api/v1/user/profile/${this.$store.state.userDetails._id}`
      )
      console.log(response.data.data)
      this.first_name = response.data.data.firstname
      this.last_name = response.data.data.lastname
      this.email = response.data.data.email
      this.number = response.data.data.phone_number
      this.address = response.data.data.address.primary
      this.imgSrc = response.data.data.photo
    },
    async save () {
      const formData = new FormData()
      const data = {
        firstname: this.first_name,
        lastname: this.last_name,
        phone_number: this.number,
        email: this.email,
        address2: this.address,
        photo: this.imgSrc
      }
      formData.set('data', JSON.stringify(data))
      const request = await this.$axios
        .put('https://xyz-logistics-api.herokuapp.com/api/v1/user/me', formData)
      this.$toasted.show('profile updated successfully', {
        position: 'top-center',
        duration: 2000,
        type: 'success'
      })
      this.$router.push('/profile')
      if (request) {
        console.log(request)
        console.log(formData.get('data'))
      }
    },
    goToPrev () {
      this.$router.go(-1)
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
    overflow-y: scroll;
    max-width: 428px;
    height: 926px;
    padding: 37px 32px 0 32px;
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
    .imgSrc {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
}
.img-text-div {
  /* border: 2px solid red; */
  position: relative;
  cursor: pointer;
}
/* .img-text-div input{
    border: 2px solid yellow;
    width:10px;
    height:10px;
} */
.img-change {
  display: flex;
  align-items: center;
  color: #3cda7d;
}
.img-change p {
  cursor: pointer;
}
    .profileUpload{
      width: 100%;
      display: flex;
      margin: 20px auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 58px;
      img{
        cursor: pointer;
      }
      p{
        margin: 16px 0 0 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #D9B608;
      }
      input{
        width: 50%;
         margin: 16px auto 24px auto;
      }
    }
    .profileDetails {
      margin-bottom: 32px;
      position: relative;
      label {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
      input {
        background: #F4F4F4;
        border-radius: 8px;
        outline:none;
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
    .cardDetails {
      display: flex;
      align-items: center;
      justify-content: space-between;
      label {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
      .date {
        position: relative;
        // background: pink;
        .expire {
          border: 1px solid #b0b0b0;
          border-radius: 8px;
          width: 196px;
          margin-top: 8px;
          padding: 20px 30px;
        }
        .calendar {
          position: absolute;
          top: 49px;
          left: 16px;
          cursor: pointer;
        }
      }
      .cvv {
        border: 1px solid #b0b0b0;
        border-radius: 8px;
        width: 132px;
        margin-top: 8px;
        padding: 20px 30px;
      }
    }
    .btn {
      width: 100%;
      display: flex;
        padding: 0 0 32px 0;
      margin-top: 51px;
      justify-content: center;
    }
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
@media screen and (max-width: 500px) {
  main {
    .container {
       width: 100%;
      .profileDetails{
        input{
          width: 100%;
        }
      }
      .bank, .debit{
        width: 100%
      }
      .btn {
        width: 70%;
         margin-top: 200px;
        margin-right: auto;
        margin-left: auto;
      }
      }
  }
}
</style>
