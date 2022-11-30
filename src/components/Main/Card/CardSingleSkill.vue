<template>
    <div class="col-12 col-md-6 d-flex flex-column align-items-center">
        <h2>Frontend</h2>
        <div class="col-12 col-md-6 d-flex flex-wrap text-center pt-3">
            <div v-for="(frontSkill, index) in frontSkills" :key="index" class="d-flex flex-column align-items-center justify-content-center icon-container m-2 py-3">
                <img :src="frontSkill.icon" :alt="frontSkill.title">
                <p class="text-uppercase m-0 pt-2">{{ frontSkill.title }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            frontSkills:[
                {
                    icon: require("../../../assets/img/icons/html.svg"),
                    title: "html",
                },
                {
                    icon: require("../../../assets/img/icons/css.svg"),
                    title: "css",
                },
                {
                    icon: require("../../../assets/img/icons/sass.svg"),
                    title: "sass",
                },
                {
                    icon: require("../../../assets/img/icons/bootstrap.svg"),
                    title: "bootstrap",
                },
                {
                    icon: require("../../../assets/img/icons/javascript.svg"),
                    title: "javascript",
                },
                {
                    icon: require("../../../assets/img/icons/vuejs.svg"),
                    title: "vuejs",
                },
                {
                    icon: require("../../../assets/img/icons/dart.svg"),
                    title: "dart",
                },
                {
                    icon: require("../../../assets/img/icons/flutter.svg"),
                    title: "flutter",
                },
            ],

            backSkills:[
                {
                    icon: require("../../../assets/img/icons/php.svg"),
                    title: "php",
                },
                {
                    icon: require("../../../assets/img/icons/laravel.svg"),
                    title: "laravel",
                },
                {
                    icon: require("../../../assets/img/icons/mysql.svg"),
                    title: "mysql",
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../../styles/variables.scss";

h2 {
  font-size: $h2FontSize;
  font-weight: $normalFontWeight;
}

.icon-container {
  width: calc((100% / 3) - 1rem);
  background-color: $secondaryColorBgLight;
  border-radius: $skillRadius;

  img{
    width: 45px;
  }

  p {
    font-size: $normalFontSize;
    font-weight: $smallFontWeight;
  }
}
</style>