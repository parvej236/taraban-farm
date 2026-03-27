<template>
  <div>
    <PageHero title="আমাদের পণ্যসমূহ" subtitle="সেরা মানের জৈব ও প্রাকৃতিক খাদ্য পণ্য বেছে নিন" tag="পণ্য তালিকা"
      tagIcon="🛒" :breadcrumbs="[{ label: 'পণ্যসমূহ' }]" />

    <section class="min-h-screen" style="background: linear-gradient(135deg, #f0fdf4 0%, #fefce8 50%, #f0fdfa 100%);">
      <div class="container mx-auto px-4 lg:px-8 py-8">

        <!-- Sticky Toolbar -->
        <div class="sticky top-14 z-40 mb-8">
          <div class="rounded-2xl border border-white/60 shadow-lg shadow-green-100/50 backdrop-blur-md px-5 py-4"
            style="background: rgba(255,255,255,0.85);">
            <div class="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">

              <!-- Category Pills -->
              <div class="flex flex-wrap gap-2">
                <button v-for="cat in categories" :key="cat.slug" @click="activeCategory = cat.slug"
                  class="group flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bangla transition-all duration-300"
                  :style="activeCategory === cat.slug ? cat.activeStyle : ''"
                  :class="activeCategory === cat.slug
                    ? 'text-white shadow-md scale-105'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-green-300 hover:text-green-700 hover:shadow-sm'">
                  <span class="text-base leading-none">{{ cat.icon }}</span>
                  <span>{{ cat.name }}</span>
                </button>
              </div>

              <!-- Search & Sort -->
              <div class="flex gap-3 items-center flex-shrink-0">
                <div class="relative">
                  <input v-model="searchQuery" type="text" placeholder="Search by name.."
                    class="pl-9 pr-4 py-2 w-52 text-sm rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 bangla" />
                  <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <select v-model="sortBy"
                  class="pl-3 pr-8 py-2 w-48 text-sm rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 bangla appearance-none cursor-pointer">
                  <option value="default">Defalut</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

            </div>
          </div>
        </div>

        <!-- Results Count -->
        <div class="flex items-center gap-2 mb-6">
          <div class="w-1 h-5 rounded-full" style="background: linear-gradient(180deg, #16a34a, #059669);"></div>
          <p class="text-sm text-gray-500 bangla">
            <span class="font-bold text-green-700 text-base">{{ filteredProducts.length }}</span> টি পণ্য পাওয়া গেছে
          </p>
        </div>

        <!-- Products Grid -->
        <TransitionGroup name="product-list" tag="div" class="product-grid">
          <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </TransitionGroup>

        <!-- Empty State -->
        <div v-if="filteredProducts.length === 0" class="text-center py-24">
          <div class="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
            style="background: linear-gradient(135deg, #dcfce7, #d1fae5);">
            <span class="text-4xl">🔍</span>
          </div>
          <h3 class="font-display text-2xl text-gray-800 bangla mb-2 font-bold">কোনো পণ্য পাওয়া যায়নি</h3>
          <p class="text-gray-400 bangla mb-8">অন্য ক্যাটেগরি বা সার্চ শব্দ ব্যবহার করুন</p>
          <button @click="resetFilters"
            class="px-8 py-3 rounded-full text-white font-semibold bangla transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style="background: linear-gradient(135deg, #16a34a, #059669);">
            ফিল্টার রিসেট করুন
          </button>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/common/PageHero.vue'
import ProductCard from '@/components/product/ProductCard.vue'
import { products } from '@/data'

const route = useRoute()
const activeCategory = ref(route.query.category || 'all')
const searchQuery = ref('')
const sortBy = ref('default')

const categories = [
  {
    slug: 'all',
    name: 'সকল পণ্য',
    icon: '🌿',
    activeStyle: 'background: linear-gradient(135deg, #16a34a, #059669);',
  },
  {
    slug: 'vegetables',
    name: 'সবজি',
    icon: '🥦',
    activeStyle: 'background: linear-gradient(135deg, #22c55e, #16a34a);',
  },
  {
    slug: 'fruits',
    name: 'ফলমূল',
    icon: '🍎',
    activeStyle: 'background: linear-gradient(135deg, #f97316, #ea580c);',
  },
  {
    slug: 'meat',
    name: 'মাংস',
    icon: '🥩',
    activeStyle: 'background: linear-gradient(135deg, #ef4444, #dc2626);',
  },
  {
    slug: 'fish',
    name: 'মাছ',
    icon: '🐟',
    activeStyle: 'background: linear-gradient(135deg, #3b82f6, #2563eb);',
  },
  {
    slug: 'dairy',
    name: 'দুগ্ধজাত পণ্য',
    icon: '🥛',
    activeStyle: 'background: linear-gradient(135deg, #f59e0b, #d97706);',
  },
]

const filteredProducts = computed(() => {
  let result = [...products]
  if (activeCategory.value !== 'all') {
    result = result.filter(p => p.category === activeCategory.value)
  }
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.nameEn.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    )
  }
  if (sortBy.value === 'price-low') result.sort((a, b) => a.price - b.price)
  else if (sortBy.value === 'price-high') result.sort((a, b) => b.price - a.price)
  else if (sortBy.value === 'rating') result.sort((a, b) => b.rating - a.rating)
  return result
})

function resetFilters() {
  activeCategory.value = 'all'
  searchQuery.value = ''
  sortBy.value = 'default'
}

onMounted(() => {
  if (route.query.category) activeCategory.value = route.query.category
})
</script>

<style scoped>
.product-list-enter-active,
.product-list-leave-active {
  transition: all 0.4s ease;
}

.product-list-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.product-list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>