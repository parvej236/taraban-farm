<template>
  <section class="relative bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 text-white pt-32 pb-16 overflow-hidden">
    <!-- Decorative blobs -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-forest-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-earth-600/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />
    <!-- Leaf pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🌿</text></svg>'); background-size: 120px;"></div>

    <div class="container mx-auto px-4 lg:px-8 relative">
      <!-- Breadcrumb -->
      <nav v-if="breadcrumbs" class="flex items-center gap-2 text-forest-300 text-sm mb-6 bangla">
        <RouterLink to="/" class="hover:text-white transition-colors">হোম</RouterLink>
        <span v-for="(crumb, i) in breadcrumbs" :key="i" class="flex items-center gap-2">
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span :class="i === breadcrumbs.length - 1 ? 'text-white font-medium' : 'hover:text-white transition-colors'">
            {{ crumb.label }}
          </span>
        </span>
      </nav>

      <div class="max-w-3xl">
        <div v-if="tag" class="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 bangla">
          <span v-if="tagIcon">{{ tagIcon }}</span>
          {{ tag }}
        </div>
        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bangla mb-4">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-forest-200 text-lg md:text-xl bangla leading-relaxed">
          {{ subtitle }}
        </p>
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: { type: String, required: true },
  subtitle: String,
  tag: String,
  tagIcon: String,
  breadcrumbs: Array,
})
</script>
