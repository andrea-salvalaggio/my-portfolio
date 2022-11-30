<template>
  <div class="container px-lg-5">
    <NavigationElement/>
    <ProjectsElement/>
  </div>
</template>

<script>
import ProjectsElement from './Section/ProjectsElement.vue';
import NavigationElement from './Section/NavigationElement.vue';

export default {
  components: {
    ProjectsElement,
    NavigationElement
  }
}
</script>

<style lang="scss" scoped>

</style>