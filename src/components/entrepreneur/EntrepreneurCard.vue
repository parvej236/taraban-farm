<template>
  <div class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2">
    <div class="relative">
      <img :src="entrepreneur.image" :alt="entrepreneur.name" class="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
      <div class="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" />
      <div class="absolute bottom-4 left-4 right-4">
        <h3 class="font-display font-bold text-white text-xl bangla">{{ entrepreneur.name }}</h3>
        <p class="text-forest-300 text-sm bangla">{{ entrepreneur.role }}</p>
      </div>
      <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
        <p class="text-xs font-semibold text-forest-700 bangla flex items-center gap-1">
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {{ entrepreneur.location }}
        </p>
      </div>
    </div>
    <div class="p-5">
      <p class="text-gray-600 text-sm bangla leading-relaxed line-clamp-3">{{ entrepreneur.story }}</p>
      <div class="mt-4 flex flex-wrap gap-1.5">
        <span v-for="product in entrepreneur.products" :key="product" class="badge badge-organic text-xs bangla">
          🌿 {{ product }}
        </span>
      </div>
      <div v-if="entrepreneur.achievement" class="mt-4 flex items-start gap-2 bg-earth-50 rounded-xl p-3">
        <span class="text-lg">🏆</span>
        <p class="text-xs text-earth-700 bangla font-medium">{{ entrepreneur.achievement }}</p>
      </div>
      <div class="mt-4 flex gap-2">
        <a :href="`tel:${entrepreneur.phone}`" class="flex-1 flex items-center justify-center gap-2 py-2 rounded-full border border-forest-200 text-forest-700 text-sm hover:bg-forest-50 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span class="bangla text-xs">কল করুন</span>
        </a>
        <a :href="`mailto:${entrepreneur.email}`" class="flex-1 flex items-center justify-center gap-2 py-2 rounded-full bg-forest-700 text-white text-sm hover:bg-forest-800 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="bangla text-xs">ইমেইল</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  entrepreneur: { type: Object, required: true },
})
</script>
