<template>
    <div class="row justify-content-center mx-3 mx-md-0 mx-lg-4">
        <CardSingleSkill :section="section" v-scroll-reveal.reset="{delay: 300}"/>
    </div>
</template>

<script>
import CardSingleSkill from './CardSingleSkill.vue';

export default {
  components: {
    CardSingleSkill
  },

  props: ['section']
}
</script>

<style>

</style>