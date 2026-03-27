<template>
  <Transition name="scroll-top">
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 w-12 h-12 bg-forest-700 text-white rounded-full shadow-lg hover:bg-forest-800 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

function handleScroll() {
  showButton.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.scroll-top-enter-active, .scroll-top-leave-active { transition: opacity 0.3s, transform 0.3s; }
.scroll-top-enter-from, .scroll-top-leave-to { opacity: 0; transform: translateY(20px); }
</style>
