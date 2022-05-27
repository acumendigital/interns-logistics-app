<template lang="">
  <main>
    <div class="main">
      <section class="close">
        <nuxt-link to="/home"> <font-awesome-icon icon="x" /></nuxt-link>
      </section>
      <section class="toggle">
        <p :class="active ? 'active' : 'inactive'" @click="toggleActive">
          Active
        </p>
        <p :class="delivered ? 'active' : 'inactive'" @click="toggleDelivered">
          Delivered
        </p>
        <p :class="cancelled ? 'active' : 'inactive'" @click="toggleCancelled">
          Cancelled
        </p>
      </section>
      <section v-show="active" class="active-cards">
        <TheActiveOrder />
        <TheActiveOrder />
        <TheActiveOrder />
        <TheActiveOrder />
        <TheActiveOrder />
        <TheActiveOrder />
      </section>
      <section v-show="delivered" class="active-cards">
        <TheDeliveredOrder />
        <TheDeliveredOrder />
        <TheDeliveredOrder />
        <TheDeliveredOrder />
        <TheDeliveredOrder />
        <TheDeliveredOrder />
      </section>
      <section v-show="cancelled" class="active-cards">
        <TheCancelledOrder />
        <TheCancelledOrder />
        <TheCancelledOrder />
        <TheCancelledOrder />
        <TheCancelledOrder />
        <TheCancelledOrder />
      </section>
    </div>

    <section class="footer">
      <TheBottomNav />
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      active: true,
      delivered: false,
      cancelled: false,
    };
  },
  methods: {
    toggleActive() {
      this.active = true;
      this.delivered = false;
      this.cancelled = false;
    },
    toggleDelivered() {
      this.delivered = true;
      this.active = false;
      this.cancelled = false;
    },
    toggleCancelled() {
      this.cancelled = true;
      this.active = false;
      this.delivered = false;
    },
  },
};
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Rubik Regular";
  padding: 2rem;
  background: #fafafa;
  .main {
    width: 100%;
  }
  .close {
    display: flex;
    justify-content: flex-start;
    svg {
      font-size: 20px;
      color: #d9b608;
    }
  }
  .toggle {
    @include flex-row();
    justify-content: space-between;
    margin: 2rem 0rem;
    width: 133px;
    .active {
      background-color: #ffd60a;
      color: #000;
      padding: 6px 8px;
      border-radius: 8px;
      cursor: pointer;
    }
    .inactive {
      padding: 6px 8px;
      color: #b0b0b0;
      cursor: pointer;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 32px 24px;
  }
  @media screen and(min-width: 800px) {
    .main {
      width: 40%;
    }
  }
}
</style>
