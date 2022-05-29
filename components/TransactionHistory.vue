<template>
  <main>
    <div class="container">
      <div class="history">
        <div class="details">
          <img src="~assets/images/up.svg" alt="">
          <p class="name">
            Send Local
          </p>
        </div>

        <p class="amount">
          -N2,000
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
main {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  font-family: "Rubik Regular";
  font-style: normal;
  //   width: 100%;
  //   color: #000;

  .container {
    width: 100%;
    background: #fff;
    .history {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 32px;
      margin-bottom: 48px;
      .details {
        display: flex;
        align-items: center;
      }
      .name {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        margin-left: 27px;
      }
      .amount {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #777777;
      }
    }
  }
}
</style>
