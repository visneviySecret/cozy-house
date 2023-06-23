<template>
    <div class="card">
        <nuxt-img src="/pets-katrine.png" />

        <h4>Katrine</h4>

        <Button :theme="'outlined'" :onclick="handleClick">
            <a>Learn more</a>
        </Button>
    </div>
</template>

<script setup>
import Button from '/src/shared/Button'
const props = defineProps(['url'])
const handleClick = () => {
    window.open(props.url, '_blank')
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-dark-3xl);
    width: 270px;
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
</style>
