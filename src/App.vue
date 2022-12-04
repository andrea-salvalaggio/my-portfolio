<template>
  <div id="app" :class="mode">
    <HeaderComponent :mode="mode" @toggle="toggle"/>
    <MainComponent :mode="mode" :section="section"/>
    <FooterComponent :mode="mode"/>
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
      mode: 'light',
      section: 'projects',
    }
  },

  methods: {
    toggle(){
      if (this.mode === "dark"){
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  }
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
  transition: background-color 0.2s ease-in-out;
}
</style>
