<template>
    <section class="container">
        <div>
            <h3>
                About the shelter<br />
                “Cozy House”
            </h3>
            <p>
                Currently we have 121 dogs and 342 cats on our hands and
                statistics show that only 20% of them will find a family. The
                others will continue to live with us and will be waiting for a
                lucky chance to become dearly loved.
            </p>
            <p>
                We feed our wards with the best food and make sure that they do
                not get sick, feel comfortable (including psychologically) and
                well. We are supported by 87 volunteers and 28 employees of
                various skill levels. About 12% of the animals are taken by the
                shelter staff. Taking care of the animals, they become attached
                to the pets and would hardly ever leave them alone.
            </p>
        </div>
        <NuxtImg
            class="hero-img"
            src="/assets/about_pets/medium.png"
            srcset="
            /assets/about_pets/small.png 320w
            /assets/about_pets/medium.png 768w
            "
        />
    </section>
</template>

<style lang="scss" scoped>
@import '/src/App/global.scss';
section {
    max-width: 430px;
    margin-inline: auto;

    @media (min-width: $desktop) {
        display: flex;
        flex-direction: row-reverse;
        max-width: 100%;
        align-items: center;
        justify-content: space-around;
        gap: 120px;
    }
}

div {
    max-width: 430px;
}

h3 {
    margin-bottom: 25px;
}

p:first-of-type {
    margin-bottom: clamp(22px, 10vw, 25px);
}

p:last-of-type {
    margin-bottom: clamp(42px, 11vw, 80px);

    @media (min-width: $desktop) {
        margin-bottom: 0px;
    }
}

img {
    max-width: 100%;
}
</style>
