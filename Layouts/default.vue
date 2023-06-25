<template>
    <Navigation />
    <slot />
    <Footer />
</template>

<script setup>
import Navigation from '/src/Sections/navigation'
import Footer from '/src/Sections/footer'
</script>

<style lang="scss" scoped></style>
