<template>
    <div class="col-12 d-flex flex-column align-items-center justify-content-center">
      <div class="profile-container">
        <!-- <img src="../../../assets/img/profile-pic-light.png" alt="Profile Image"> -->
      </div>
      <div class="text-center py-3">
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
@import '../../../../styles/variables.scss';
.profile-container {
  width: 120px;
  height: 120px;
  background-image: url(@/assets/img/profile-pic-light.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.dark .profile-container{
  width: 120px;
  height: 120px;
  background-image: url(@/assets/img/profile-pic-dark.png);
  background-size: cover;
  background-repeat: no-repeat;
}

h2 {
  font-size: $h2FontSize;
  font-weight: $bigFontWeight;
}

@media screen and (min-width: 992px) {
  h2{
    font-size: 2.6rem;
  }
}
</style>