<template>
  <main>
    <div class="container">
      <div class="back">
        <nuxt-link to="/account/editAccount" class="" exact-active-class="">
          <img src="~/assets/images/leftArrow.svg">
        </nuxt-link>
      </div>
      <div class="title">
        <p>Add Bank Account</p>
      </div>
      <div class="cardNumber select">
        <div class="select">
          <select>
            <option value="" disabled selected class="kemi">
              Select Bank
            </option>
            <option value="Option 1">
              Option 1
            </option>
            <option value="Option 2">
              Option 2
            </option>
            <option value="Option 3">
              Option 3
            </option>
            <option value="Option 4">
              Option 4
            </option>
            <option value="Option 5">
              Option 5
            </option>
          </select>
        </div>
      </div>
      <div class="cardNumber">
        <input type="text" placeholder="Account Name">
      </div>
      <div class="cardNumber">
        <input type="text" placeholder="Account Number">
      </div>
      <div
        class="btn"
        @click="
          clicked = true;
          $router.push('/account/accountAdded');
        "
      >
        <Button :name="title" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      title: 'Add'
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  width: 100%;
  background: #1e1e1e;
 padding: 15px 0 20px;
  font-family: "Rubik Regular";
  color: #000;
  font-style: normal;

  .container {
    width: 90%;
    background: #fff;
    margin: 0 auto;
    max-width: 428px;
    height: 926px;
    padding: 37px 32px 0 32px;
    .back {
      margin: 0 0 37px 0;
      img {
        cursor: pointer;
      }
    }
    .title {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      margin: 0 0 48px 0;
    }
    .cardNumber {
      margin-bottom: 32px;
      position: relative;
      input {
        border: 1px solid #b0b0b0;
        border-radius: 8px;
        width: 364px;
        padding: 20px 30px;
        margin-top: 8px;
        outline: none;
      }
      select {
        // A reset of styles, including removing the default dropdown arrow
        appearance: none;
        // Additional resets for further consistency
        background-color: transparent;
        border: none;
        outline: none;
        border-style: none;
        // padding: 0 1em 0 0;
        margin: 0;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        cursor: inherit;
        line-height: inherit;
      }
      select::-ms-expand {
        display: none;
      }
      .select {
        background-image: url("~/assets/images/select.svg");
        background-repeat: no-repeat;
        background-position: right center;
        background-position-x: 320px;
        align-items: center;
        border: 1px solid #b0b0b0;
        border-radius: 8px;
        padding: 20px 0px 20px 30px;
        cursor: pointer;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000;
      }
      select,
      .select:after {
        grid-area: select;
        justify-self: end;
      }
      // .kemi {
      //   font-weight: 400;
      //   font-size: 16px;
      //   line-height: 94px;
      //   color: #000000 !important;
      // }
      ::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
      }
    }
    .btn {
      width: 100%;
      display: flex;
        padding: 0 0 32px 0;
      margin-top: 418px;
      justify-content: center;
      button {
        background: #ffd60a;
        border-radius: 8px;
        width: 80%;
        width: 364px;
        height: 56px;
        margin: 0 auto;
        border-style: none;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  main {
    .container {
       width: 100%;
      .cardNumber{
        input{
          width: 100%;
        }
      }
      .btn {
        width: 70%;
         margin-top: 200px;
        margin-right: auto;
        margin-left: auto;
      }
      }
  }
}
</style>
