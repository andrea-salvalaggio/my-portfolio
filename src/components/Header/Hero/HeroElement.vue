<template>
  <div>
    <div class="col-12 d-flex flex-column align-items-center justify-content-center">
      <div class="profile-container">
        <img src="../../../assets/img/profile-pic-light.png" alt="Profile Image">
      </div>
      <div class="text-center py-3">
        <h2>Hey! I’m Andrea<br>Full Stack Web Developer<br> Based in Padua, Italy
        </h2>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center text-center pt-2">
      <div class="btn-container pe-2">
        <button class="btn btn-shadow text-uppercase text-white border-0 px-4 py-3">
          <a class="text-decoration-none text-reset" href="https://drive.google.com/file/d/1-1MjQ4YnbzlUrKQYh7FwioFZe9VDRS0g/view?usp=sharing" target="_blank">download cv
          <i class="ri-download-line align-middle ps-1"></i>
          </a>
        </button>
      </div>
      <div class="btn-container ps-2">
        <button class="btn text-uppercase border-0 px-4 py-3">
          <a class="text-decoration-none text-reset" href="mailto:andrea.salvalaggio95@gmail.com?subject=Richiesta incontro">contact me
          <i class="ri-mail-line align-top ps-1"></i>
          </a>
        </button>
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

.profile-container {
  width: 120px;

  img {
    width: 100%;
    height: 100%;
  }
}

.btn-container {
  transition: transform 0.4s ease-in-out;

  button {
    font-size: $normalFontSize;
    font-weight: $normalFontWeight;
    border-radius: $btnRadius;
    background-color: $primaryColorBrand;
  }

  &:nth-child(2) {
    button {
      color: $primaryColorBrand;
      background-color: $secondaryColorBgLight;
    }
  }

  &:hover{
    transform: translateY(-0.8rem);
  }
}

.btn-shadow {
  box-shadow: $primaryColorShadowLight;
}

h2 {
  font-size: $h2FontSize;
  font-weight: $bigFontWeight;
}
</style>