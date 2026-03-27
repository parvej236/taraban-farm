<template>
  <div :class="['flex items-center justify-center', fullPage ? 'fixed inset-0 bg-white/80 backdrop-blur-sm z-50' : 'py-12']">
    <div class="flex flex-col items-center gap-4">
      <!-- Leaf spinner -->
      <div class="relative" :class="sizeMap[size]">
        <div class="absolute inset-0 rounded-full border-4 border-forest-100"></div>
        <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-forest-600 animate-spin"></div>
        <div class="absolute inset-0 flex items-center justify-center text-forest-500" :class="iconSize">
          🌿
        </div>
      </div>
      <p v-if="text" class="text-forest-600 bangla text-sm font-medium">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  size: { type: String, default: 'md' },  // sm | md | lg
  text: { type: String, default: '' },
  fullPage: { type: Boolean, default: false },
})

const sizeMap = { sm: 'w-10 h-10', md: 'w-16 h-16', lg: 'w-24 h-24' }
const iconSize = { sm: 'text-lg', md: 'text-2xl', lg: 'text-3xl' }[props.size]
</script>
