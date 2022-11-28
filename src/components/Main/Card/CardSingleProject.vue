<template>
    <div class="col-12 d-flex flex-wrap project-container my-5">
        <img v-for="(project, index) in projects" :key="index" class="w-50 p-3" :src="project.img" :alt="project.text">
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