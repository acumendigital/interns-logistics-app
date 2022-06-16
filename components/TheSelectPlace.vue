<template>
  <div class="select-place-container">
    <button @click="getSuggestedPlaces">Search places</button>
    <select>
        <option></option>
    </select>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name: "selectPlace",
    data(){
        return{
            suggestedPlaces: [],
            inputLocation: "lagos"
        }
    },
    methods:{
        async getSuggestedPlaces(){
            var config = {
                method: 'get',
                url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.inputLocation}&components=country:ng&radius=500&key=AIzaSyBBlFJRASRFySUX9F06Q4Z0sLc0eXaeKuI`,
                headers: { }
            };
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
        }
    }
}
</script>

<style>

</style>