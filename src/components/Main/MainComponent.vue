<template>
  <div class="container px-lg-5 big-margin-top">
    <div class="row justify-content-center mx-3 mx-md-0">
      <div class="col-12 col-md-8 col-lg-6 nav-container d-flex px-2 py-2">
        <div class="col-6 btn-container pe-2">
          <button class="btn text-uppercase border-0 px-4 py-3">
            <a class="text-decoration-none">projects
            </a>
          </button>
        </div>
        <div class="col-6 btn-container ps-2">
          <button class="btn text-uppercase border-0 px-4 py-3">
            <a class="text-decoration-none">skills
            </a>
          </button>
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

.big-margin-top{
  margin-top: 6rem;
}
.nav-container {
  border-radius: $navRadius;
  background-color: $secondaryColorBgLight;
}

.btn-container {
  button {
    width: 100%;
    font-size: $normalFontSize;
    font-weight: $smallFontWeight;
    border-radius: $btnRadius;
    background-color: $primaryColorBgLight;

    a {
      color: $primaryColorBrand;
    }
  }

  &:nth-child(2) {
    button {
      background-color: $secondaryColorBgLight;

      a {
        color: $primaryColorText;
      }
    }
  }
}
</style>