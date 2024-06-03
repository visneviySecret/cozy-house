<template>
    <Modal :isModalActive="isModalActive">
        <div class="wrapper">
            <img :src="pet.img" class="pet-img" />
            <div class="content">
                <h3>{{ pet.name }}</h3>
                <h4>{{ pet.breed }}</h4>
                <p>
                    {{ pet.story }}
                </p>
                <ul class="info">
                    <div v-for="(item, key) in pet">
                        <li v-if="choosedKeys.indexOf(key) !== -1">
                            <strong>{{ key }}:</strong>
                            {{ item }}
                        </li>
                    </div>
                </ul>
            </div>
            <RoundButton @click="handleClick"
                ><NuxtImg src="/assets/ui-icons/Cross.svg"
            /></RoundButton>
        </div>
    </Modal>
</template>

<script setup>
import Modal from '../Shared/Modal.vue'
import RoundButton from '../Shared/RoundButton.vue'
const { handleClick, pet, isModalActive } = defineProps([
    'handleClick',
    'pet',
    'isModalActive',
])
const choosedKeys = ['age', 'inoculations', 'diseases', 'parasites']
</script>

<style lang="scss" scoped>
@import '@/src/App/global.scss';

.wrapper {
    position: relative;
    padding: 10px;
    border-radius: 9px;
    background: $color-light-s;
    width: 80%;
    max-width: 900px;
    margin-inline: auto;

    display: flex;
    justify-content: space-between;
    gap: clamp(11px, 2.5vw, 30px);
}
button {
    position: absolute;
    top: -52px;
    right: min(-3vw, -25px);
}

.pet-img {
    @media (max-width: $tablet) {
        display: none;
    }
    flex: 1;
    object-fit: cover;
}
.content {
    flex: 1;
}
h3 {
    margin-bottom: 10px;
}
p {
    margin-block: 20px;
    @media (min-width: $desktop) {
        margin-block: 40px;
    }
}
strong {
    text-transform: capitalize;
}

ul > :not(:last-child) {
    margin-bottom: clamp(6px, 0.9vw, 11px);
}
</style>
