<template>
  <div class="empty" :style="[...styles]">
    <div class="img">
        <font-awesome-icon icon="folder-open" />
    </div>
    <div class="caption">
        <h2>{{ emptyCaption }}</h2>
    </div>
  </div>
</template>

<script>
export default {
    name: "emptyContainer",
    props:{
        emptyCaption: {
            type: String,
            default: "Oops, this place is empty"
        },
        styles:{
            type: Object
        }
    }
}
</script>

<style lang="scss">
    .empty{
        @include flex-center;
        flex-direction: column;
        gap: 50px;
        height: 80vh;
        color: grey;
        .img{
        svg{
            width: 50px;
            height: 50px;
        }
        }
        
        h2{
            font-size: 1.5rem;
            text-align: center;
        }
    }
</style>