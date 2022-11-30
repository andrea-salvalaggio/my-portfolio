<template>
  <div class="container px-lg-5">
    <div class="row px-md-4 px-lg-5">
      <div class="col-12 d-flex justify-content-between align-items-center py-4 px-5">
        <div class="logo ps-lg-5">
          <a href="/">
            <img class="w-50" src="../../assets/img/logo.svg" alt="Personal Logo">
          </a>
        </div>
        <div class="icon pe-lg-5">
          <i class="ri-moon-line"></i>
        </div>
      </div>

      <HeroComponent/>
    </div>
  </div>
</template>

<script>
import HeroComponent from './Hero/HeroComponent.vue';

export default {
  components: {
    HeroComponent
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";
.icon {
  &:hover {
    color: $primaryColorBrand;
    cursor: pointer;
  }
}
</style>