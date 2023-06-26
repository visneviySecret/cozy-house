import { onMounted, onBeforeUnmount, ref } from 'vue'

export default function useToggleScroll() {
    const isScrollEnabled = ref(false)

    const toggleScroll = () => {
        if (isScrollEnabled.value) {
            document.body.style.overflow = 'hidden'
        } else {
            enableScroll()
        }
        isScrollEnabled.value = !isScrollEnabled.value
    }

    const enableScroll = () => {
        document.body.style.overflow = ''
    }

    onMounted(() => {
        toggleScroll()
    })

    onBeforeUnmount(() => {
        toggleScroll()
    })

    return {
        toggleScroll,
        enableScroll,
    }
}
