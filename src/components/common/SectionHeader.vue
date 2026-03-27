<template>
  <div :class="['text-center mb-12 animate-on-scroll', centered ? 'mx-auto max-w-2xl' : '']">
    <div v-if="tag" class="inline-flex items-center gap-2 bg-forest-100 text-forest-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 bangla">
      <span v-if="tagIcon">{{ tagIcon }}</span>
      {{ tag }}
    </div>
    <h2 :class="['section-title bangla', titleClass]">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle mt-4 bangla">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  tag: String,
  tagIcon: String,
  title: { type: String, required: true },
  subtitle: String,
  centered: { type: Boolean, default: true },
  titleClass: String,
})
</script>
