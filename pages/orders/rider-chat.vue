<template>
  <div class="chat-container">
    <div class="chat-navigation">
      <div class="left">
        <div @click="goToPrev">
          <font-awesome-icon icon="arrow-left" class="arrow" />
        </div>
        <div class="rider-info">
          <img src="~assets/images/rider-img.png" alt="" />
          <p>Yusuf Aina</p>
        </div>
      </div>
      <div>
        <font-awesome-icon icon="phone-volume" class="phone" />
      </div>
    </div>

    <div class="chat-box">
      <div class="user-chat">
        <div class="user-chat-box">
          Dr. Alan Stern was born in DuBois, Pennsylvania and is a graduate of
          Villanova University. He obtained his medical degree at Thomas
          Jefferson University in Philadelphia. His residency was at Thomas
          Jefferson and its affilia
        </div>
      </div>
      <div class="rider-chat">
        <div class="rider-chat-box">
          Dr. Alan Stern was born in DuBois, Pennsylvania and is a graduate of
          Villanova University. He obtained his.
        </div>
      </div>
    </div>

    <div class="chat-input">
      <input type="text" name="shat" value="" />
      <font-awesome-icon icon="paper-plane" />
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    goToPrev(){
      this.$router.go(-1)
    }
  }
};
</script>
<style lang="scss" scoped>
.chat-container {
  .chat-navigation {
    @include flex-row();
    justify-content: space-between;
    align-items: center;
    border-bottom: 4px solid #f5f5f5;
    padding: 2rem;
    svg {
      color: #d9b608;
    }
    .left {
      @include flex-row();
      justify-content: space-between;
      align-items: center;
      .arrow {
        margin-right: 3rem;
      }
      .rider-info {
        @include flex-row();
        @include flex-center();
        img {
          border-radius: 5px;
          margin-right: 10px;
        }
        p {
          font-family: "Rubik Medium";
          font-size: 16px;
        }
      }
    }
    .phone {
      transition: all;
      transform: rotate();
    }
  }
  .chat-box {
    padding: 2rem;
    font-family: "Rubik Regular";
    font-size: 14px;
    .user-chat {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 2rem;
      .user-chat-box {
        width: 40%;
        background: #ffd60a;
        border-radius: 8px;
        padding: 2rem;
      }
    }
    .rider-chat {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .rider-chat-box {
        width: 40%;
        background: #e5e5e5;
        border-radius: 8px;
        padding: 2rem;
      }
    }
  }
  .chat-input {
    padding: 2rem;
    position: absolute;
    bottom: 0;
    @include flex-row();
    justify-content: flex-end;
    width: 100%;
    input {
      width: 100%;
      height: 50px;
      border: 1px solid #bfbfbf;
      border-radius: 8px;
      outline: none;
      padding: 1rem 2rem;
    }
    svg {
      color: #d9b608;
      position: absolute;
      margin-top: 17px;
      margin-right: 10px;
    }
  }
}
</style>
