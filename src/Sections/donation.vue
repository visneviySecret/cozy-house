<template>
    <section>
        <div class="container">
            <div class="content">
                <h3>
                    You can also <br />
                    make a donation
                </h3>
                <span>Name of the bank / Type of bank account</span>
                <div class="credit-card">
                    <NuxtImg src="/assets/help_icons/credit-card.svg" />
                    <h5>
                        {{ cardNumber }}
                    </h5>
                </div>
                <p>
                    Legal information and lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Maecenas a ipsum at libero
                    sagittis dignissim sed ac diam. Praesent ultrices maximus
                    tortor et vulputate. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                </p>
            </div>
            <NuxtImg
                class="hero-img"
                src="/assets/donation_dog/medium.png"
                srcset="
            /assets/donation_dog/small.png 320w
            /assets/donation_dog/medium.png 768w
            "
            />
        </div>
    </section>
</template>

<script setup>
import { cardNumber } from '@/public/content/card-number'
</script>

<style lang="scss" scoped>
@import '@/src/App/global.scss';
section {
    background: $color-light-l;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(42px, 8vw, 60px);
    @media (min-width: $desktop) {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-around;
        gap: 30px;
    }
}

.content {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

p:last-of-type {
    color: $color-dark-m;
    text-align: justify;
    font-size: 12px;
    font-family: Arial;
    font-style: italic;
    line-height: 18px;
}

img {
    max-width: 100%;
}

.credit-card {
    display: flex;
    gap: 10px;
    background-color: $color-primary;
    padding: 10px 15px;
    border-radius: 9px;
    align-items: center;
}
</style>
