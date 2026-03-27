<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-2xl font-bold text-forest-900 bangla">স্বাগতম, {{ authStore.user?.name }}! 🌿</h1>
      <p class="text-gray-500 bangla text-sm mt-1">আপনার অ্যাকাউন্টের সংক্ষিপ্ত বিবরণ</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-2xl p-5 shadow-md text-center">
        <div class="text-3xl mb-2">{{ stat.icon }}</div>
        <div class="font-display text-2xl font-bold text-forest-900">{{ stat.value }}</div>
        <p class="text-gray-400 bangla text-xs mt-1">{{ stat.label }}</p>
      </div>
    </div>

    <!-- Recent Orders -->
    <div class="bg-white rounded-2xl shadow-md p-6">
      <h3 class="font-display font-bold text-forest-900 bangla mb-4">সাম্প্রতিক অর্ডার</h3>
      <div class="text-center py-10">
        <div class="text-4xl mb-3">📦</div>
        <p class="text-gray-400 bangla">এখনো কোনো অর্ডার নেই</p>
        <RouterLink to="/products" class="btn-primary mt-4 text-sm">এখনই কিনুন</RouterLink>
      </div>
    </div>

    <!-- Recommended Products -->
    <div class="bg-white rounded-2xl shadow-md p-6">
      <h3 class="font-display font-bold text-forest-900 bangla mb-4">আপনার জন্য পণ্য</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <RouterLink v-for="product in recommended" :key="product.id" :to="`/products/${product.id}`" class="group">
          <div class="aspect-square rounded-xl overflow-hidden mb-2">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <p class="text-xs font-semibold text-forest-900 bangla line-clamp-1">{{ product.name }}</p>
          <p class="text-xs text-forest-600 font-bold bangla">৳{{ product.price }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'
import { products } from '@/data'

const authStore = useAuthStore()
const recommended = products.slice(0, 3)

const stats = [
  { icon: '📦', value: '0', label: 'মোট অর্ডার' },
  { icon: '❤️', value: '0', label: 'পছন্দের পণ্য' },
  { icon: '⭐', value: '0', label: 'রিভিউ' },
  { icon: '💰', value: '৳0', label: 'মোট খরচ' },
]
</script>
