<template>
  <nuxt-link to="/rider/OrderMapView">
    <div class="track-order-container">
      <div class="lhs">
        <div class="vector">
          <div class="transparent-circle" />
          <div class="line" />
          <div class="filled-circle" />
        </div>
        <div class="order-details">
          <p>Iyana Ipaja, Lagos</p>
          <h2>Festac, Lagos</h2>
          <p>Nywj-879</p>
        </div>
      </div>
      <div class="rhs">
        <img src="~/assets/images/chevron-right.svg" alt="right arrow">
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'RiderOrderCard'
}
</script>

<style lang="scss" scoped>
a{
    width: 100%;
    text-decoration: none;
    color: black
}
    .track-order-container{
        @include flex-between;
        gap: 22px;
        padding: 16px 28px 14px 41px;
        background: #FFFFFF;
        border-radius: 8px;
        width: 100%;
        cursor: pointer;
        &:hover{
            .rhs{
                img{
                    transition: all ease-in-out;
                    transform: translateX(5px);
                }
            }
        }
        .lhs{
            display: flex;
            align-items: flex-start;
            gap: 22px;
            .vector{
                display: flex;
                flex-direction: column;
                align-items: center;
                .transparent-circle{
                    width: 10px;
                    height: 10px;
                    border: 1px solid #D9B608;
                    border-radius: 50%;
                }
                .line{
                    width: 0px;
                    height: 28px;
                    border: 1px solid #D9B608;
                    background: #D9B608;
                }
                .filled-circle{
                    width: 10px;
                    height: 10px;
                    background: #D9B608;
                    border-radius: 50%;
                }
            }
            .order-details{
                p:nth-child(1){
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 21px;
                    color: #949494;
                    margin-bottom: 16px;
                }
                h2{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 21px;
                    margin-bottom: 4px;
                }
                p:nth-child(3){
                    font-weight: 400;
                    font-size: 10px;
                    line-height: 12px;
                    color: #777777;
                }
            }
        }

    }
</style>
