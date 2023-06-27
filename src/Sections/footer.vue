<template>
    <footer id="footer">
        <div class="container">
            <div class="contacts">
                <div class="topic">
                    <h3 v-motion-fade-visible-once>
                        For questions and suggestions
                    </h3>
                    <div class="row">
                        <NuxtImg src="/assets/contacts_icons/icon-email.svg" />
                        <h4 v-motion-fade-visible-once>email@shelter.com</h4>
                    </div>
                    <div class="row">
                        <NuxtImg src="/assets/contacts_icons/icon-phone.svg" />
                        <h4 v-motion-fade-visible-once>+13 674 567 75 54</h4>
                    </div>
                </div>
                <div class="topic">
                    <h3 v-motion-fade-visible-once>
                        We are waiting for your visit
                    </h3>
                    <div class="row">
                        <NuxtImg src="/assets/contacts_icons/icon-marker.svg" />
                        <h4 v-motion-fade-visible-once>
                            1 Central Street, Boston<br />(entrance from the
                            store)
                        </h4>
                    </div>
                    <div class="row">
                        <NuxtImg src="/assets/contacts_icons/icon-marker.svg" />
                        <h4 v-motion-fade-visible-once>
                            18 South Park, London
                        </h4>
                    </div>
                </div>
            </div>
            <NuxtImg
                class="puppy-img"
                src="/assets/footer_puppy/medium.png"
                srcset="
            /assets/footer_puppy/small.png 320w
            /assets/footer_puppy/medium.png 768w
            "
            />
        </div>
    </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/src/App/global.scss';

footer {
    padding-top: clamp(30px, 4vw, 40px);
    background: url('@/public/assets/noise_transparent.png'),
        radial-gradient(at 5.73% 50%, #513d2f 0%, #1a1a1c 100%),
        $footer-gradient-background;

    text-align: center;
}
.container {
    @media (min-width: $desktop) {
        display: flex;
    }
}
.contacts {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-bottom: 40px;

    @media (min-width: $tablet) {
        flex-direction: row;
        padding-bottom: 69px;
        padding-inline: 34px;
    }

    @media (min-width: $desktop) {
        padding-inline: 0px;
    }
}
.topic > :not(:last-child) {
    margin-bottom: 40px;
}

h3 {
    display: inline-block;
    color: var(--color-light-xl);
    text-wrap: balance;
}

.row {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-inline: auto;

    @media (min-width: $tablet) {
        margin-inline: 0;
        justify-content: flex-start;
    }
}
.topic:last-of-type > * > img {
    margin-right: auto;
    @media (min-width: $tablet) {
        margin-right: 0;
    }
}
.topic:last-of-type .row {
    max-width: 300px;
}
h4 {
    color: var(--color-primary);
}

.puppy-img {
    max-width: 100%;
    translate: 0 4px;

    @media (min-width: $desktop) {
        /* padding: clamp(30px, 4vw, 40px) clamp(10px, 4vw, 40px) 0 0; */
        translate: 0;
    }
}
</style>
