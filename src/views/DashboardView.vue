<template>
  <div class="min-h-screen bg-forest-900 pt-20">
    <div class="container mx-auto px-4 lg:px-8 py-8">
      <div class="grid lg:grid-cols-4 gap-8">
        <!-- Sidebar -->
        <aside class="lg:col-span-1">
          <!-- User Card -->
          <div class="bg-white rounded-2xl p-6 shadow-md mb-4 text-center">
            <div class="w-20 h-20 mx-auto rounded-full bg-forest-200 flex items-center justify-center text-forest-700 text-3xl font-bold mb-3 overflow-hidden">
              <img v-if="authStore.user?.avatar" :src="authStore.user.avatar" class="w-full h-full object-cover" :alt="authStore.user.name" />
              <span v-else>{{ authStore.user?.name?.[0] }}</span>
            </div>
            <h3 class="font-display font-bold text-forest-900 bangla">{{ authStore.user?.name }}</h3>
            <p class="text-gray-400 text-xs mt-0.5">{{ authStore.user?.email }}</p>
          </div>

          <!-- Nav Links -->
          <nav class="bg-white rounded-2xl shadow-md overflow-hidden">
            <RouterLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="flex items-center gap-3 px-5 py-4 text-sm font-semibold bangla transition-colors border-b border-forest-50 last:border-0"
              :class="$route.path === item.path
                ? 'bg-forest-50 text-forest-800 border-l-4 border-l-forest-600'
                : 'text-gray-600 hover:bg-forest-50 hover:text-forest-800'"
            >
              <span class="text-lg">{{ item.icon }}</span>
              {{ item.label }}
            </RouterLink>
          </nav>

          <button @click="handleLogout" class="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors text-sm font-semibold bangla">
            🚪 লগআউট
          </button>
        </aside>

        <!-- Main Content -->
        <main class="lg:col-span-3">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'
import { toast } from 'vue3-toastify'

const authStore = useAuthStore()
const router = useRouter()

const navItems = [
  { path: '/dashboard', icon: '🏠', label: 'ড্যাশবোর্ড' },
  { path: '/dashboard/orders', icon: '📦', label: 'অর্ডার ইতিহাস' },
  { path: '/dashboard/profile', icon: '👤', label: 'প্রোফাইল সম্পাদনা' },
]

function handleLogout() {
  authStore.logout()
  toast.success('লগআউট সফল হয়েছে')
  router.push('/')
}
</script>
