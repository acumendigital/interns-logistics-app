<template>
  <div class="admin-auth-container">
    <div class="content">
        <Nuxt/>
    </div>
    <div class="image-side">
        <img src="~assets/images/admin-auth-image.png" alt="auth page">
    </div>
  </div>
</template>

<script>
export default {
    name: 'AdminAuthLayout',
}
</script>

<style lang="scss">
    .admin-auth-container{
        @include flex-center;
        justify-content: space-between;
        font-family: "DM Sans Regular";
        .content{
            width: 100%;
        }
        .image-side{
            border-radius: 80px 0px 0px 0px;
            height: 100vh;
            object-fit: contain;
            display: none;
            img{
                width: 50vw;
                height: 100%;
            }
        }
    }
    @media (min-width: 980px) {
        .admin-auth-container{
            .image-side{
                display: block;
            }
        }
    }
</style>