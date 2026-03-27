<template>
  <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm bangla">
    <RouterLink to="/" class="text-forest-400 hover:text-forest-700 transition-colors">হোম</RouterLink>
    <template v-for="(crumb, i) in crumbs" :key="i">
      <svg class="w-3 h-3 text-forest-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <RouterLink
        v-if="crumb.path && i < crumbs.length - 1"
        :to="crumb.path"
        class="text-forest-400 hover:text-forest-700 transition-colors"
      >{{ crumb.label }}</RouterLink>
      <span v-else class="text-forest-800 font-medium truncate max-w-[200px]">{{ crumb.label }}</span>
    </template>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  crumbs: { type: Array, required: true }, // [{ label, path? }]
})
</script>
