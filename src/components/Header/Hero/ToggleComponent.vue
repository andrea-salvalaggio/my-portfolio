<template>
    <div class="icon pe-lg-5">
        <i class="ri-moon-line toggle"
        :checked="(mode === 'dark') ? 'checked' : false"
        @change="$emit('toggle')">
        {{ mode }}
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