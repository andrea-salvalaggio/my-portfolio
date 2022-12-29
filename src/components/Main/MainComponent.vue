<template>
  <div class="container px-lg-5">
    <NavigationElement :section="section" v-scroll-reveal.reset="{delay: 500}" @layout="$emit('layout')"/>
    <ProjectsElement :section="section" v-if="section === 'projects'" class="projects" v-scroll-reveal.reset="{delay: 550}"/>
    <SkillsElement :section="section" v-if="section === 'skills'" class="skills" v-scroll-reveal.reset="{delay: 550}"/>
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

  props: ['section']
}
</script>

<style>

</style>