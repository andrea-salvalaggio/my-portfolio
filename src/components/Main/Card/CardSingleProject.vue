<template>
    <div class="d-md-flex flex-md-wrap justify-content-center my-5 p-0">
        <div v-for="(project, index) in projects" :key="index" class="col-12 col-md-6 col-lg-5 project-container">
            <div class="overlay-container position-absolute top-50 start-50 translate-middle">
                <div class="overlay-description">
                    <p class="text-uppercase m-0">{{ project.type }}</p>
                    <h2>{{ project.title }}</h2>
                    <button>{{ project.cta }}</button>
                </div>
            </div>
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
                    text: "DeliveBoo Project",
                    type: "prova",
                    title: "Deliveboo",
                    cta: "view on github"
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
    position: relative;
    overflow: hidden;

    .overlay-description{
        position: absolute;
        bottom: 0;
        padding: 2rem;

        p{
            font-size: $normalFontSize;
            font-weight: $smallFontWeight;
            color: $secondryColorBrand;
        }

        h2{
            font-size: $h2FontSize;
            font-weight: $bigFontWeight;
            color: $secondaryColorText;
        }
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: $projectRadius;
    }
}

.overlay-container{
    width: calc(100% - 1.9rem);
    height: calc(100% - 1.9rem);
    background-color: $primaryColorOverlay;
    border-radius: $overlayRadius;
}

</style>