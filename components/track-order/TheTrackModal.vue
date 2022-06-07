<template lang="">
  <div class="modal-container">
    <div class="dash"></div>
    <div class="info">
      <h1>From</h1>
      <p>Iyana ipaja, ponle, Lagos.</p>
    </div>
    <div class="line"></div>
    <div class="info">
      <h1>To</h1>
      <p>Iyana ipaja, ponle, Lagos.</p>
    </div>
    <div class="line"></div>
    <div class="info">
      <h1>Reciever’s name</h1>
      <p>Samuel peters</p>
    </div>
    <div class="line"></div>
    <div class="info">
      <h1>Number</h1>
      <p>+234 708 987 678</p>
    </div>
    <div class="line"></div>
    <div class="info">
      <h1>Package Type</h1>
      <p>Medium pack</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.modal-container {
  @include flex-center();
  @include flex-column();
  background-color: #fff;
  border-radius: 8px 8px 0px 0px;
  z-index: 1;
  .dash {
    width: 20%;
    height: 4px;
    border-radius: 5px;
    margin: 2rem 0;
    background: #ffd60a;
  }
  .info {
    width: 100%;
    padding: 1rem 2rem;
    h1 {
      font-size: 16px;
      font-family: "Rubik Medium";
      margin-bottom: 10px;
    }
  }
  .line {
    height: 1px;
    background-color: #ccc;
    width: 100%;
  }
}
</style>
