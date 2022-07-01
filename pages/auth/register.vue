<template>
<div class="desktop-container">
    <div class="register-container">
      <div class="back-arrow">
        <font-awesome-icon icon="arrow-left" @click="goToPrev" />
      </div>
      <div class="register-header">
          <p>{{finishRegistration ? "Finish" : "Get Started"}}</p>
      </div>
      <get-started-container 
        @continue-registration="finishRegistration = true" 
        v-show="!finishRegistration" 
        @update-credentials="updateCredentials" 
      />
      <finish-registration v-show="finishRegistration" @finish-registration="registerUser" />
    </div>
</div>
</template>
<script>
import FinishRegistration from '~/components/authComps/FinishRegistration.vue';
import GetStartedContainer from '~/components/authComps/GetStartedContainer.vue';
import axios from '@nuxtjs/axios'
export default {
    components: { 
        GetStartedContainer,
        FinishRegistration 
    },
    data(){
      return{
        finishRegistration: false,
        registerData:{
          email: "",
          password: "",
          firstname: "",
          lastname: "",
          address1: "",
          phone_number: ""
        }
      }
    },
    methods:{
      goToPrev(){
        if(this.finishRegistration){
          this.finishRegistration = false
        } else {
          this.$router.go(-1)
        }
      },
      updateCredentials(e){
        this.registerData.email = e.email
        this.registerData.password = e.password
      },
      async registerUser(e){
        this.registerData.firstname = e.firstname
        this.registerData.lastname = e.lastname
        this.registerData.address1 = e.address1
        this.registerData.phone_number = e.phone_number
        this.$axios.post(`/api/v1/auth/signup`, this.registerData)
        .then( res => {
          if(
            this.registerData.email !== "" ||
            this.registerData.password !== ""
          ){
            this.$toasted.show("You have registered successfully, Kindly check your email to verify", {
            position: 'top-center',
            duration: 2500,
            type: 'success',
            })
            this.$router.push('/auth/login')
            console.log(res);
          }
        })
        .catch(error => {
          this.$toasted.show(
            error.response.data.message,
            {
              position: 'top-center',
              type: 'danger',
              duration: 3500,
            }
          )
          console.log(error);
        })
        // try {
        //   if(
        //     this.registerData.email !== "" ||
        //     this.registerData.password !== ""
        //   ){
        //     const registerUser = await this.$axios.post(`/api/v1/auth/signup`, this.registerData)
        //     this.$toasted.show('You have registered successfully', {
        //     position: 'top-center',
        //     duration: 2500,
        //     type: 'success',
        //     })
        //     this.$router.push('/auth/login')
        //   }
        // } catch (error) {
        //   this.$toasted.show(
        //     error,
        //     {
        //       position: 'top-center',
        //       type: 'danger',
        //       duration: 3500,
        //     }
        //   )
        //   console.log(error);
        // }
        
      }
    }
};
</script>
<style lang="scss" scoped>
    .register-container{
      font-family: "Rubik Regular";
      padding: 32px;
      .back-arrow{
        align-items: flex-start;
        svg{
          color: #D9B608;
        }
      }
      .register-header{
        align-items: flex-start;
        margin-top: 21px;
        p{
          font-weight: 400;
          font-size: 25px;
          line-height: 40px;
        }
      }
    }
    @media (min-width: 1029px) {
      .desktop-container{
        @include flex-center;
        .register-container{
          width: 40%;
        }
      }
    }
</style>
