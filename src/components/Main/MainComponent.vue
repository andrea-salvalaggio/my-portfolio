<template>
  <div class="container px-lg-5">
    <NavigationElement v-scroll-reveal.reset="{delay: 500}" @emit="callEmit"/>
    <ProjectsElement v-if="section === 'projects'" class="projects" v-scroll-reveal.reset="{delay: 550}"/>
    <SkillsElement v-if="section === 'skills'" class="skills" v-scroll-reveal.reset="{delay: 550}"/>
  </div>
</template>

<script>
import ProjectsElement from './Section/ProjectsElement.vue';
import NavigationElement from './Section/NavigationElement.vue';
import SkillsElement from './Section/SkillsElement.vue';

export default {
  components: {
    ProjectsElement,
    NavigationElement,
    SkillsElement
  },

  data: function(){
    return {
      section: 'projects',
    }
  },

  // props: ['section'],

  methods: {
    callEmit(needle){
      console.warn(needle)
      this.section = needle
    }
  },

  // created() {
  //   console.log(this.section)
  // }
}
</script>

<style>

</style>