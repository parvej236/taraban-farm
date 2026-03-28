<template>
  <footer class="bg-forest-900 text-white">
    <!-- Newsletter Banner -->
    <div class="bg-forest-800 py-10">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="font-display text-2xl font-bold">{{ t('footer.newsletter') }}</h3>
            <p class="text-forest-300 bangla mt-1">স্বাস্থ্য টিপস ও অফার সরাসরি ইনবক্সে পান</p>
          </div>
          <form @submit.prevent="subscribeNewsletter" class="flex gap-3 w-full md:w-auto">
            <input
              v-model="email"
              type="email"
              :placeholder="t('footer.newsletterPlaceholder')"
              class="flex-1 md:w-72 px-4 py-3 rounded-full bg-forest-700 border border-forest-600 text-white placeholder-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400 bangla"
            />
            <button type="submit" class="btn-accent whitespace-nowrap">
              {{ t('footer.subscribe') }}
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Main Footer -->
    <div class="container mx-auto px-4 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <img
              :src="logoUrl"
              alt="Safe Food Movement"
              class="w-12 h-12 rounded-full object-contain bg-cream-100 ring-1 ring-white/10"
            />
            <div>
              <div class="font-display font-bold text-xl">Safe Food Movement</div>
              <div class="text-forest-400 text-sm">সুস্থ্যতার জন্য নিরাপদ খাদ্য</div>
            </div>
          </div>
          <p class="text-forest-300 bangla text-sm leading-relaxed mb-6">
            {{ t('footer.tagline') }} — প্রকৃতির সেরা উপহার সরাসরি আপনার পরিবারের কাছে পৌঁছে দিচ্ছি।
          </p>
          <!-- Social Links -->
          <div class="flex gap-3">
            <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank"
              class="w-10 h-10 rounded-full bg-forest-800 hover:bg-forest-600 flex items-center justify-center transition-colors"
              :aria-label="social.name">
              <span class="text-sm" v-html="social.icon"></span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-display font-bold text-lg mb-5 text-forest-300">{{ t('footer.quickLinks') }}</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <RouterLink :to="link.path" class="text-forest-400 hover:text-white bangla text-sm transition-colors flex items-center gap-2">
                <svg class="w-3 h-3 text-forest-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h4 class="font-display font-bold text-lg mb-5 text-forest-300">পণ্য বিভাগ</h4>
          <ul class="space-y-3">
            <li v-for="cat in categories" :key="cat.name">
              <RouterLink :to="`/products?category=${cat.slug}`" class="text-forest-400 hover:text-white bangla text-sm transition-colors flex items-center gap-2">
                <span>{{ cat.icon }}</span>
                {{ cat.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-display font-bold text-lg mb-5 text-forest-300">{{ t('footer.contact') }}</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-forest-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-forest-400 bangla text-sm">রোড ৫, বাড়ি ১২, দিনাজপুর, বাংলাদেশ</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-forest-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+8801670394056" class="text-forest-400 hover:text-white text-sm transition-colors">+880 1670-394056</a>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-forest-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@safefoodmovement.com" class="text-forest-400 hover:text-white text-sm transition-colors">info@safefoodmovement.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-forest-900 py-6">
      <div class="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p class="text-forest-500 bangla text-sm">
          ©2026 Safe Food Movement। {{ t('footer.rights') }}।
        </p>
        <div class="flex items-center gap-4">
          <RouterLink to="/about" class="text-forest-500 hover:text-forest-300 text-xs bangla transition-colors">গোপনীয়তা নীতি</RouterLink>
          <RouterLink to="/about" class="text-forest-500 hover:text-forest-300 text-xs bangla transition-colors">ব্যবহারের শর্তাবলী</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { toast } from 'vue3-toastify'
import logoUrl from '@/assets/logo.png'

const { t } = useI18n()
const email = ref('')

const quickLinks = [
  { name: 'হোম', path: '/' },
  { name: 'পণ্যসমূহ', path: '/products' },
  { name: 'স্বাস্থ্য ব্লগ', path: '/blog' },
  { name: 'উদ্যোক্তা', path: '/entrepreneurs' },
  { name: 'আমাদের সম্পর্কে', path: '/about' },
  { name: 'যোগাযোগ', path: '/contact' },
]

const categories = [
  { name: 'জৈব খাদ্য', slug: 'organic', icon: '🌾' },
  { name: 'প্রাকৃতিক মধু', slug: 'honey', icon: '🍯' },
  { name: 'শস্য ও ডাল', slug: 'grains', icon: '🌿' },
  { name: 'শুকনো খাবার', slug: 'dry', icon: '🌰' },
]

const socials = [
  { name: 'Facebook', url: '#', icon: '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' },
  { name: 'Instagram', url: '#', icon: '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>' },
  { name: 'YouTube', url: '#', icon: '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>' },
]

function subscribeNewsletter() {
  if (!email.value) return
  toast.success('সাবস্ক্রাইব করার জন্য ধন্যবাদ! 🌿')
  email.value = ''
}
</script>
