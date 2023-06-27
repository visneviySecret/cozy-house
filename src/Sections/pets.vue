<template>
    <section id="pets">
        <div class="container">
            <h3>
                Our friends who <br />
                are looking for a house
            </h3>
            <PetsSwiper class="swiper" :breakpoints="breakpoints" />
            <Button @click="navigateTo('/pets')">Get to know the rest</Button>
        </div>
    </section>
</template>

<script setup>
import Button from '@/src/shared/Button'
import PetsSwiper from '@/src/Features/PetsSwiper'
const breakpoints = {
    320: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    1280: {
        slidesPerView: 3,
        spaceBetween: 90,
    },
}
</script>

<style lang="scss" scoped>
@import '@/src/App/global.scss';

section {
    background: $color-light-l;
}

h3 {
    text-align: center;
    @media (max-width: $mobile) {
        font-size: 20px;
    }
}
.swiper {
    padding-block: clamp(42px, 8vw, 60px);
}
</style>
