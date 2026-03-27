<template>
  <div>
    <PageHero title="আমাদের পণ্যসমূহ" subtitle="সেরা মানের জৈব ও প্রাকৃতিক খাদ্য পণ্য বেছে নিন" tag="পণ্য তালিকা"
      tagIcon="🛒" :breadcrumbs="[{ label: 'পণ্যসমূহ' }]" />

    <section class="min-h-screen" style="background: linear-gradient(135deg, #f0fdf4 0%, #fefce8 50%, #f0fdfa 100%);">
      <div class="container mx-auto px-4 lg:px-8 py-8">

        <!-- Sticky Toolbar -->
        <div class="sticky top-14 z-40 mb-6 sm:mb-8 min-w-0">
          <div class="rounded-2xl border border-white/60 shadow-lg shadow-green-100/50 backdrop-blur-md px-4 py-1 sm:px-5 min-w-0"
            style="background: rgba(255,255,255,0.85);">
            <div class="min-w-0">

              <!-- Mobile: compact category select + search / filter toggles -->
              <div class="md:hidden flex flex-col gap-2">
                <div class="flex items-stretch gap-2 min-w-0">
                  <select v-model="activeCategory"
                    class="flex-1 min-w-0 pl-3 pr-8 py-2.5 text-sm rounded-xl border border-gray-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bangla appearance-none cursor-pointer"
                    style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%2364748b%22%3E%3Cpath stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 0.5rem center; background-size: 1rem;">
                    <option v-for="cat in categories" :key="cat.slug" :value="cat.slug">
                      {{ cat.icon }} {{ cat.name }}
                    </option>
                  </select>
                  <button type="button" @click="toggleMobileSearch"
                    class="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl border transition-colors"
                    :class="mobileSearchOpen || searchQuery
                      ? 'border-green-400 bg-green-50 text-green-700'
                      : 'border-gray-200 bg-white/90 text-gray-600 hover:border-green-300'"
                    aria-label="Search">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <button type="button" @click="toggleMobileFilter"
                    class="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl border transition-colors"
                    :class="mobileFilterOpen || sortBy !== 'default'
                      ? 'border-green-400 bg-green-50 text-green-700'
                      : 'border-gray-200 bg-white/90 text-gray-600 hover:border-green-300'"
                    aria-label="Sort and filter">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </button>
                </div>
                <div v-show="mobileSearchOpen" class="relative">
                  <input ref="mobileSearchInputRef" v-model="searchQuery" type="search" enterkeyhint="search"
                    placeholder="নামে খুঁজুন…"
                    class="pl-9 pr-4 py-2.5 w-full text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 bangla" />
                  <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div v-show="mobileFilterOpen">
                  <label class="sr-only" for="mobile-sort">Sort</label>
                  <select id="mobile-sort" v-model="sortBy"
                    class="w-full pl-3 pr-8 py-2.5 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 bangla appearance-none cursor-pointer"
                    style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%2364748b%22%3E%3Cpath stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 0.5rem center; background-size: 1rem;">
                    <option value="default">ডিফল্ট</option>
                    <option value="price-low">দাম: কম থেকে বেশি</option>
                    <option value="price-high">দাম: বেশি থেকে কম</option>
                    <option value="rating">রেটিং</option>
                  </select>
                </div>
              </div>

              <!-- Desktop: category pills + inline search & sort -->
              <div class="hidden md:flex flex-row gap-4 items-center justify-between min-w-0">
                <div class="flex flex-wrap gap-2 min-w-0">
                  <button v-for="cat in categories" :key="cat.slug" type="button" @click="activeCategory = cat.slug"
                    class="group flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bangla transition-all duration-300"
                    :style="activeCategory === cat.slug ? cat.activeStyle : ''"
                    :class="activeCategory === cat.slug
                      ? 'text-white shadow-md scale-105'
                      : 'bg-white text-gray-500 border border-gray-200 hover:border-green-300 hover:text-green-700 hover:shadow-sm'">
                    <span class="text-base leading-none">{{ cat.icon }}</span>
                    <span>{{ cat.name }}</span>
                  </button>
                </div>

                <div class="flex flex-row gap-3 items-center flex-shrink-0 min-w-0">
                  <div class="relative w-52 min-w-0">
                    <input v-model="searchQuery" type="text" placeholder="Search by name.."
                      class="pl-9 pr-4 py-2 w-full min-w-0 text-sm rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 bangla" />
                    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <select v-model="sortBy"
                    class="pl-3 pr-8 py-2 w-48 min-w-0 text-sm rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 bangla appearance-none cursor-pointer">
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
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
        <TransitionGroup name="product-list" tag="div" class="products-page-grid">
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
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/common/PageHero.vue'
import ProductCard from '@/components/product/ProductCard.vue'
import { products } from '@/data'

const route = useRoute()
const activeCategory = ref(route.query.category || 'all')
const searchQuery = ref('')
const sortBy = ref('default')

const mobileSearchOpen = ref(false)
const mobileFilterOpen = ref(false)
const mobileSearchInputRef = ref(null)

function toggleMobileSearch() {
  mobileFilterOpen.value = false
  mobileSearchOpen.value = !mobileSearchOpen.value
  if (mobileSearchOpen.value) {
    nextTick(() => mobileSearchInputRef.value?.focus())
  }
}

function toggleMobileFilter() {
  mobileSearchOpen.value = false
  mobileFilterOpen.value = !mobileFilterOpen.value
}

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