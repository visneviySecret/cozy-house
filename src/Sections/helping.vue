<template>
    <section class="container">
        <h3>
            How you can help<br />
            our shelter
        </h3>
        <div class="grid">
            <div v-for="help in helps">
                <div>
                    <img :src="help.img" :alt="help.title" />
                    <h5>
                        {{ help.title }}
                    </h5>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import helps from '/public/content/shelter-helps'
</script>

<style lang="scss" scoped>
@import '/src/App/global.scss';

h3 {
    text-align: center;
    margin-bottom: clamp(42px, 8vw, 60px);
}
h5 {
    text-align: center;
}

img {
    width: clamp(50px, 7.8vw, 60px);
    margin-bottom: clamp(20px, 4vw, 30px);
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    @media (min-width: $tablet) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 55px;
    }

    @media (min-width: $desktop) {
        & > div {
            width: 180px;
        }
        & > :nth-child(6) {
            margin-left: 100px;
        }
        & > :last-child {
            margin-right: 120px;
        }
        display: flex;
        flex-wrap: wrap;
        gap: 55px;
        justify-content: space-around;
    }
}
</style>
