<template>
  <div class="row justify-content-center mx-3 mx-md-0 big-margin-top">
    <div class="col-12 col-md-8 col-lg-6 nav-container d-flex px-2 py-2">
      <div class="col-6 btn-container">
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../../../styles/variables.scss";

.big-margin-top {
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

      &:hover {
        background-color: $primaryColorBgLight;

        a {
          color: $primaryColorBrand;
        }
      }
    }
  }
}

.dark .nav-container{
  background-color: $secondaryColorBgDark;
  transition: background-color 0.3s ease-in-out;
}

.dark .btn-container {
  button {
    background-color: $primaryColorBgDark;
    transition: background-color 0.3s ease-in-out;

    a {
      color: $primaryColorBrand;
      transition: background-color 0.3s ease-in-out;
    }
  }

  &:nth-child(2) {
    button {
      background-color: $secondaryColorBgDark;
      transition: background-color 0.3s ease-in-out;

      a {
        color: $secondaryColorText;
        transition: background-color 0.3s ease-in-out;
      }

      &:hover {
        background-color: $primaryColorBgDark;
        transition: background-color 0.3s ease-in-out;

        a {
          color: $primaryColorBrand;
          transition: background-color 0.3s ease-in-out;
        }
      }
    }
  }
}
</style>