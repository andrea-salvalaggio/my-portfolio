<template>
  <div class="container px-lg-5">
    <div class="row px-md-4 px-lg-5">
      <div class="col-12 d-flex justify-content-between align-items-center py-4 px-5">
        <div class="ps-lg-5">
          <a href="/">
            <img class="logo w-50" src="../../assets/img/logo.svg" alt="Personal Logo">
          </a>
        </div>

        <!-- Icon for Dark Mode -->
        <ToggleComponent :mode="mode" @toggle="$emit('toggle')"/>
      </div>

      <HeroComponent :mode="mode"/>
    </div>
  </div>
</template>

<script>
import HeroComponent from './Hero/HeroComponent.vue';
import ToggleComponent from './Hero/ToggleComponent.vue';

export default {
  components: {
    HeroComponent,
    ToggleComponent
  },

  props: ['mode']
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.dark .logo {
  filter: invert(1);
}
</style>