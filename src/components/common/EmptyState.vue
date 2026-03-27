<template>
  <div class="flex flex-col items-center justify-center py-16 text-center">
    <div class="text-6xl mb-4">{{ icon }}</div>
    <h3 class="font-display text-xl font-bold text-forest-900 bangla mb-2">{{ title }}</h3>
    <p v-if="subtitle" class="text-gray-400 bangla text-sm max-w-xs">{{ subtitle }}</p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '🌿' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>
