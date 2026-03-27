<template>
  <div class="min-h-screen bg-gradient-to-br from-forest-950 to-forest-800 flex items-center justify-center px-4 text-white">
    <div class="text-center">
      <!-- Animated leaf -->
      <div class="text-8xl mb-6 animate-float inline-block">🌿</div>

      <h1 class="font-display text-8xl md:text-9xl font-extrabold text-forest-600 mb-4">404</h1>
      <h2 class="font-display text-3xl md:text-4xl font-bold bangla mb-4">পাওয়া যায়নি!</h2>
      <p class="text-forest-300 bangla text-lg mb-10 max-w-md mx-auto leading-relaxed">
        আপনি যে পেজটি খুঁজছেন তা হয়তো সরিয়ে ফেলা হয়েছে বা ঠিকানা পরিবর্তন করা হয়েছে।
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <RouterLink to="/" class="btn-primary text-base px-8 py-4">
          🏠 হোমে ফিরুন
        </RouterLink>
        <RouterLink to="/products" class="inline-flex items-center gap-2 border-2 border-forest-500 text-forest-300 hover:text-white hover:border-white px-8 py-4 rounded-full font-semibold transition-all duration-300 bangla text-base">
          🛒 পণ্য দেখুন
        </RouterLink>
      </div>

      <!-- Quick links -->
      <div class="mt-12 flex flex-wrap justify-center gap-4">
        <RouterLink v-for="link in quickLinks" :key="link.path" :to="link.path"
          class="text-forest-400 hover:text-white text-sm bangla transition-colors underline underline-offset-4">
          {{ link.label }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const quickLinks = [
  { path: '/blog', label: 'স্বাস্থ্য ব্লগ' },
  { path: '/entrepreneurs', label: 'উদ্যোক্তা' },
  { path: '/about', label: 'আমাদের সম্পর্কে' },
  { path: '/contact', label: 'যোগাযোগ' },
]
</script>
