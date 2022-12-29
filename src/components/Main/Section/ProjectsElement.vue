<template>
    <div class="row justify-content-center mx-3 mx-md-0 mx-lg-4">
        <CardSingleProject :section="section" v-scroll-reveal.reset="{delay: 300}"/>
    </div>
</template>

<script>
import CardSingleProject from './CardSingleProject.vue';

export default {
    components: {
        CardSingleProject
    },

    props: ['section']
}
</script>

<style>

</style>