<template>
    <div class="row justify-content-center mx-3 mx-md-0">
        <div class="col-12 d-flex flex-wrap project-container my-5">
            <img class="w-50 p-3" src="../../../assets/img/projects/deliveboo.png" alt="DeliveBoo Project">
            <img class="w-50 p-3" src="../../../assets/img/projects/deliveboo.png" alt="DeliveBoo Project">
            <img class="w-50 p-3" src="../../../assets/img/projects/deliveboo.png" alt="DeliveBoo Project">
            <img class="w-50 p-3" src="../../../assets/img/projects/deliveboo.png" alt="DeliveBoo Project">
        </div>
    </div>
</template>

<script>

export default {
    data: function(){
        return{
            projects:[
                {
                    img: require("../../../assets/img/projects/deliveboo.png"),
                    text: "DeliveBoo Project"
                },
                {
                    img: require("../../../assets/img/projects/boolzapp.png"),
                    text: "Boolzapp Project"
                },
                {
                    img: require("../../../assets/img/projects/discord.png"),
                    text: "Discord Project"
                },
                {
                    img: require("../../../assets/img/projects/spotify.png"),
                    text: "Spotify Project"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../../styles/variables.scss";

.project-container {
  img {
    border-radius: $projectRadius;
  }
}
</style>