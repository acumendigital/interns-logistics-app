<template>
    <div class="container">
        <div class="routes-help-btn-container">
            <div class="routes-help-btns">
                <div class="help-btn">
                    <select name="sort" id="sort">
                        <option value="sort" selected disabled>Sort</option>
                    </select>
                </div>
                <div class="help-btn">
                    <p>Active 12345</p>
                </div>
                <div class="help-btn">
                    <p>Pending </p>
                </div>
                <div class="help-btn">
                    <p>Fulfilled 300</p>
                </div>
            </div>
            <div class="dashboard-date">
                <p>20 April 2022</p>
            </div>
        </div>
        
        <div class="routes-container">
            <div class="routes-vehicle-details">
                <the-vehicle-details />
                <the-vehicle-details />
            </div>
            <div class="routes-delivery-details">
                <TheDeliveryDetails />
                <TheDeliveryDetails />
                <TheDeliveryDetails />
                <TheDeliveryDetails />
                <TheDeliveryDetails />
                <TheDeliveryDetails />
                <TheDeliveryDetails />
                <TheDeliveryDetails />
                <TheDeliveryDetails />
                <TheDeliveryDetails />
                <TheDeliveryDetails />
            </div>
        </div>
    </div> 
</template>

<script>
import TheDeliveryDetails from "~/components/TheDeliveryDetails.vue";
import TheVehicleDetails from "~/components/TheVehicleDetails.vue"
export default {
    name: "routesContainer",
    components:{
        TheDeliveryDetails,
        TheVehicleDetails
    }
}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        padding: 29px 0px 0px 20px;
        font-family: "Rubik Regular";
        ::-webkit-scrollbar {
            width: 5px;
            }
    }
    .routes-help-btn-container{
        @include flex-between;
        padding-right: 22px;
        .routes-help-btns{
        display: flex;
        align-items: center;
        gap: 20px;
        .help-btn{
            @include help-btns;
        }
    }
    }
    
    .routes-container{
        width: 100%;
        display: grid;
        grid-template-columns: 217px auto;
        // grid-template-rows: 60px auto;
        gap: 20px;
        padding: 29px 0px 0px ;
        
        .routes-vehicle-details{
            display: flex;
            gap: 20px;
            flex-direction: column;
        }
        .routes-delivery-details{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 335px)); // Normal continer size: 335px
            gap: 20px;
            height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
</style>
