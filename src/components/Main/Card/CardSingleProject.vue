<template>
    <div class="d-md-flex flex-md-wrap justify-content-center my-5 p-0">
        <div v-for="(project, index) in projects" :key="index" class="col-12 col-md-6 project-container">
            <div class="overlay-container">
                <div class="overlay-description p-lg-5">
                    <p class="text-uppercase m-0">{{ project.type }}</p>
                    <h2 class="pb-3">{{ project.title }}</h2>
                    <button class="btn text-uppercase text-white border-0 px-4 py-3">
                        <a class="text-decoration-none" :href="project.link" target="_blank">
                        {{ project.cta }}
                        <i class="ri-arrow-right-up-line align-top ps-1"></i>
                        </a>
                    </button>
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
                    type: "web app – ui/ux design",
                    title: "Deliveboo",
                    cta: "view on github",
                    link: "https://github.com/andrea-salvalaggio/laravel-deliveboo"
                },
                {
                    img: require("../../../assets/img/projects/boolzapp.png"),
                    text: "Boolzapp Project",
                    type: "web app",
                    title: "Boolzapp",
                    cta: "view on github",
                    link: "https://github.com/andrea-salvalaggio/vue-boolzapp"
                },
                {
                    img: require("../../../assets/img/projects/discord.png"),
                    text: "Discord Project",
                    type: "web design",
                    title: "Discord",
                    cta: "view on github",
                    link: "https://github.com/andrea-salvalaggio/htmlcss-discord"
                },
                {
                    img: require("../../../assets/img/projects/spotify.png"),
                    text: "Spotify Project",
                    type: "web app",
                    title: "Spotify",
                    cta: "view on github",
                    link: "https://github.com/andrea-salvalaggio/html-css-spotifyweb"
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

  img {
    width: 100%;
    height: 100%;
    border-radius: $projectRadius;
  }
}

.overlay-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 1.95rem);
  height: calc(100% - 1.95rem);
  background-color: $primaryColorOverlay;
  border-radius: $overlayRadius;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  .overlay-description {
    position: absolute;
    bottom: 0;
    padding: 2rem;

    p {
      font-size: $normalFontSize;
      font-weight: $normalFontWeight;
      color: $secondaryColorBrand;
    }

    h2 {
      font-size: $h2FontSize;
      font-weight: $bigFontWeight;
      color: $secondaryColorText;
    }

    button {
      font-size: $normalFontSize;
      font-weight: $smallFontWeight;
      border-radius: $btnRadius;
      background-color: $secondaryColorBrand;
      transition: transform 0.4s ease-in-out;

      a {
        color: $primaryColorBrand;
      }

      &:hover {
        transform: translateY(-0.8rem);
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .project-container {
    width: calc(100% / 2.5);
  }

  .overlay-container {
    .overlay-description {
      p {
        font-size: 1rem;
      }

      h2 {
        font-size: 2.6rem;
      }
    }
  }
}
</style>