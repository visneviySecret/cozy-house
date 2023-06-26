<template>
    <transition>
        <div class="menu-wrapper">
            <nav class="menu">
                <NuxtLink
                    v-for="link in links"
                    :key="link.title"
                    :to="link.url"
                    :class="{
                        alternative: isAlternative,
                        isActive: $route.path === link.url,
                    }"
                >
                    {{ link.title }}</NuxtLink
                >
            </nav>
        </div>
    </transition>
</template>

<script setup>
const { isAlternative } = defineProps(['isAlternative'])
const links = [
    {
        title: 'About the shelter',
        url: '/',
    },
    {
        title: 'Our pets',
        url: '/pets',
    },
    {
        title: 'Help the shelter',
        url: '/#helping',
    },
    {
        title: 'Contacts',
        url: '#footer',
    },
]
</script>

<style lang="scss" scoped>
@import '/src/App/global.scss';
.menu-wrapper {
    position: fixed;
    inset: 0;
    display: none;
    background-color: $color-dark-3xl;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    text-align: center;

    &.active {
        opacity: 1;
        display: block;
    }

    @media (max-width: $tablet) {
        height: 100vh;
        width: 100vw;
        & > nav > a {
            font-size: 32px;
            color: $color-light-s;
        }
    }

    @media (min-width: $tablet) {
        display: block;
        opacity: 1;
        background-color: transparent;
        position: static;
    }
}

.isActive {
    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background: $color-primary;
        transition: width 0.3s;
    }
}

.menu {
    display: block;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    gap: 43px;

    @media (max-width: $tablet) {
        translate: -50% -50%;
    }
    @media (min-width: $tablet) {
        position: static;

        flex-direction: row;
        gap: 35px;
    }
}
</style>
