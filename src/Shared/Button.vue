<template>
    <button @click="handler" :class="dynamicClass">
        <slot />
    </button>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['handler', 'theme'])
const dynamicClass = props.theme || 'primary'
</script>

<style lang="scss" scoped>
button {
    height: 56px;
    width: 212px;
    padding: 15px 45px;
    border-radius: 100px;
    letter-spacing: 1.02px;
    line-height: 130%;
    background-color: white;

    &:hover {
        background-color: var(--color-primary-light);
        cursor: pointer;
        transition: background-color 0.3s;
    }
}
.primary {
    border: none;
    background-color: var(--color-primary);
}
.outlined {
    border: 2px solid #f1cdb3;
}
</style>
