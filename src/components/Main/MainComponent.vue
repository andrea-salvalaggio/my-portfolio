<template>
  <div class="container px-lg-5">
    <NavigationElement :section="section"/>
    <ProjectsElement :section="section" v-if="section === 'projects'" class="projects"/>
    <SkillsElement :section="section" v-if="section === 'skills'" class="skills"/>
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