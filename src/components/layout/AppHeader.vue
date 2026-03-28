<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" :class="[
    scrolled
      ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2'
      : 'bg-transparent py-4'
  ]">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group">
          <img :src="logoUrl" alt="Taraban Farm"
            class="w-10 h-10 rounded-full object-contain bg-cream-100 shadow-lg ring-1 ring-black/5 group-hover:shadow-xl transition-all" />
          <div>
            <div class="font-display font-bold text-lg leading-tight transition-colors"
              :class="scrolled ? 'text-forest-900' : 'text-white'">
              Safe Food Movement
            </div>
            <div class="text-xs bangla leading-tight transition-colors"
              :class="scrolled ? 'text-forest-600' : 'text-forest-200'">
              সুস্থ্য জীবনের
              জন্য নিরাপদ
              খাদ্য
            </div>
          </div>
        </RouterLink>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-1">
          <RouterLink v-for="link in navLinks" :key="link.name" :to="link.path"
            class="px-4 py-2 rounded-full text-sm font-semibold bangla transition-all duration-200 hover:bg-forest-100 hover:text-forest-800"
            :class="route.path === link.path
                ? 'bg-forest-100 text-forest-800'
                : scrolled
                  ? 'text-gray-700'
                  : 'text-white/90 hover:text-white'
              ">
            {{ t(`nav.${link.key}`) }}
          </RouterLink>
        </nav>

        <!-- Right Side Actions -->
        <div class="flex items-center gap-2">
          <!-- Language Toggle -->
          <!-- <button @click="toggleLocale"
            class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-200"
            :class="scrolled ? 'border-forest-300 text-forest-700 hover:bg-forest-50' : 'border-white/40 text-white hover:bg-white/10'">
            {{ locale === 'bn' ? 'EN' : 'বাং' }}
          </button> -->

          <!-- Cart Button -->
          <button @click="cartStore.openDrawer()"
            class="relative flex items-center gap-1.5 px-3 py-2 rounded-full transition-all duration-200"
            :class="scrolled ? 'text-forest-700 hover:bg-forest-50' : 'text-white hover:bg-white/10'">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span v-if="cartStore.itemCount > 0"
              class="absolute -top-1 -right-1 w-5 h-5 bg-earth-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              {{ cartStore.itemCount }}
            </span>
          </button>

          <!-- Auth Buttons -->
          <template v-if="!authStore.isAuthenticated">
            <RouterLink to="/login" class="hidden sm:flex btn-secondary text-sm py-2 px-4"
              :class="!scrolled && isHomePage ? 'border-white text-white hover:bg-white hover:text-forest-800' : ''">
              {{ t('nav.login') }}
            </RouterLink>
          </template>
          <template v-else>
            <div class="relative" ref="userMenuRef">
              <button @click="showUserMenu = !showUserMenu" class="flex items-center gap-2 rounded-full transition-all">
                <img v-if="authStore.user?.avatar" :src="authStore.user.avatar"
                  class="w-8 h-8 rounded-full object-cover ring-2 ring-forest-400" :alt="authStore.user.name" />
                <div v-else
                  class="w-8 h-8 rounded-full bg-forest-600 text-white flex items-center justify-center text-sm font-bold ring-2 ring-forest-400">
                  {{ authStore.user?.name?.[0] || 'U' }}
                </div>
              </button>
              <!-- Dropdown -->
              <Transition name="dropdown">
                <div v-if="showUserMenu"
                  class="absolute right-0 top-12 w-48 bg-white rounded-2xl shadow-2xl border border-forest-100 overflow-hidden">
                  <div class="px-4 py-3 border-b border-forest-100">
                    <p class="text-sm font-semibold text-forest-900 bangla">{{ authStore.user?.name }}</p>
                    <p class="text-xs text-gray-500">{{ authStore.user?.email }}</p>
                  </div>
                  <RouterLink to="/dashboard"
                    class="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-forest-50 bangla transition-colors"
                    @click="showUserMenu = false">
                    <svg class="w-4 h-4 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {{ t('nav.dashboard') }}
                  </RouterLink>
                  <button @click="handleLogout"
                    class="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 bangla transition-colors">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    {{ t('nav.logout') }}
                  </button>
                </div>
              </Transition>
            </div>
          </template>

          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2 rounded-xl transition-colors"
            :class="scrolled ? 'text-forest-700 hover:bg-forest-50' : 'text-white hover:bg-white/10'">
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-forest-100 shadow-xl">
        <nav class="container mx-auto px-4 py-4 flex flex-col gap-1">
          <RouterLink v-for="link in navLinks" :key="link.name" :to="link.path" @click="mobileMenuOpen = false"
            class="px-4 py-3 rounded-xl text-sm font-semibold bangla text-gray-700 hover:bg-forest-50 hover:text-forest-800 transition-colors"
            :class="route.path === link.path ? 'bg-forest-50 text-forest-800' : ''">
            {{ t(`nav.${link.key}`) }}
          </RouterLink>
          <div class="flex gap-2 mt-2 pt-2 border-t border-forest-100">
            <button @click="toggleLocale"
              class="flex-1 py-2 rounded-xl border border-forest-300 text-forest-700 text-sm font-bold">
              {{ locale === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন' }}
            </button>
            <RouterLink v-if="!authStore.isAuthenticated" to="/login" @click="mobileMenuOpen = false"
              class="flex-1 btn-primary text-sm py-2 justify-center">
              {{ t('nav.login') }}
            </RouterLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useCartStore } from '@/store/modules/cart'
import { useAuthStore } from '@/store/modules/auth'
import { onClickOutside } from '@vueuse/core'
import logoUrl from '@/assets/logo.png'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const authStore = useAuthStore()

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const showUserMenu = ref(false)
const userMenuRef = ref(null)

const isHomePage = computed(() => route.path === '/')

const navLinks = [
  { key: 'home', name: 'হোম', path: '/' },
  { key: 'products', name: 'পণ্যসমূহ', path: '/products' },
  { key: 'blog', name: 'স্বাস্থ্য ব্লগ', path: '/blog' },
  { key: 'entrepreneurs', name: 'উদ্যোক্তা', path: '/entrepreneurs' },
  { key: 'about', name: 'আমাদের সম্পর্কে', path: '/about' },
  { key: 'contact', name: 'যোগাযোগ', path: '/contact' },
]

function toggleLocale() {
  locale.value = locale.value === 'bn' ? 'en' : 'bn'
}

function handleLogout() {
  authStore.logout()
  showUserMenu.value = false
  router.push('/')
}

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onClickOutside(userMenuRef, () => {
  showUserMenu.value = false
})

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, max-height 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>
