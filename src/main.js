import Vue from 'vue'
import App from './App.vue'
import 'remixicon/fonts/remixicon.css'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1000,
  scale: 1,
  distance: '80px',
  mobile: false
});

new Vue({
  render: h => h(App),
}).$mount('#app')
