<template>
  <div class="min-h-screen bg-gradient-to-br from-forest-950 to-forest-800 flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <RouterLink to="/" class="inline-flex items-center gap-3">
          <img
            :src="logoUrl"
            alt="Taraban Farm"
            class="w-14 h-14 rounded-full object-contain bg-cream-100 shadow-lg ring-1 ring-white/10"
          />
          <div class="text-left">
            <div class="font-display font-bold text-2xl text-white">তারাবান ফার্ম</div>
            <div class="text-forest-400 text-sm">সুস্থ্যতার জন্য নিরাপদ খাদ্য</div>
          </div>
        </RouterLink>
      </div>

      <!-- Card -->
      <div class="bg-white rounded-3xl shadow-2xl p-8">
        <h1 class="font-display text-2xl font-bold text-forest-900 bangla mb-2 text-center">{{ t('auth.loginTitle') }}</h1>
        <p class="text-gray-500 bangla text-sm text-center mb-8">আপনার অ্যাকাউন্টে স্বাগতম 🌿</p>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-sm font-semibold text-forest-900 bangla mb-2">{{ t('auth.email') }}</label>
            <input v-model="form.email" type="email" class="input-field" placeholder="your@email.com" required />
          </div>
          <div>
            <div class="flex justify-between mb-2">
              <label class="text-sm font-semibold text-forest-900 bangla">{{ t('auth.password') }}</label>
              <a href="#" class="text-sm text-forest-600 hover:text-forest-800 bangla">পাসওয়ার্ড ভুলে গেছেন?</a>
            </div>
            <div class="relative">
              <input v-model="form.password" :type="showPass ? 'text' : 'password'" class="input-field pr-12" placeholder="••••••••" required />
              <button type="button" @click="showPass = !showPass" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg v-if="!showPass" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
              </button>
            </div>
          </div>
          <button type="submit" :disabled="authStore.loading" class="btn-primary w-full justify-center py-4 text-base bangla">
            <svg v-if="authStore.loading" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            {{ authStore.loading ? 'লগইন হচ্ছে...' : t('auth.loginBtn') }}
          </button>
        </form>

        <div class="text-center mt-6">
          <p class="text-gray-500 bangla text-sm">
            {{ t('auth.noAccount') }}
            <RouterLink to="/register" class="text-forest-600 hover:text-forest-800 font-semibold transition-colors">নিবন্ধন করুন</RouterLink>
          </p>
        </div>

        <!-- Demo credentials hint -->
        <div class="mt-6 p-4 bg-forest-50 rounded-xl text-center">
          <p class="text-xs text-forest-600 bangla">যেকোনো ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করুন (ডেমো)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/store/modules/auth'
import { toast } from 'vue3-toastify'
import logoUrl from '@/assets/logo.png'

const { t } = useI18n()
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const showPass = ref(false)
const form = reactive({ email: '', password: '' })

async function handleLogin() {
  const result = await authStore.login(form)
  if (result.success) {
    toast.success('সফলভাবে লগইন হয়েছে! 🌿')
    router.push(route.query.redirect || '/dashboard')
  } else {
    toast.error('লগইন ব্যর্থ হয়েছে')
  }
}
</script>
