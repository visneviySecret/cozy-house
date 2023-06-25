<template>
    <div class="header-wrapper">
        <header>
            <div class="logo">
                <div class="title">Cozy House</div>
                <div class="sub-title">Shelter for pets in Boston</div>
            </div>
            <MenuBurger :isActive="isActive" @click="isActive = !isActive" />
            <NavMenu :class="{ active: isActive }" />
        </header>
    </div>
</template>

<script setup>
import NavMenu from '../Features/NavMenu.vue'
import MenuBurger from '../Entites/MenuBurger.vue'
import { ref } from 'vue'
const isActive = ref(false)
</script>

<style lang="scss" scoped>
@import '/src/App/global.scss';
.header-wrapper {
    position: absolute;
    width: 100%;
}

header {
    position: relative;
    padding: clamp(30px, 3.9vw, 60px) clamp(10px, 4vw, 40px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
}
.title {
    margin-bottom: 10px;
}
.burger {
    width: 40px;
    @media (min-width: $tablet) {
        display: none;
    }
}
</style>
