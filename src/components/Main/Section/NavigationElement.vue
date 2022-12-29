<template>
  <div class="row justify-content-center mx-3 mx-md-0 big-margin-top">
    <div class="col-12 col-md-8 col-lg-6 nav-container d-flex px-2 py-2">

      <!-- Projects Section -->
      <div class="col-6 btn-container">
        <button class="text-uppercase border-0 px-4 py-3"
        @click="checkSelection(0), $emit('emit', section)" :class="{btnActive: section === 'projects'}">
          <a class="text-decoration-none">projects
          </a>
        </button>
      </div>

      <!-- Skills Section -->
      <div class="col-6 btn-container ps-2">
        <button class="text-uppercase border-0 px-4 py-3"
        @click="checkSelection(1), $emit('emit', section)" :class="{btnActive: section === 'skills'}">
          <a class="text-decoration-none">skills
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  // props: ['section'],

  data: function(){
    return {
      section: 'projects',
      bool: 0,
      check: 0,
    }
  },

  methods: {
    checkSelection(string){
      console.log(string);
      if (string != this.check) {
        this.bool = !this.bool;
      }

      // console.error(this.bool);
      
      if (this.bool == 0) {
        this.section = 'projects'
      } else {
        this.section = 'skills'
      }

      this.check = this.bool;
    }

  }
}
</script>

<style lang="scss" scoped>
@import "@/../styles/variables.scss";

.big-margin-top {
  margin-top: 6rem;
}

button {
  width: 100%;
  height: 100%;
  font-size: $normalFontSize;
  font-weight: $smallFontWeight;
  border-radius: $btnRadius;
  background-color: transparent;
}
.nav-container {
  border-radius: $navRadius;
  background-color: $secondaryColorBgLight;
}

.btn-container {
  a {
    color: $primaryColorText;
  }
}

.btnActive {
  background-color: $primaryColorBgLight;

  a {
    color: $primaryColorBrand;
  }
}

.dark .nav-container {
  background-color: $secondaryColorBgDark;
}

.dark .btn-container {
  a {
    color: $secondaryColorText;
  }
}

.dark .btnActive {
  background-color: $primaryColorBgDark;

  a {
    color: $primaryColorBrand;
  }
}
</style>