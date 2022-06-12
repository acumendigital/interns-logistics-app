<template>
  <div class="get-started-container">
    <div class="form-container">
        <div class="email input-field">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="getStartedData.email">
        </div>
        <div class="password input-field">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="getStartedData.password">
        </div>
        <div class="confirm-password input-field" >
            <label for="confirm-password">Confirm Password</label>
            <input 
                type="password" 
                name="confirm-password" 
                id="confirm-password" 
                v-model="confirmPassword" 
                @change="confirmPasswordHandler" 
                :class="{ inputError : !confirmed}"
            >
            <p class="error-message" v-if="!confirmed">Password does not match!</p>
        </div>
    </div>
    <div class="page-breaker">
        <div class="line"></div>
        <div class="or">OR</div>
        <div class="line"></div>
    </div>
    <div class="social-logins">
        <button class="google link">
            <img src="~/assets/images/Google-icon.svg" alt="google">
            <p>Google</p>
        </button>
        <button class="facebook link">
            <img src="~/assets/images/Facebook-icon.svg" alt="facebook">
            <p>Facebook</p>
        </button>
    </div>
    <div class="continue-btn">
        <button @click="continueRegistration" :class="{ disabled: !confirmed }">Continue</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "GetStartedContainer",
    data(){
        return{
            getStartedData:{
                email: "",
                password: "",
            },
            confirmPassword: "",
            confirmed: false,
        }
    },
    methods:{
        continueRegistration(){
            if(this.confirmed){
                this.$emit("continue-registration");
                this.$emit("update-credentials", this.getStartedData)
            }
        },
        confirmPasswordHandler(){
            if(this.getStartedData.password === this.confirmPassword){
                this.confirmed = true
            } else {
                this.confirmed = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .get-started-container{
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
                    outline: none;
                }
                .inputError{
                    border: 1px solid red;
                }
                .error-message{
                    font-size: 10px;
                    color: red;
                }
            }
        }
        .page-breaker{
            @include flex-center;
            gap: 67px;
            margin-top: 40px;
            .line{
                width: 103px;
                height: 2px;
                background: #EBEBEB;
                border-radius: 8px;
            }
        }
        .social-logins{
            @include flex-center;
            gap: 24px;
            margin-top: 40px;
            .link{
                @include flex-center;
                gap: 40px;
                padding: 16px 1.5rem;
                border: 1px solid #DFDFDF;
                border-radius: 8px;
                background: white;
            }
        }
        .continue-btn{
            padding: 64px 0px 0px;
            button{
                @include active-btn;
                border: none;
                outline: none;
                width: 100%;
            }
            .disabled{
                background: grey;
            }
        }
    }
</style>