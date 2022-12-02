<template>
  <div class="container px-lg-5">
    <NavigationElement/>
    <ProjectsElement/>
    <SkillsElement class="d-none"/>
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
  }
}
</script>

<style>

</style>