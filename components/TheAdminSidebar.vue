<template>
  <div class="sidebar" :class="{hide : revealSidebar, show : !revealSidebar}" >
      <div class="sidebar-hamburger">
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div class="dashboard-links">
          <div class="link">
              <img src="~/assets/images/home-dashboard.svg" alt="home-dashboard">
              <p>Dashboard</p>
          </div>
          <div class="link">
              <img src="~/assets/images/messages.svg" alt="messages">
              <p>Messages</p>
          </div>
          <div class="link">
              <img src="~/assets/images/freights.svg" alt="freights">
              <p>Freights</p>
          </div>
          <div class="link">
              <img src="~/assets/images/documents.svg" alt="documents">
              <p>Documents</p>
          </div>
          <div class="link">
              <img src="~/assets/images/customers.svg" alt="customers">
              <p>Customers</p>
          </div>
          <div class="link">
              <img src="~/assets/images/payments.svg" alt="payments">
              <p>Payments</p>
          </div>
          <div class="link">
              <img src="~/assets/images/reports.svg" alt="reports">
              <p>Reports</p>
          </div>
      </div>
      <div class="dashboard-help-links">
          <div class="link">
              <img src="~/assets/images/settings.svg" alt="settings">
              <p>Settings</p>
          </div>
          <div class="link">
              <img src="~/assets/images/help-centre.svg" alt="help-centre">
              <p>Help Centre</p>
          </div>
      </div>
      <div class="dashboard-user-profile">
          <div class="link">
              <img src="~/assets/images/user-profile.png" alt="user-profile">
              <p>Olamide</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "side-bar",
    data(){
        return{
            revealSidebar: true
        }
    },
    mounted(){
        this.$el.addEventListener('mouseover', this.showSidebar)
        this.$el.addEventListener('mouseleave', this.hideSidebar)
        this.$el.addEventListener('click', () => {
            this.revealSidebar = !this.revealSidebar
        })
    },
    methods:{
        showSidebar(){
            this.revealSidebar = false
        },
        hideSidebar(){
            this.revealSidebar = true
        }
    }
}
</script>

<style lang="scss">
    .sidebar{
        width: 237px;
        padding: 34px 47px 57px;
        background: #D9B609;
        font-family: "Rubik Regular";
        .sidebar-hamburger{
            display: flex;
            flex-direction: column;
            gap: 6.66px;
            padding-bottom: 5rem;
            div{
                width: 24px;
                height: 1px;
                background-color: black;
            }
        }
        .dashboard-links{
            display: flex;
            flex-direction: column;
            gap: 40px;
            margin-bottom: 10.8rem;
            .link{
                display: flex;
                align-items: center;
                gap: 15px;
            }
        }
        .dashboard-help-links{
            display: flex;
            flex-direction: column;
            gap: 40px;
            margin-bottom: 5.93rem;
            .link{
                display: flex;
                align-items: center;
                gap: 15px;
            }
        }
        .dashboard-user-profile{
            display: flex;
            flex-direction: column;
            gap: 40px;
            .link{
                display: flex;
                align-items: center;
                gap: 15px;
                img{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                }
            }
        }
    }
    .hide{
        width: 118px;
        transition: all;
        transition-delay: 3s;
        animation: hide-sidebar 1s ease-in-out;
        p{
            // font-size: 0px;
            animation: hide-font 1s ease-in-out;
            animation-fill-mode: forwards;
        }
    }
    .show{
        width: 237px;
        transition: all;
        transition-delay: 3s;
        animation: show-sidebar 1s ease-in-out;
        animation-fill-mode: forwards;
        p{
            // font-size: 0px;
            animation: show-font 1s ease-in-out;
            animation-fill-mode: backwards;
            width: 90px;
        }
    }

    @keyframes hide-sidebar {
        0%{
            width: 237px;
        }
        // 50%{
        //     width: 150px;
        // }
        100%{
            width: 118px;
        }
    }
    @keyframes hide-font {
        0%{
            transform: translateX(0px);
        }
        50%{
            opacity: 0.1;
        }
        100%{
            transform: translateX(-20px);
            opacity: 0;
            font-size: 0px
        }
    }
    @keyframes show-sidebar {
        0%{
            width: 118px;
        }
        100%{
            width: 237px;
        }
    }

    @keyframes show-font {
        0%{
            transform: translateX(-20px);
            opacity: 0;
            font-size: 0px
        }
        50%{
            opacity: 0.9;
        }
        100%{
            transform: translateX(0px);
        }
    }
</style>