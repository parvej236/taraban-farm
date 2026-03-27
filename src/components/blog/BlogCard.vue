<template>
  <article class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 flex flex-col">
    <RouterLink :to="`/blog/${post.slug}`" class="block relative overflow-hidden aspect-video">
      <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span class="absolute top-3 left-3 badge bg-forest-600 text-white text-xs bangla">{{ post.category }}</span>
    </RouterLink>
    <div class="p-5 flex flex-col flex-1">
      <div class="flex items-center gap-3 text-xs text-gray-400 mb-3">
        <span>{{ post.date }}</span>
        <span>·</span>
        <span class="bangla">{{ post.readTime }} পড়া</span>
      </div>
      <RouterLink :to="`/blog/${post.slug}`">
        <h3 class="font-display font-bold text-forest-900 text-lg leading-snug hover:text-forest-700 transition-colors bangla line-clamp-2">
          {{ post.title }}
        </h3>
        <div class="text-gray-500 line-clamp-2 mb-3">{{ post.titleEn }}</div>
      </RouterLink>
      <p class="text-gray-500 text-sm bangla leading-relaxed line-clamp-3 flex-1">{{ post.excerpt }}</p>
      <div class="flex items-center justify-between mt-4 pt-4 border-t border-forest-100">
        <div class="flex items-center gap-2">
          <img v-if="post.authorAvatar" :src="post.authorAvatar" class="w-7 h-7 rounded-full object-cover" :alt="post.author" />
          <span class="text-xs font-semibold text-gray-600 bangla">{{ post.author }}</span>
        </div>
        <RouterLink :to="`/blog/${post.slug}`" class="text-forest-600 hover:text-forest-800 text-sm font-semibold bangla flex items-center gap-1 transition-colors">
          আরও পড়ুন
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  post: { type: Object, required: true },
})
</script>
