<template>
  <div class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 flex flex-col">
    <!-- Image -->
    <div class="relative overflow-hidden aspect-[4/3]">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
      <!-- Badges -->
      <div class="absolute top-3 left-3 flex gap-2">
        <span v-if="product.badge" class="badge bg-earth-500 text-white text-xs font-bold shadow">
          {{ product.badge }}
        </span>
        <span v-if="product.originalPrice > product.price" class="badge bg-red-500 text-white text-xs font-bold shadow">
          {{ discountPercent }}% ছাড়
        </span>
      </div>
      <!-- Wishlist Button -->
      <button
        @click.prevent="toggleWishlist"
        class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-all opacity-0 group-hover:opacity-100"
        :class="isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-400'"
      >
        <svg class="w-4 h-4" :fill="isWishlisted ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      <!-- Quick View overlay -->
      <div class="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/20 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
        <RouterLink
          :to="`/products/${product.id}`"
          class="bg-white text-forest-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-forest-50 transition-colors bangla"
        >
          বিস্তারিত দেখুন
        </RouterLink>
      </div>
    </div>

    <!-- Content -->
    <div class="p-4 flex flex-col flex-1">
      <!-- Category tag -->
      <span class="text-xs text-forest-600 font-semibold uppercase tracking-wide mb-1">{{ categoryLabel }}</span>
      <!-- Name -->
      <RouterLink :to="`/products/${product.id}`">
        <h3 class="font-display font-bold text-forest-900 text-base leading-snug hover:text-forest-700 transition-colors bangla line-clamp-2">
          {{ product.name }}
        </h3>
      </RouterLink>
      <!-- Weight -->
      <p class="text-xs text-gray-400 mt-1">{{ product.weight }}</p>

      <!-- Rating -->
      <div class="flex items-center gap-1.5 mt-2">
        <div class="flex">
          <svg v-for="i in 5" :key="i" class="w-3.5 h-3.5" :class="i <= Math.round(product.rating) ? 'star-filled' : 'star-empty'" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <span class="text-xs text-gray-500">({{ product.reviewCount }})</span>
      </div>

      <!-- Price -->
      <div class="flex items-baseline gap-2 mt-3">
        <span class="text-xl font-display font-bold text-forest-900">৳{{ product.price }}</span>
        <span v-if="product.originalPrice > product.price" class="text-sm text-gray-400 line-through">৳{{ product.originalPrice }}</span>
      </div>

      <!-- Add to Cart -->
      <button
        @click="handleAddToCart"
        :disabled="!product.inStock"
        class="mt-4 w-full btn-primary justify-center text-sm py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg v-if="!added" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <svg v-else class="w-4 h-4 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="bangla">{{ added ? 'যোগ হয়েছে!' : (product.inStock ? t('products.addToCart') : 'স্টক নেই') }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useCartStore } from '@/store/modules/cart'
import { toast } from 'vue3-toastify'

const props = defineProps({
  product: { type: Object, required: true },
})

const { t } = useI18n()
const cartStore = useCartStore()
const added = ref(false)
const isWishlisted = ref(false)

const discountPercent = computed(() =>
  Math.round(((props.product.originalPrice - props.product.price) / props.product.originalPrice) * 100)
)

const categoryLabels = {
  honey: 'মধু', organic: 'জৈব খাদ্য', grains: 'শস্য', dry: 'শুকনো খাবার',
}
const categoryLabel = computed(() => categoryLabels[props.product.category] || props.product.category)

function handleAddToCart() {
  cartStore.addItem(props.product)
  added.value = true
  toast.success(`${props.product.name} কার্টে যোগ হয়েছে! 🛒`)
  setTimeout(() => { added.value = false }, 2000)
}

function toggleWishlist() {
  isWishlisted.value = !isWishlisted.value
  toast.success(isWishlisted.value ? 'পছন্দের তালিকায় যোগ হয়েছে ❤️' : 'তালিকা থেকে সরানো হয়েছে')
}
</script>
