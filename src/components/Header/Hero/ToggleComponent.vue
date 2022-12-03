<template>
    <div @click="$emit('toggle')" class="icon pe-lg-5">
      <!-- <i v-if="(mode = !mode)" class="ri-moon-line"
      @click="$emit('toggle')">
      </i>
      <i v-else class="ri-sun-line"
      @click="$emit('toggle')">
      </i> -->
    </div>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style lang="scss" scoped>
@import "@/../styles/variables.scss";

.icon {
  width: 18px;
  height: 18px;
  background-image: url(@/assets/img/icons/dark-mode.svg);
  background-repeat: no-repeat;
  background-size: contain;

  &:hover {
    width: 18px;
    height: 18px;
    background-image: url(@/assets/img/icons/dark-mode-hover.svg);
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
  }
}

.dark .icon {
  width: 18px;
  height: 18px;
  background-image: url(@/assets/img/icons/light-mode.svg);
  background-repeat: no-repeat;
  background-size: contain;
  filter: invert(1);

  &:hover {
    width: 18px;
    height: 18px;
    background-image: url(@/assets/img/icons/light-mode-hover.svg);
    background-repeat: no-repeat;
    background-size: contain;
    filter: none;
  }
}
</style>