<template>
    <div class="d-flex">
        
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
</style>