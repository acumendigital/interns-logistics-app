<template>
  <div class="new-request-modal-container">
      <div class="close-modal">
          <img src="~/assets/images/close-modal.svg" alt="close modal">
      </div>
      <div class="new-request-modal">
          <div class="request-header">
              <div class="title">
                  New Pick-up
              </div>
              <div class="name">
                  <h2>Name</h2>
                  <p>Samuel L Jackson</p>
              </div>
          </div>
          <div class="request-location-details">
              <div class="pick-up location">
                  <img src="~/assets/images/Location.svg" alt="location">
                  <div class="location-details">
                      <h3>Pick-up</h3>
                      <p>Samuel ade street, Egbeda, Lagos.</p>
                  </div>
              </div>
              <div class="drop-off location">
                  <img src="~/assets/images/Location.svg" alt="location">
                  <div class="location-details">
                      <h3>Drop-off</h3>
                      <p>Samuel ade street, Egbeda, Lagos.</p>
                  </div>
              </div>
          </div>
          <div class="call">
              <button>
                  <img src="~/assets/images/Call.svg" alt="call">
                  <p>Call</p>
              </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'newRequestModal'
}
</script>

<style lang="scss" scoped>
    .new-request-modal-container{
        z-index: 3;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        @include flex-center;
        flex-direction: column;
        gap: 24px;
        background: rgba(0, 0, 0, 0.4);
        padding: 32px;
        .close-modal{
            @include flex-center;
            align-items: flex-end;
            justify-content: flex-end;
            width: 100%;
        }
        .new-request-modal{
            background: #FFFFFF;
            border-radius: 8px;
            width: 100%;
            .request-header{
                padding: 24px 48px 16px;
                border: 1px solid #DBDBDB;
                .title{
                    @include flex-center;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                }
                .name{
                    h2{
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 24px;
                    }
                    p{
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 21px;
                    }
                }
            }
            .request-location-details{
                padding: 24px;
                @include flex-center;
                flex-direction: column;
                gap: 24px;
                .location{
                    display: flex;
                    gap: 19px;
                    align-items: flex-start;
                    .location-details{
                        h3{
                            font-weight: 600;
                            font-size: 14px;
                            line-height: 21px;
                        }
                        p{
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 16px;
                        }
                    }
                }
            }
            .call{
                @include flex-center;
                padding-bottom: 26px;
                button{
                    @include active-btn;
                    @include flex-center;
                    gap: 9px;
                    border: none;
                    outline: none;
                    width: 246px;
                }
            }
        }
    }
</style>