<template>
    <div class="wrapper">
        <Swiper
            init="false"
            :loop="true"
            :breakpoints="swiperBreakpoints"
            :centered-slides="false"
        >
            <SwiperSlide v-for="pet in pets" :key="pet.id">
                <Card :imgSrc="pet.img">{{ pet.name }}</Card>
            </SwiperSlide>
            <SwiperControls />
        </Swiper>
    </div>
</template>

<script setup>
import Card from '/src/Entites/Card'
import SwiperControls from '/src/Entites/SwiperControls'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import pets from '/public/content/pets.json'

const swiperBreakpoints = {
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
@import '/src/App/global.scss';

.swiper {
    position: relative;
    @media (min-width: $tablet) {
        padding-inline: 12px;
    }

    @media (min-width: $desktop) {
        padding-inline: 52px;
    }
}

.swiper-slide {
    width: 270px;
}
</style>
