<template>
  <div class="vehicle-details-container">
      <div class="contents">
          <div class="date">
              Today
          </div>
          <div class="mileage">
              <h3>1229km</h3>
              <p>+200km</p>
          </div>
      </div>
      <div class="vehicle-type">
          <div class="img-container">
              <img src="~/assets/images/truck.svg" alt="truck">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "vehicleDetails",
}
</script>

<style lang="scss">
    .vehicle-details-container{
        font-family: "Rubik Regular";
        padding: 20px 14px 13px;
        background: #EBEBEB;
        border-radius: 10px;
        @include flex-between;
        width: 217px;
        position: relative;
        overflow: hidden;
        .contents{
            display: flex;
            flex-direction: column;
            gap: 30px;
            .date{
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
            }
            .mileage{
                h3{
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 24px;
                }
                p{
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                }
            }
        }
        .vehicle-type{
            .img-container{
                margin-right: -105px;
                img{
                    height: 72px;
                }
            }
        }
    }
</style>