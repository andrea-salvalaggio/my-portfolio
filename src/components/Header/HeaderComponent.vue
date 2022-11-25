<template>
  <div class="container">
    <div class="row px-3">
      <div class="col-12 d-flex justify-content-between align-items-center py-4 px-5">
        <div class="logo">
          <img class="w-50" src="../../assets/img/logo.svg" alt="Personal Logo">
        </div>
        <div class="icon">
          <i class="ri-moon-line"></i>
        </div>
      </div>

      <HeroElement/>
    </div>
  </div>
</template>

<script>
import HeroElement from './Hero/HeroElement.vue';

export default {
  components: {
    HeroElement
  }
}
</script>

<style lang="scss" scoped>

</style>