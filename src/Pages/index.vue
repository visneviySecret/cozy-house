<template>
    <NavBar :isAlternative="true" />
    <Hero />
    <About />
    <Pets />
    <Helping />
    <Donation />
</template>

<script setup>
import NavBar from '@/src/Sections/navBar'
import Hero from '@/src/Sections/hero'
import About from '@/src/Sections/about'
import Pets from '@/src/Sections/pets'
import Helping from '@/src/Sections/helping'
import Donation from '@/src/Sections/donation'
</script>
