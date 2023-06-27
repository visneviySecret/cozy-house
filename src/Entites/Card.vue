<template>
    <div class="card">
        <img :src="imgSrc" v-motion-fade />

        <h4 v-motion-fade>
            <slot />
        </h4>

        <Button :theme="'outlined'" @click="handleClick">Learn more</Button>
    </div>
</template>

<script setup>
import Button from '@/src/shared/Button'
const { url, imgSrc, handleClick } = defineProps([
    'url',
    'imgSrc',
    'handleClick',
])
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    margin-inline: auto;
    border-radius: 9px;
    background: var(--color-light-s);
    transition: background-color 0.1s;

    & > * {
        margin-bottom: 30px;
    }

    &:hover {
        background: var(--color-light-xl);
    }
}
img {
    object-fit: fill;
}
</style>
