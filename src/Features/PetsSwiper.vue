<template>
    <div class="wrapper">
        <Swiper
            init="false"
            :loop="true"
            :breakpoints="swiperBreakpoints"
            :centered-slides="false"
            :navigation="true"
            :grab-cursor="true"
        >
            <SwiperSlide v-for="pet in pets" :key="pet.id">
                <Card :imgSrc="pet.img" :handleClick="() => openModal(pet)">{{
                    pet.name
                }}</Card>
            </SwiperSlide>
            <SwiperControls />
        </Swiper>
        <PetModal
            :isModalActive="isModalActive"
            :handleClick="closeModal"
            :pet="choosedPet"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from '/src/Entites/Card'
import PetModal from '../Entites/PetModal.vue'
import SwiperControls from '/src/Entites/SwiperControls'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import pets from '/public/content/pets.json'

const choosedPet = ref({})
const isModalActive = ref(false)
const openModal = (pet) => {
    choosedPet.value = pet
    isModalActive.value = !isModalActive.value
}
const closeModal = () => {
    choosedPet.value = null
    isModalActive.value = false
}

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

<!-- Используем дочерний компонент -->
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
