<template>
  <div class="min-h-screen bg-gradient-to-br from-forest-900 to-forest-800 flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <RouterLink to="/" class="inline-flex items-center gap-3">
          <img
            :src="logoUrl"
            alt="Safe Food Movement"
            class="w-14 h-14 rounded-full object-contain bg-cream-100 shadow-lg ring-1 ring-white/10"
          />
          <div class="text-left">
            <div class="font-display font-bold text-2xl text-white">Safe Food Movement</div>
            <div class="text-forest-400 text-sm">সুস্থ্যতার জন্য নিরাপদ খাদ্য</div>
          </div>
        </RouterLink>
      </div>

      <div class="bg-white rounded-3xl shadow-2xl p-8">
        <h1 class="font-display text-2xl font-bold text-forest-900 bangla mb-2 text-center">{{ t('auth.registerTitle') }}</h1>
        <p class="text-gray-500 bangla text-sm text-center mb-8">Safe Food Movement পরিবারে যোগ দিন 🌿</p>

        <form @submit.prevent="handleRegister" class="space-y-5">
          <div>
            <label class="block text-sm font-semibold text-forest-900 bangla mb-2">{{ t('auth.name') }}</label>
            <input v-model="form.name" type="text" class="input-field" placeholder="আপনার পূর্ণ নাম" required />
          </div>
          <div>
            <label class="block text-sm font-semibold text-forest-900 bangla mb-2">{{ t('auth.phone') }}</label>
            <input v-model="form.phone" type="tel" class="input-field" placeholder="+880 1700 000000" required />
          </div>
          <div>
            <label class="block text-sm font-semibold text-forest-900 bangla mb-2">{{ t('auth.email') }}</label>
            <input v-model="form.email" type="email" class="input-field" placeholder="your@email.com" required />
          </div>
          <div>
            <label class="block text-sm font-semibold text-forest-900 bangla mb-2">{{ t('auth.password') }}</label>
            <input v-model="form.password" type="password" class="input-field" placeholder="কমপক্ষে ৮ অক্ষর" required minlength="8" />
          </div>
          <div class="flex items-start gap-2">
            <input v-model="agreed" type="checkbox" id="agree" class="mt-1 w-4 h-4 text-forest-600 rounded" required />
            <label for="agree" class="text-sm text-gray-600 bangla">
              আমি <a href="#" class="text-forest-600 hover:underline">ব্যবহারের শর্তাবলী</a> ও
              <a href="#" class="text-forest-600 hover:underline">গোপনীয়তা নীতি</a> মেনে চলতে সম্মত
            </label>
          </div>
          <button type="submit" :disabled="authStore.loading || !agreed" class="btn-primary w-full justify-center py-4 text-base bangla disabled:opacity-50">
            <svg v-if="authStore.loading" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            {{ authStore.loading ? 'নিবন্ধন হচ্ছে...' : t('auth.registerBtn') }}
          </button>
        </form>

        <div class="text-center mt-6">
          <p class="text-gray-500 bangla text-sm">
            {{ t('auth.hasAccount') }}
            <RouterLink to="/login" class="text-forest-600 hover:text-forest-800 font-semibold transition-colors">লগইন করুন</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/store/modules/auth'
import { toast } from 'vue3-toastify'
import logoUrl from '@/assets/logo.png'

const { t } = useI18n()
const authStore = useAuthStore()
const router = useRouter()
const agreed = ref(false)
const form = reactive({ name: '', phone: '', email: '', password: '' })

async function handleRegister() {
  const result = await authStore.register(form)
  if (result.success) {
    toast.success('সফলভাবে নিবন্ধন হয়েছে! 🎉')
    router.push('/dashboard')
  } else {
    toast.error('নিবন্ধন ব্যর্থ হয়েছে')
  }
}
</script>
