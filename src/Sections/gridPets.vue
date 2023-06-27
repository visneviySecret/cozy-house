<template>
    <section>
        <div class="container">
            <h3 v-motion-fade>
                Our friends who <br />
                are looking for a house
            </h3>
            <PetsGridSwiper
                class="swiper"
                :breakpoints="breakpoints"
                :pets="pets"
            />
        </div>
    </section>
</template>

<script setup>
import PetsGridSwiper from '@/src/Features/PetsGridSwiper'
import pets from '@/public/content/pets.json'

const breakpoints = {
    300: {
        slidesPerView: 1,
        spaceBetween: 40,
        grid: {
            rows: 3,
            fill: 'row',
        },
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
        grid: {
            rows: 3,
            fill: 'row',
        },
    },
    1280: {
        slidesPerView: 4,
        spaceBetween: 40,
        grid: {
            rows: 2,
            fill: 'row',
        },
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
    margin-bottom: clamp(42px, 8vw, 60px);
    @media (max-width: $mobile) {
        font-size: 20px;
    }
}
</style>
