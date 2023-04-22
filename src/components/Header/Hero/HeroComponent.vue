<template>
  <div class="px-4 px-lg-0">
    <PresentationElement/>
    <ContactElement/>
  </div>
</template>

<script>
import PresentationElement from '../Section/PresentationElement.vue';
import ContactElement from '../Section/ContactElement.vue';

export default {
  components: {
    PresentationElement,
    ContactElement
  }
}
</script>

<style>

</style>