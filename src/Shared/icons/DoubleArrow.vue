<template>
    <svg
        width="25"
        height="11"
        viewBox="0 0 25 11"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ disabled: isDisabled }"
    >
        <path
            d="M10.0055 6.08789L0.972265 10.7852V9.44727L8.48203 5.53125L0.972265 1.625V0.287109L10.0055 4.98438V6.08789ZM24.0766 6.08789L15.0434 10.7852V9.44727L22.5531 5.53125L15.0434 1.625V0.287109L24.0766 4.98438V6.08789Z"
        />
    </svg>
</template>

<script setup>
const { isDisabled } = defineProps(['isDisabled'])
</script>

<style lang="scss" scoped>
.disabled {
    fill: var(--color-dark-s);
}
</style>
