<template>
   <div class="delivery-detail-container" @click="showFreightDetails">
       <div class="header">
           <div class="tracking-number">
               <p>Tracking Number</p>
               <h3>NA-0135557</h3>
           </div>
           <div class="vehicle-type">
               <img src="~/assets/images/truck.svg" alt="truck">
           </div>
       </div>
       <div class="route-info">
           <div class="location">
               <div class="location-arrow">
                   <img src="~/assets/images/sender-arrow.svg" alt="sender-arrow">
               </div>
               <div class="sender-location">
                   <h3>
                       Lagos, NG
                   </h3>
                   <div class="detailed-location">
                       <p>
                           Ikeja Warehouse
                       </p>
                   </div>
               </div>
           </div>
           <div class="location">
               <div class="location-arrow">
                   <img src="~/assets/images/receiver-arrow.svg" alt="receiver-arrow">
               </div>
               <div class="receiver-location">
                   <h3>
                       Nairobi, KE
                   </h3>
                   <div class="detailed-location">
                       <p>
                           Pearl Habour Point
                       </p>
                   </div>
               </div>
           </div>
       </div>
       <div class="recipient-info">
           <p class="recipient">Recipient</p>
           <h3 class="recipient-name">Shammah Imisiwe</h3>
           <p class="recipient-location">Runda, Nairobi</p>
       </div>
   </div>
</template>

<script>
export default {
    name: "deliveryDetails",
    methods: {
        showFreightDetails(){
            this.$emit("show-freight-details")
        }
    }
}
</script>

<style lang="scss">
    .delivery-detail-container{
        font-family: "Rubik Regular";
        background: #EBEBEB;
        border-radius: 10px;
        width: 335px;
        cursor: pointer;
        h3{
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
        }
        .header{
            padding: 20px 16px 10px 20px;
            @include flex-between;
            border-bottom: 0.3px solid #575757;
        }
        .route-info{
            padding: 18px 10px 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            border-bottom: 0.3px solid #575757;
            .location{
                display: flex;
                gap: 10px;
                .location-arrow{
                    background-color: #C4C4C4;
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                    @include flex-center;
                }
            }
        }
        .recipient-info{
            padding: 20px 10px 34px;
        }
    }
</style>