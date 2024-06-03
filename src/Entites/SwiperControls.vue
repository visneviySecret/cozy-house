<template>
    <div class="buttons-wrapper">
        <RoundButton @click="swiper.slidePrev()"
            ><NuxtImg src="/assets/ui-icons/Arrow.svg"
        /></RoundButton>
        <RoundButton @click="swiper.slideNext()"
            ><NuxtImg src="/assets/ui-icons/Arrow.svg" class="rotate"></NuxtImg
        ></RoundButton>
    </div>
</template>

<script setup>
import RoundButton from '@/src/Shared/RoundButton'
import { useSwiper } from 'swiper/vue'

const swiper = useSwiper()
</script>

<style lang="scss" scoped>
@import '@/src/App/global.scss';
.buttons-wrapper {
    width: 184px;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-between;
    z-index: 1;

    @media (min-width: $tablet) {
        position: absolute;
        top: 0;
        left: 0;
        top: 40%;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}
.rotate {
    transform: rotate(180deg);
}
</style>
