<template>
    <div class="icon pe-lg-5">
        <i v-if="(mode = !mode)" class="ri-moon-line"
        @click="$emit('toggle')">
        </i>
        <i v-else class="ri-sun-line"
        @click="$emit('toggle')">
        </i>
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
  &:hover {
    color: $primaryColorBrand;
    cursor: pointer;
  }
}
</style>