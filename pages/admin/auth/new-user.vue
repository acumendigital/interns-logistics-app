<template>
  <div class="login-form-container">
    <div class="login-form">
        <div class="login-form-header">
            <h1>Hello Prudence</h1>
            <p>Set your username and  password</p>
        </div>
        <div class="login">
            <div class="input">
                <label class="placeholder" for="name">
                    Username
                </label>
                <input type="name" id="name" placeholder="Username">
            </div>
            <div class="input">
                <label for="password" class="placeholder">
                    Password
                </label>
                <input type="password" id="password" placeholder="Password">
            </div>
            <div class="input">
                <label for="confirm-password" class="placeholder">
                    Confirm Password
                </label>
                <input type="password" id="confirm-password" placeholder="Confirm Password">
            </div>
            <button class="continue-btn" :class="{ loading : loading }">Continue <span v-show="loading"><img src="~/assets/images/loader.svg" alt="loader"></span></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    layout: "AdminAuthLayout",
    computed:{
        loading(){
            return this.$store.state.loading
        }
    }
}
</script>

<style lang="scss">
    .login-form-container{
        @include flex-center;
        width: 100%;
        height: 100vh;
        .login-form{
            width: 60%;
            .login-form-header{
                h1{
                    font-weight: 700;
                    font-size: 40px;
                    line-height: 56px;
                    text-align: center;
                }
                p{
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    text-align: center;
                    color: #777777;
                }
            }
            .login{
                margin-top: 40px;
                @include flex-between;
                flex-direction: column;
                gap: 24px;
                .input{
                    background: #F8F8F8;
                    border-radius: 8px;
                    padding: 2px 32px;  
                    width: 100%;
                    &:focus-within{
                        outline: 1px solid #D9B608;
                        padding: 4px 32px;
                        label{
                            display: block;
                        }
                        input{
                            padding: 4px 0px;
                        }
                    }
                    label{
                        font-weight: 400;
                        font-size: 8px;
                        line-height: 10px;
                        color: #7D7D7D;
                        display: none;
                    }
                    input{
                        background: transparent;
                        border: none;
                        outline: none;
                        width: 100%;
                        padding: 12px 0px
                    }
                }
                button{
                    @include active-btn;
                    border: none;
                    outline: none;
                    width: 100%;
                    margin-top: 16px;
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
    }
</style>