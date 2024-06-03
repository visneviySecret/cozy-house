<template>
    <div class="buttons-wrapper">
        <RoundButton
            @click="swiper.slideTo(0)"
            class="rotate"
            :isDisabled="swiper.activeIndex === 0"
            ><DoubleArrow :isDisabled="swiper.activeIndex === 0" />
        </RoundButton>
        <RoundButton
            @click="swiper.slidePrev()"
            class="rotate"
            :isDisabled="swiper.activeIndex === 0"
            ><SingleArrow :isDisabled="swiper.activeIndex === 0" />
        </RoundButton>
        <RoundButton :theme="'primary'">{{
            swiper.activeIndex + 1
        }}</RoundButton>
        <RoundButton @click="swiper.slideNext()" :isDisabled="swiper.isEnd"
            ><SingleArrow :isDisabled="swiper.isEnd" />
        </RoundButton>
        <RoundButton
            @click="swiper.slideTo(slidesLength - 1)"
            :isDisabled="swiper.isEnd"
            ><DoubleArrow :isDisabled="swiper.isEnd" />
        </RoundButton>
    </div>
</template>

<script setup>
import RoundButton from '@/src/Shared/RoundButton'
import SingleArrow from '@/src/Shared/icons/SingleArrow'
import DoubleArrow from '@/src/Shared/icons/DoubleArrow'
import { useSwiper } from 'swiper/vue'
const { slidesLength } = defineProps(['slidesLength'])
const swiper = useSwiper()
</script>

<style lang="scss" scoped>
@import '@/src/App/global.scss';
.buttons-wrapper {
    min-width: 184px;
    max-width: 340px;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-between;
    z-index: 1;

    @media (min-width: $tablet) {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}
.rotate {
    transform: rotate(180deg);
}
</style>
