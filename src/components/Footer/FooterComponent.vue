<template>
  <div class="container-fluid p-0 m-0">

    <!-- Line -->
    <hr class="m-0" v-scroll-reveal.reset="{delay: 100}">
    <div class="container px-lg-5">
      <div class="row px-md-4 px-lg-5 mx-lg-5">
        <div class="col-12 d-md-flex justify-content-between align-items-center py-4 px-5">

          <!-- Social -->
          <div class="icon ps-lg-5 text-center" v-scroll-reveal.reset="{delay: 150}">
            <a class="text-decoration-none text-reset" href="https://github.com/andrea-salvalaggio" target="_blank">
              <i class="ri-github-fill fs-5"></i>
            </a>
            <a class="text-decoration-none text-reset" href="https://www.linkedin.com/in/andrea-salvalaggio/" target="_blank">
              <i class="ri-linkedin-fill fs-5 ps-3"></i>
            </a>
          </div>

          <!-- Copyright -->
          <div class="pe-lg-5 pt-2 pt-lg-0 text-center">
            <p class="copyright m-0" v-scroll-reveal.reset="{delay: 150}">©<span class="ps-1">2023</span>
              Built by Andrea Salvalaggio
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style lang="scss" scoped>
@import "@/../styles/variables.scss";

hr {
  border: 2px solid $secondaryColorBgLight;
}

.dark hr {
  border: 2px solid $secondaryColorBgDark;
}

.icon {
  i {
    transition: .3s;

    &:hover{
      color: $primaryColorBrand;
      cursor: pointer;
    }
  }
}

.copyright {
  font-size: 13px;
  font-weight: $smallerFontWeight;

  span {
    color: $primaryColorBrand;
  }
  
  @media (max-width: 576px){
    font-size: 13px;
  }
}
</style>