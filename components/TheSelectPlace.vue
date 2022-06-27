<template>
  <div class="select-place-container">
  </div>
</template>

<script>
export default {
    name: "selectPlace",
    props:{
        inputRef:{
            require: true,
            type: String
        }
    },
    data(){
        return{
            suggestedPlaces: [],
            inputLocation: "lagos"
        }
    },
    async mounted(){
        const options = {
                componentRestrictions: { country: "ng" },
                fields: ["address_components"],
                strictBounds: false,
                types: ["address"],
            };
        const service = await new google.maps.places.Autocomplete(this.$parent.$refs.inputRef, options)
        console.log(service, this.$parent.$refs.inputRef, inputRef);
    },
    // methods:{
    //     getSuggestedPlaces(){
    //         const options = {
    //             componentRestrictions: { country: "ng" },
    //             fields: ["address_components"],
    //             strictBounds: false,
    //             types: ["address"],
    //         };
    //        const service = new google.maps.places.Autocomplete(this.inputLocation, options)
    //        console.log(service);
    //     }
    // }
}
</script>

<style>

</style>