<template>
    <section>
        <div class="container">
            <h3>
                Our friends who <br />
                are looking for a house
            </h3>
            <PetsSwiper class="swiper" />
            <Button>Get to know the rest</Button>
        </div>
    </section>
</template>

<script setup>
import Button from '/src/shared/Button'
import PetsSwiper from '/src/Features/PetsSwiper'
</script>

<style lang="scss" scoped>
@import '/src/App/global.scss';

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
