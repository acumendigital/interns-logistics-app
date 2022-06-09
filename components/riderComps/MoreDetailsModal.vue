<template>
  <div class="more-details-modal-container">
    <div class="modal">
      <div class="close-modal" @click="closeDetailModal">
          <img src="~/assets/images/close-modal.svg" alt="close-modal">
      </div>
      <div class="more-details-modal">
          <div class="close-modal-dash">
              <div></div>
          </div>
          <div class="modal-details">
              <div class="modal-section">
                  <h3>From</h3>
                  <p>Iyana ipaja, ponle, Lagos.</p>
              </div>
              <div class="modal-section">
                  <h3>To</h3>
                  <p>Iyana ipaja, ponle, Lagos.</p>
              </div>
              <div class="modal-section">
                  <h3>Reciever’s name</h3>
                  <p>Iyana ipaja, ponle, Lagos.</p>
              </div>
              <div class="modal-section number-section">
                  <div class="number">
                      <h3>Number</h3>
                      <p>+234 708 987 678</p>
                  </div>
                  <img src="~/assets/images/Call-yellow.svg" alt="call">
              </div>
              <div class="modal-section">
                  <h3>Package Type</h3>
                  <p>Iyana ipaja, ponle, Lagos.</p>
              </div>
              <div class="modal-section">
                  <h3>Package Status</h3>
                  <div class="picked-up">
                      <p>Picked-up</p>
                      <div class="radio"></div>
                  </div>
                  <div class="delivered">
                      <p>Delivered</p>
                      <div class="radio active"></div>
                  </div>
              </div>
              <div class="submit-btn">
                  <button>Update</button>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "moreDetailsModal",
    methods:{
        closeDetailModal(){
            this.$emit('close-detail-modal')
        },
        showDetailModal(){
            this.$emit('show-detail-modal')
        }
    }
}
</script>

<style lang="scss" scoped>
    .more-details-modal-container{
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        .modal{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            .close-modal{
                display: flex;
                justify-content: flex-end;
                padding: 24px 32px;
                width: 100%;
            }
            .more-details-modal{
                padding: 16px 0px 32px;
                background: #FFFFFF;
                border-radius: 8px;
                z-index: 3;
                .close-modal-dash{
                    @include flex-center;
                    div{
                        width: 91px;
                        height: 4px;
                        background: #FFD60A; 
                    }
                   
                }
                .modal-details{
                    .modal-section{
                        padding: 16px 32px;
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        border-bottom: 1px solid #DBDBDB;
                        .picked-up{
                            @include flex-between;
                            .radio{
                                width: 14px;
                                height: 14px;
                                border: 4px solid #FFD60A;
                                border-radius: 50%;
                            }
                        }
                        .delivered{
                            @include flex-between;
                            .radio{
                                width: 14px;
                                height: 14px;
                                border: 4px solid #FFD60A;
                                border-radius: 50%;
                            }
                        }
                        .active{
                            background: #D9B608;
                        }
                    }
                    .number-section{
                        flex-direction: row;
                        @include flex-between;
                        .number{
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                        }
                    }
                    .submit-btn{
                        padding: 27px 32px 0px;
                        button{
                            @include active-btn;
                            width: 100%;
                            border: none;
                            outline: none;
                        }  
                    }
                }
            }
        }
       
    }
</style>