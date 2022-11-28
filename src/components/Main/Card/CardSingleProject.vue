<template>
    <div class="d-md-flex flex-md-wrap my-5 p-0">
        <div v-for="(project, index) in projects" :key="index" class="col-12 col-md-6 project-container">
            <img :src="project.img" :alt="project.text" class="p-3">
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
        width: 100%;
        border-radius: $projectRadius;
    }
}

// @media screen and (min-width: 768px) {
//     .project-container{
//         width: calc(100% / 2);
//     }
// }

</style>