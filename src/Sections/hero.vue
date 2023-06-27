<template>
    <main class="wrapper">
        <div class="container">
            <header>
                <h2>Not only people<br />need a house</h2>
                <p>
                    We offer to give a chance to a little and nice puppy with an
                    extremely wide and open heart. He or she will love you more
                    than anybody else in the world, you will see!
                </p>
                <Button @click="navigateTo('#pets')"> Make a friend </Button>
            </header>
            <NuxtImg
                class="hero-img"
                src="/assets/hero_puppy/large.png"
                srcset="
            /assets/hero_puppy/small.png 320w
            /assets/hero_puppy/medium.png 768w
            /assets/hero_puppy/large.png 1200w
            "
            />
        </div>
    </main>
</template>

<script setup>
import Button from '@/src/shared/Button.vue'
</script>

<style lang="scss" scoped>
@import '@/src/App/global.scss';
.wrapper {
    background: var(
        --start-screen-gradient-background,
        url('@/public/assets/noise_transparent.png'),
        radial-gradient(237.5% 111.8% at 0% 0%, #5b483a 0%, #262425 100%)
    );

    @media (min-width: $desktop) {
        padding-top: 180px;
    }
}
.container {
    @media (min-width: $desktop) {
        display: flex;
    }
}
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
    padding-top: 150px;
    margin-bottom: 105px;
    max-width: 480px;
    margin-inline: auto;

    @media (min-width: $desktop) {
        padding-top: 163px;
        & > * {
            margin-right: auto;
        }
    }
}
h2 {
    color: $color-light-xl;

    @media (min-width: $tablet) {
        margin-right: auto;
    }
}

p {
    color: $color-dark-s;
}

img {
    display: block;
    width: clamp(260px, 74.1vw, 698px);
    margin-left: auto;
}
</style>
