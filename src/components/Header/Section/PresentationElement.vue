<template>
    <div class="col-12 d-flex flex-column align-items-center justify-content-center">

      <!-- Profile Image -->
      <div class="profile-container" v-scroll-reveal.reset="{delay: 300}">
        <!-- <img src="../../../assets/img/profile-pic-light.png" alt="Profile Image"> -->
      </div>

      <!-- Title -->
      <div class="text-center py-4 py-lg-3" v-scroll-reveal.reset="{delay: 350}">
        <h2>Hey! I’m Andrea<br>Full Stack Web Developer<br> Based in Padua, Italy
        </h2>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/../styles/variables.scss";

.profile-container {
  width: 120px;
  height: 120px;
  background-image: url(@/assets/img/profile-pic-light.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.dark .profile-container {
  width: 120px;
  height: 120px;
  background-image: url(@/assets/img/profile-pic-dark.png);
  background-size: cover;
  background-repeat: no-repeat;
}

h2 {
  font-size: $h2FontSize;
  font-weight: $bigFontWeight;

  @media (max-width: 576px) {
    font-size: 2.4rem;
  }

  @media (min-width: 992px) {
    font-size: 2.6rem;
  }
}
</style>