<template>
  <div class="navbar-container">
      <div class="brand-name">
          <h1>XYZ.LOGISTICS</h1>
      </div>
      <div class="search-bar-container">
          <div class="search-bar">
              <img src="~/assets/images/search-icon.svg" alt="search">
              <input type="text" placeholder="search...">
          </div>
          <div class="notification-bell">
              <img src="~/assets/images/notification-bell.svg" alt="notification-bell">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "dashboardNavbar"
}
</script>

<style lang="scss">
    .navbar-container{
        @include flex-between;
        width: 100%;
        font-family: "Rubik Regular";
        padding: 20px;
        border: 0.6px solid rgba(0, 0, 0, 0.25);
        .brand-name{
            h1{
                font-weight: 400;
                font-size: 25px;
                line-height: 30px;
            }
        }
        .search-bar-container{
            @include flex-between;
            gap: 34px;
            .search-bar{
                @include input-field;
                border: none;
                background: #D9D9D9;
                padding: 6px 16px;
                border-radius: 10px;
                font-family: "Rubik Regular";
                width: 335px;
            }
        }
    }
</style>