<template>
    <div class="map-container" ref="mapRef">
        <!-- <img src="~/assets/images/routesMap.png" alt="map"> -->
    </div>
</template>

<script>
export default {
    name: "routesMap",
    mounted(){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        this.$toasted.show(
            "Geolocation is not supported by this browser.",
            {
                position: 'top-center',
                type: 'danger',
                duration: 3500
            }
        )
    }

    let mapref = this.$refs.mapRef

    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude, "Longitude: " + position.coords.longitude);

        try {
            let map = new google.maps.Map(mapref, {
                center: { lat: position.coords.latitude, lng: position.coords.longitude },
                zoom: 15,
            });
        } catch (error) {
            console.log(error);
        }
    }

    
    
    }
}
</script>

<style lang="scss" scoped>
    .map-container{
        width: 85.047vw;
        height: 50vh;
        @include flex-center;
    }
</style>