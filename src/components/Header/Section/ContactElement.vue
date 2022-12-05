<template>
    <div class="col-12 d-flex justify-content-center text-center pt-2">

      <!-- Download CV -->
      <div class="btn-container pe-2">
        <a class="text-decoration-none text-reset" href="https://drive.google.com/file/d/1-1MjQ4YnbzlUrKQYh7FwioFZe9VDRS0g/view?usp=sharing" target="_blank">
          <button class="btn-shadow text-uppercase text-white border-0 px-4 py-3" v-scroll-reveal.reset="{delay: 400}">download cv
            <i class="ri-download-line align-middle ps-1"></i>
          </button>
        </a>
      </div>

      <!-- Contact Me -->
      <div class="btn-container ps-2">
        <a class="text-decoration-none text-reset" href="mailto:andrea.salvalaggio95@gmail.com?subject=Richiesta incontro">
          <button class="text-uppercase border-0 px-4 py-3" v-scroll-reveal.reset="{delay: 400}">contact me
            <i class="ri-mail-line align-top ps-1"></i>
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
    font-size: $normalFontSize;
    font-weight: $smallFontWeight;
    border-radius: $btnRadius;
    background-color: $primaryColorBrand;

    &:hover {
      background-color: $primaryColorHover;
      // transform: translateY(-0.8rem);
    }
  }

  &:nth-child(2) {
    button {
      color: $primaryColorBrand;
      background-color: $secondaryColorBgLight;

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