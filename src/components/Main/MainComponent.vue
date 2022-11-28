<template>
  <div class="container px-lg-5 mt-5">
    <div class="row justify-content-center mx-3 mx-md-0">
      <div class="col-12 col-md-8 col-lg-6 nav-container d-flex px-2 py-2 bg-dark">
        <div class="col-6 btn-container pe-2">
          <button class="btn text-uppercase text-white border-0 px-4 py-3">projects</button>
        </div>
        <div class="col-6 btn-container ps-2">
          <button class="btn text-uppercase text-white border-0 px-4 py-3">skills</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.nav-container{
  border-radius: $navRadius;
}

.btn-container {
  button {
    width: 100%;
    font-size: $normalFontSize;
    font-weight: $smallFontWeight;
    border-radius: $btnRadius;
    background-color: $primaryColorBrand;
  }

  &:nth-child(2) {
    button {
      color: $primaryColorBrand;
      background-color: $secondaryColorBgLight;
    }
  }
}
</style>