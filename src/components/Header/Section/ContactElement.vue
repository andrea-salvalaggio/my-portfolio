<template>
    <div class="col-12 d-lg-flex justify-content-center text-center pt-2">

      <!-- Download CV -->
      <div class="btn-container pe-lg-2 px-md-5">
        <a class="text-decoration-none text-reset" href="https://drive.google.com/file/d/1-1MjQ4YnbzlUrKQYh7FwioFZe9VDRS0g/view?usp=sharing" target="_blank">
          <button class="btn-shadow text-uppercase text-white border-0 p-4 w-100" v-scroll-reveal.reset="{delay: 400}">download cv
            <i class="ri-download-line align-middle ps-2"></i>
          </button>
        </a>
      </div>

      <!-- Contact Me -->
      <div class="btn-container ps-lg-2 mt-4 mt-lg-0 px-md-5">
        <a class="text-decoration-none text-reset" href="mailto:andrea.salvalaggio95@gmail.com?subject=Richiesta incontro">
          <button class="text-uppercase border-0 p-4 w-100" v-scroll-reveal.reset="{delay: 400}">contact me
            <i class="ri-mail-line align-bottom ps-2"></i>
          </button>
        </a>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "@/../styles/variables.scss";

.btn-container {
  // transition: transform 0.4s ease-in-out;

  button {
    font-size: 16px;
    font-weight: $smallFontWeight;
    border-radius: $btnRadius;
    background-color: $primaryColorBrand;
    letter-spacing: .5px;
    transition: .3s;

    &:hover {
      background-color: $primaryColorHover;
      // transform: translateY(-0.8rem);
    }
  }

  &:nth-child(2) {
    button {
      color: $primaryColorBrand;
      background-color: $secondaryColorBgLight;
      transition: .3s;

      &:hover {
        background-color: $secondaryColorHover;
      }
    }
  }
}

.btn-shadow {
  box-shadow: $primaryColorShadowLight;
}
.dark .btn-container {
  &:nth-child(2) {
    button {
      background-color: $secondaryColorBgDark;
      transition: background-color 0.2s ease-in-out;

      &:hover{
        background-color: $quaternaryColorHover;
      }
    }
  }
}

.dark .btn-shadow {
  box-shadow: $primaryColorShadowDark;
}
</style>