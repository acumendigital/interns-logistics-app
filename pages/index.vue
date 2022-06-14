<template>
    <div class="desktop-container">
        <div class="splash-screen-container">
            <div class="splash-screen-image">
                <img src="~/assets/images/splash-screen.png" alt="splash screen">
            </div>
            <div class="splash-screen-content">
                <p>
                    Welcome to the Best way to <strong>send</strong> or <strong>receive</strong> an Item.
                </p>
                <p>Send or Recieve Items locally or internationally.</p>
            </div>
            <div class="splash-screen-btns">
                <nuxt-link to="/auth/register" class="nuxt-link-btn">Get Started</nuxt-link>
                <div class="login-link">
                    <p>Already have an account?</p>
                    <nuxt-link to="/auth/login">Login</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "splashScreen"
}
</script>

<style lang="scss" scoped>
    .splash-screen-container{
        font-family: "Rubik Regular";
        .splash-screen-image{
            @include flex-center;
        }
        .splash-screen-content{
            padding: 11px 32px 51px;
            p{
                &:nth-child(1){
                    // width: 73.364vw;
                    font-weight: 400;
                    font-size: 2.5rem;
                    line-height: 56px;
                }
                &:nth-child(2){
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 21px;
                }
            }
        }
        .splash-screen-btns{
            padding: 0px 32px 32px;
            @include flex-center;
            flex-direction: column;
            gap: 16px;
            .nuxt-link-btn{
                @include active-btn;
                width: 100%;
                border: none;
                outline: none;
                text-decoration: none;
                color: black;
                text-align: center
            }
            .login-link{
                @include flex-center;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                gap: 4px;
                a{
                    text-decoration: none;
                    color: #CC5500;
                    font-weight: bold;
                }
            }
        }
    }

    @media (min-width: 1029px) {
        .desktop-container{
            @include flex-center;
            width: 100%
        }
        .splash-screen-container{
            width: 50%;
            flex-direction: column;
        }
    }
</style>