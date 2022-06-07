<template>
  <div class="user-profile">
          <img src="~/assets/images/rider-profile.png" alt="rider">
  </div>
</template>

<script>
export default {
    name: "riderProfile"
}
</script>

<style lang="scss" scoped>
    .user-profile{
        @include flex-center;
        justify-content: flex-end;
    }
</style>