<template>
  <div class="finish-registration-container">
    <div class="form-container">
        <div class="full-name input-field">
            <label for="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" v-model="finishRegData.firstname">
        </div>
        <div class="full-name input-field">
            <label for="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" v-model="finishRegData.lastname">
        </div>
        <div class="home-address input-field">
            <label for="home-address">Home Address</label>
            <input type="text" name="home-address" id="home-address" v-model="finishRegData.address1">
        </div>
        <div class="phone-number input-field">
            <label for="phone-number">Phone Number</label>
            <input type="number" name="phone-number" id="phone-number" v-model="finishRegData.phone_number">
        </div>
    </div>
    <div class="submit-btn">
        <button @click="finishRegistrationHandler" :class="{ loading : loading }">Finish <span v-show="loading"><img src="~/assets/images/loader.svg" alt="loader"></span></button>
    </div>
  </div>
</template>

<script>
export default {
    name: "FinishRegistration",
    data(){
        return{
            finishRegData:{
                firstname: "",
                lastname: "",
                address1: "",
                phone_number: "",
            },
        }
    },
    methods:{
        finishRegistrationHandler(){
            if(!this.loading){
                this.$emit("finish-registration", this.finishRegData);
            }
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
    .finish-registration-container{
        padding: 32px 0px;
        .form-container{
            display: flex;
            flex-direction: column;
            gap: 32px;
            .input-field{
                display: flex;
                flex-direction: column;
                gap: 8px;
                input{
                    padding: 24px 16px;
                    border: 1px solid #DFDFDF;
                    border-radius: 8px;
                }
            }
        }
        .submit-btn{
            padding: 64px 0px 0px;
            button{
                @include active-btn;
                border: none;
                outline: none;
                width: 100%;
            }
            .loading{
              @include flex-center;
              position: relative;
              background: grey;
              color: white;
                span{
                  position: absolute;
                  right: 5px;
                  bottom: 5px;
                  img{
                    width: 20px;
                    height: 20px;
                  }
                }
            }
        }
    }
</style>