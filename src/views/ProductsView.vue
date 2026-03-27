<template>
  <div>
    <PageHero title="আমাদের পণ্যসমূহ" subtitle="সেরা মানের জৈব ও প্রাকৃতিক খাদ্য পণ্য বেছে নিন" tag="পণ্য তালিকা"
      tagIcon="🛒" :breadcrumbs="[{ label: 'পণ্যসমূহ' }]" />

    <section class="py-3 bg-earth-100/60 min-h-screen">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Toolbar -->
        <div class="sticky top-14 z-40 bg-earth-100/95 backdrop-blur supports-[backdrop-filter]:bg-earth-100/80
         flex flex-col md:flex-row gap-4 items-start md:items-center justify-between 
         mb-8 py-3 border-b border-gray-200">
          <!-- Category Filters -->
          <div class="flex flex-wrap gap-2">
            <button v-for="cat in categories" :key="cat.slug" @click="activeCategory = cat.slug"
              class="px-4 py-2 rounded-full text-sm font-semibold bangla transition-all duration-200" :class="activeCategory === cat.slug
                ? 'bg-forest-700 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-forest-50 hover:text-forest-800 border border-gray-200'">
              {{ cat.icon }} {{ cat.name }}
            </button>
          </div>

          <!-- Sort & Search -->
          <div class="flex gap-3 items-center">
            <div class="relative">
              <input v-model="searchQuery" type="text" placeholder="পণ্য খুঁজুন..."
                class="input-field pl-10 w-52 text-sm py-2" />
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select v-model="sortBy" class="input-field w-44 text-sm py-2 bangla">
              <option value="default">ডিফল্ট</option>
              <option value="price-low">দাম: কম থেকে বেশি</option>
              <option value="price-high">দাম: বেশি থেকে কম</option>
              <option value="rating">রেটিং</option>
            </select>
          </div>
        </div>

        <!-- Results Count -->
        <p class="text-sm text-gray-500 bangla mb-6">
          <span class="font-semibold text-forest-800">{{ filteredProducts.length }}</span> টি পণ্য পাওয়া গেছে
        </p>

        <!-- Products Grid -->
        <TransitionGroup name="product-list" tag="div" class="product-grid">
          <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </TransitionGroup>

        <!-- Empty State -->
        <div v-if="filteredProducts.length === 0" class="text-center py-20">
          <div class="text-6xl mb-4">🔍</div>
          <h3 class="font-display text-2xl text-forest-900 bangla mb-2">কোনো পণ্য পাওয়া যায়নি</h3>
          <p class="text-gray-500 bangla">অন্য ক্যাটেগরি বা সার্চ শব্দ ব্যবহার করুন</p>
          <button @click="resetFilters" class="btn-primary mt-6">ফিল্টার রিসেট করুন</button>
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
  { slug: 'all', name: 'সকল পণ্য', icon: '🌿' },
  { slug: 'organic', name: 'জৈব খাদ্য', icon: '🌾' },
  { slug: 'honey', name: 'প্রাকৃতিক মধু', icon: '🍯' },
  { slug: 'grains', name: 'শস্য ও ডাল', icon: '🫘' },
  { slug: 'dry', name: 'শুকনো খাবার', icon: '🌰' },
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
