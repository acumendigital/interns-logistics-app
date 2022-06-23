<template>
  <div class="map" ref="mapContainer">

  </div>
</template>

<script>
export default {
    name: "directionContainer",
    props:{
        originLngLat:{
            required: true,
            type: Object,
            default: {}
        },
        destinationLngLat:{
            required: true,
            type: Object,
            default: {}
        },
    },
    async mounted(){
        function haversine_distance(mk1, mk2) {
            var R = 6371.0710; // Radius of the Earth in km
            var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
            var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
            var difflat = rlat2-rlat1; // Radian difference (latitudes)
            var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

            var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
            return d;
        }

        var map;
        // function initMap() {
            
        // }

         {
            // The map, centered on Central Park
            const center = {lat: 40.774102, lng: -73.971734};
            const options = {zoom: 15, scaleControl: true, center: center};
            map = await new google.maps.Map(
                this.$refs.mapContainer, options);
            // Locations of landmarks
            const origin = this.originLngLatData;
            const destination = {lat: 40.771209, lng: -73.9673991};
            // The markers for The Dakota and The Frick Collection
            var mk1 = await new google.maps.Marker({position: origin, map: map});
            var mk2 =  await new google.maps.Marker({position: destination, map: map});

            // Draw a line showing the straight distance between the markers
            var line = await new google.maps.Polyline({path: [origin, destination], map: map});

            // Calculate and display the distance between markers
            // var distance = this.originLngLatData && haversine_distance(mk1, mk2);

            // this.distance = distance
            // console.log(distance);

           let directionsService = await new google.maps.DirectionsService();
            let directionsRenderer = await new google.maps.DirectionsRenderer();
            // directionsRenderer.setMap(map); // Existing map object displays directions
            // Create route from existing points used for markers
            const route = {
                origin: origin,
                destination: destination,
                travelMode: 'DRIVING'
            }
            
            directionsService.route(route,
                function(response, status) { // anonymous function to capture directions
                if (status !== 'OK') {
                    window.alert('Directions request failed due to ' + status);
                    return;
                } else {
                    directionsRenderer.setDirections(response); // Add route to the map
                    var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
                    if (!directionsData) {
                    // window.alert('Directions request failed');
                    this.$toasted.show(
                        error.message,
                        {
                            position: 'top-center',
                            type: 'danger',
                            duration: 3500,
                        }
                        )
                    return;
                    }
                    else {
                        this.distance = directionsData.distance.text
                        console.log(directionsData);
                    }
                }
                }.bind(this));
        }
                    // this.distance = distanceValue
                    // console.log(distanceValue);
    },
    data(){
        return{
            distance: "",
        }
    },
    computed: {
        originLngLatData(){
            return this.originLngLat
        },
        destinationLngLatData(){
            return this.destinationLngLat
        }
    }
}
</script>

<style lang="scss">
    .map{
        display: none !important;
    }
</style>