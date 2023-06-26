<template>
    <button :class="[dynamicClass, { disabled: isDisabled }]">
        <div class="content">
            <slot />
        </div>
    </button>
</template>

<script setup>
import { defineProps } from 'vue'
const { theme, isDisabled } = defineProps(['theme', 'isDisabled'])
const dynamicClass = theme || 'outlined'
</script>

<style lang="scss" scoped>
button {
    display: flex;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid var(--color-primary);
    align-items: center;
    justify-content: space-around;
    transition: border-radius 0.3s ease-in-out;

    &:hover {
        background-color: var(--color-primary-light);
        cursor: pointer;
        transition: background-color 0.3s;
    }
}
.primary {
    border: none;
    background-color: var(--color-primary);
    &:hover {
        background-color: var(--color-primary);
    }
}
.outlined {
    border-color: var(--color-primary);
}
.disabled {
    color: var(--color-dark-s);
    border-color: var(--color-dark-s);
    &:hover {
        cursor: default;
        background-color: transparent;
    }
}

.content {
    line-height: 115%;
    letter-spacing: 1.2px;
}
</style>
