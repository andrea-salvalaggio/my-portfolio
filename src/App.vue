<template>
  <div id="app" :class="(mode === 'dark') ? 'dark' : ''">
    <HeaderComponent/>
    <MainComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/Header/HeaderComponent.vue';
import MainComponent from './components/Main/MainComponent.vue';
import FooterComponent from './components/Footer/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },

  data: function(){
    return{
      mode: 'dark'
    }
  },
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
@import "../styles/variables.scss";

body {
  font-family: $bodyFont;
  color: $primaryColorText;
  background-color: $primaryColorBgLight;
}

.dark {
  background-color: $primaryColorBgDark;
  color: $secondaryColorText;
}
</style>
