<template>
  <div class="container-fluid p-0 m-0">
    <hr class="stroke-line m-0">
    <div class="container px-lg-5">
      <div class="row px-md-4 px-lg-5">
        <div class="col-12 d-flex justify-content-between align-items-center py-4 px-5">
          <div class="icon">
            <i class="ri-github-fill fs-5"></i>
            <i class="ri-linkedin-fill fs-5 ps-3"></i>
          </div>
          <div>
            <p class="copyright m-0">© Andrea Salvalaggio <span class="ps-1">2022</span></p>
          </div>
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

.icon {
  i:hover{
    color: $primaryColorBrand;
    cursor: pointer;
  }
}

.copyright{
  font-size: $smallFontSize;
  font-weight: $smallFontWeight;

  span{
    color: $primaryColorBrand;
  }
}

.stroke-line{
  border: 2px solid $secondaryColorBgLight;
}
</style>