<template>
    <div class="header-container" :class="{ alternative: !isAlternative }">
        <header>
            <div
                class="logo"
                :class="{ active: isActive, alternative: !isAlternative }"
            >
                <div class="title">Cozy House</div>
                <div class="sub-title">Shelter for pets in Boston</div>
            </div>
            <MenuBurger
                @click="toggleActive"
                :class="{ active: isActive, alternative: !isAlternative }"
            />
            <NavMenu
                :class="{ active: isActive }"
                @click="resetMenu"
                :isActive="isActive"
                :isAlternative="isAlternative"
            />
        </header>
    </div>
</template>

<script setup>
import NavMenu from '../Features/NavMenu.vue'
import MenuBurger from '../Entites/MenuBurger.vue'
import { ref } from 'vue'
import useToggleScroll from '/src/shared/utils/useStopScroll'
const { isAlternative } = defineProps(['isAlternative'])
const { toggleScroll, enableScroll } = useToggleScroll()
const isActive = ref(false)

const toggleActive = () => {
    isActive.value = !isActive.value
    toggleScroll()
}

const resetMenu = () => {
    isActive.value = false
    enableScroll()
}
</script>

<style lang="scss" scoped>
@import '/src/App/global.scss';
.header-container {
    width: 100%;
    position: absolute;
    &.alternative {
        position: static;
    }
}

header {
    position: relative;
    display: flex;
    padding: clamp(30px, 3.9vw, 60px) clamp(10px, 4vw, 40px);
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    max-width: 1200px;
    margin-inline: auto;
}
.alternative > * {
    color: $color-dark-l;
}
.active.logo > .title {
    color: $color-primary;
}
.active.logo > .sub-title {
    color: $color-light-xl;
}
.title {
    margin-bottom: 10px;
}
.burger {
    width: 30px;
    height: 20px;
    @media (min-width: $tablet) {
        display: none;
    }
}
</style>
