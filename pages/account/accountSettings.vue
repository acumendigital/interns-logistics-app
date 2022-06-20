<template lang="">
  <main>
    <div class="container">
      <div class="back">
        <nuxt-link to="/wallet/paymentWallet" class="" exact-active-class="">
          <img src="~/assets/images/leftArrow.svg">
        </nuxt-link>
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
          to="/account/accountSettings"
          :class="[
            'kemi',
            $route.name.includes('accountSettings')
              ? 'nuxt-link-exact-active'
              : '',
          ]"
          exact-active-class=""
        >
          <p>Account Settings</p>
        </nuxt-link>
      </div>
      <div class="profileUpload">
        <img src="~/assets/images/profile.svg">
        <p>Update your profile photo</p>
      </div>
      <div class="profileDetails">
        <label>Password</label>
        <input type="text" placeholder="Old Password">
      </div>
      <div class="profileDetails">
        <input type="text" placeholder="New Password">
      </div>
      <div class="profileDetails debit">
        <label>Add a debit card</label>
        <nuxt-link to="/account/card" class="" exact-active-class="">
          <img src="~/assets/images/next.svg">
        </nuxt-link>
      </div>
    </div>

    <section class="footer">
      <TheBottomNav />
    </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      title: 'Save'
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
      p{
        font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #B0B0B0;
padding: 2px 8px;
        margin-right: 16px;

      }
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
         margin: 16px 0 24px 0;
        font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #D9B608;
      }
    }
    .debit{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #F4F4F4;
border-radius: 8px;
        width: 364px;
        border-style: none;
        padding: 20px;
        margin-top: 8px;
        img{
            cursor: pointer;
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
        width: 364px;
        border-style: none;
        padding: 20px;
        margin-top: 8px;
      }
      ::placeholder{
          font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #9E9E9E;
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
      margin-top: 466px;
      justify-content: center;
    }
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      margin: 2rem;
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
      }
  }
}
</style>
