<template>
  <div class="rider-menu-container">
      <div class="menu-btns">
          <nuxt-link to="/rider/route">
            <div class="routes dead" :class="{active : route.path == '/rider/route'}">
                <font-awesome-icon icon="route"/>
                <p>Routes</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/rider/orders">
            <div class="orders dead" :class="{active : route.path == '/rider/orders'}">
                <font-awesome-icon icon="list"/>
                <p>Orders</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/rider/profile">
            <div class="user dead" :class="{active : route.path == '/rider/profile'}">
              <font-awesome-icon icon="user"/>
              <p>Profile</p>
            </div>
          </nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "riderBottomNav",
    data(){
        return{
            route: this.$route
        }
    }
}
</script>

<style lang="scss" scoped>
    .rider-menu-container{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 32px 32px;
        .menu-btns{
            background: #FFFFFF;
            box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.15);
            border-radius: 16px;
            @include flex-center;
            justify-content: space-evenly;
            padding: 16px;
            color: #C4C4C4;
            text-decoration: none;
            gap: 58px;
            a{
                    text-decoration: none;
                }
            svg{
                color: #C4C4C4;
            }
            p{
                display: none;
                text-decoration: none;
            }
            .active{
                @include flex-center;
                gap: 12px;
                padding: 12px 16px;
                background-color: #FFD60A;
                color: black;
                border-radius: 8px;
                svg{
                    color: black;
                }
                p{
                    display: block;
                    text-decoration: none;
                }
                
            }
            .dead:hover{
                transform: scale(1.05);
                color: #666666;
            }
        }
    }
</style>