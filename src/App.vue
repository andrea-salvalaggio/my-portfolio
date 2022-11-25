<template>
  <div id="app">
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
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
@import "../styles/variables.scss";

  body{
    font-family: $bodyFont;
  }

</style>
