<template>
  <div class="bg-white rounded-2xl shadow-md p-6 md:p-8">
    <h1 class="font-display text-2xl font-bold text-forest-900 bangla mb-6">প্রোফাইল সম্পাদনা</h1>

    <form @submit.prevent="saveProfile" class="space-y-6">
      <!-- Avatar -->
      <div class="flex items-center gap-6">
        <div class="w-20 h-20 rounded-full bg-forest-200 flex items-center justify-center text-forest-700 text-3xl font-bold overflow-hidden shrink-0">
          <img v-if="form.avatar" :src="form.avatar" class="w-full h-full object-cover" alt="Avatar" />
          <span v-else>{{ form.name?.[0] || 'U' }}</span>
        </div>
        <div>
          <p class="font-semibold text-forest-900 bangla text-sm mb-1">প্রোফাইল ছবি</p>
          <p class="text-xs text-gray-400 bangla mb-2">JPG, PNG - সর্বোচ্চ 2MB</p>
          <button type="button" class="btn-secondary text-xs py-1.5 px-4">ছবি পরিবর্তন করুন</button>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-5">
        <div>
          <label class="block text-sm font-semibold text-forest-900 bangla mb-2">পূর্ণ নাম *</label>
          <input v-model="form.name" type="text" class="input-field" placeholder="আপনার নাম" required />
        </div>
        <div>
          <label class="block text-sm font-semibold text-forest-900 bangla mb-2">ফোন নম্বর</label>
          <input v-model="form.phone" type="tel" class="input-field" placeholder="+880 1700 000000" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-forest-900 bangla mb-2">ইমেইল *</label>
          <input v-model="form.email" type="email" class="input-field" placeholder="email@example.com" required />
        </div>
        <div>
          <label class="block text-sm font-semibold text-forest-900 bangla mb-2">জন্ম তারিখ</label>
          <input v-model="form.dob" type="date" class="input-field" />
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-forest-900 bangla mb-2">ডেলিভারি ঠিকানা</label>
        <textarea v-model="form.address" rows="3" class="input-field resize-none" placeholder="বাড়ি/ফ্ল্যাট নম্বর, রাস্তা, এলাকা, জেলা..."></textarea>
      </div>

      <!-- Change Password -->
      <div class="border-t border-forest-100 pt-6">
        <h3 class="font-semibold text-forest-900 bangla mb-4">পাসওয়ার্ড পরিবর্তন</h3>
        <div class="grid md:grid-cols-2 gap-5">
          <div>
            <label class="block text-sm font-semibold text-forest-900 bangla mb-2">বর্তমান পাসওয়ার্ড</label>
            <input v-model="form.currentPass" type="password" class="input-field" placeholder="••••••••" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-forest-900 bangla mb-2">নতুন পাসওয়ার্ড</label>
            <input v-model="form.newPass" type="password" class="input-field" placeholder="••••••••" />
          </div>
        </div>
      </div>

      <div class="flex gap-4 pt-2">
        <button type="submit" :disabled="saving" class="btn-primary px-8 bangla">
          <svg v-if="saving" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          {{ saving ? 'সংরক্ষণ হচ্ছে...' : '✅ পরিবর্তন সংরক্ষণ করুন' }}
        </button>
        <button type="button" @click="resetForm" class="btn-secondary px-8 bangla">বাতিল করুন</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useAuthStore } from '@/store/modules/auth'
import { toast } from 'vue3-toastify'

const authStore = useAuthStore()
const saving = ref(false)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  dob: '',
  address: '',
  avatar: '',
  currentPass: '',
  newPass: '',
})

function loadUser() {
  const u = authStore.user
  if (u) {
    form.name = u.name || ''
    form.phone = u.phone || ''
    form.email = u.email || ''
    form.dob = u.dob || ''
    form.address = u.address || ''
    form.avatar = u.avatar || ''
  }
}

function resetForm() {
  loadUser()
  form.currentPass = ''
  form.newPass = ''
}

async function saveProfile() {
  saving.value = true
  await new Promise(r => setTimeout(r, 1200))
  authStore.updateProfile({
    name: form.name,
    phone: form.phone,
    email: form.email,
    dob: form.dob,
    address: form.address,
  })
  saving.value = false
  toast.success('প্রোফাইল সফলভাবে আপডেট হয়েছে! ✅')
}

onMounted(loadUser)
</script>
