<template>
    <div class="icon pe-lg-5">
        <i class="ri-moon-line"
        :checked="(mode === 'dark') ? 'checked' : false"
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