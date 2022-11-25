<template>
  <div class="col-12 d-flex flex-column align-items-center justify-content-center">
    <div class="profile-container">
      <img src="../../../assets/img/profile-pic-light.png" alt="Profile Image">
    </div>
    <div class="title-container text-center py-3">
      <h2>Hey! I’m Andrea<br>Full Stack Web Developer<br> Based in Padua, Italy
      </h2>
    </div>
    <div class="d-md-flex">
      <div class="col-12">
        bottone 1
      </div>
      <div class="col-12">
        bottone 2
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../../../styles/variables.scss";

.profile-container{
  width: 120px;

  img{
    width: 100%;
    height: 100%;
  }
}

h2{
  font-size: $h2FontSize;
  font-weight: $bigFontWeight;
}
</style>