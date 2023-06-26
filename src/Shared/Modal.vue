<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="isModalActive" class="modal-template">
                <div class="modal-container">
                    <slot />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
const { isModalActive } = defineProps(['isModalActive'])
</script>

<style lang="scss" scoped>
.modal-template {
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(41, 41, 41, 0.6);
    transition: opacity 0.3s ease, transform 0.3s;
}
.modal-container {
    width: 100vw;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    transition: opacity 0.3s ease, transform 0.3s;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
