<template>
    <div>
        <Swiper
            :breakpoints="breakpoints"
            :centered-slides="false"
            :grab-cursor="true"
            :modules="modules"
        >
            <SwiperSlide v-for="pet in pets" :key="index">
                <Card
                    :key="pet.id"
                    :imgSrc="pet.img"
                    :handleClick="() => openModal(pet)"
                    >{{ pet.name }}</Card
                >
            </SwiperSlide>
            <SwiperGridControl :slidesLength="pets.length" />
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
import SwiperGridControl from '../Entites/SwiperGridControl.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid } from 'swiper'
import 'swiper/css'
import 'swiper/css/grid'

const { breakpoints, pets } = defineProps(['breakpoints', 'pets'])
const modules = [Grid]

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
</script>

<!-- Используем дочерний компонент -->
<style lang="scss" scoped>
@import '/src/App/global.scss';
.swiper {
    position: relative;
    @media (min-width: $tablet) {
        max-width: 708px;
    }

    @media (min-width: $desktop) {
        max-width: 1200px;
    }
}
</style>
