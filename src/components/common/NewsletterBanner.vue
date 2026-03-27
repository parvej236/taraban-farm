<template>
  <div class="bg-gradient-to-br from-forest-800 to-forest-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
    <!-- Decorative blobs -->
    <div class="absolute top-0 right-0 w-48 h-48 bg-forest-600/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
    <div class="absolute bottom-0 left-0 w-32 h-32 bg-earth-600/20 rounded-full blur-xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

    <div class="relative flex flex-col md:flex-row items-center gap-6">
      <div class="flex-1 text-center md:text-left">
        <span class="text-3xl">📬</span>
        <h3 class="font-display text-2xl font-bold mt-2 bangla">{{ title }}</h3>
        <p class="text-forest-300 bangla text-sm mt-1 leading-relaxed">{{ subtitle }}</p>
      </div>
      <form @submit.prevent="subscribe" class="flex gap-3 w-full md:w-auto">
        <input
          v-model="email"
          type="email"
          :placeholder="placeholder"
          class="flex-1 md:w-64 px-4 py-3 rounded-full bg-forest-700 border border-forest-600 text-white placeholder-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400 bangla text-sm"
          required
        />
        <button type="submit" :disabled="submitted" class="btn-accent whitespace-nowrap text-sm bangla">
          <svg v-if="submitted" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {{ submitted ? 'সম্পন্ন!' : 'সাবস্ক্রাইব' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

defineProps({
  title: { type: String, default: 'নিউজলেটার সাবস্ক্রাইব করুন' },
  subtitle: { type: String, default: 'প্রতি সপ্তাহে স্বাস্থ্য টিপস ও বিশেষ অফার পান।' },
  placeholder: { type: String, default: 'আপনার ইমেইল দিন' },
})

const email = ref('')
const submitted = ref(false)

async function subscribe() {
  if (!email.value) return
  submitted.value = true
  await new Promise(r => setTimeout(r, 1000))
  toast.success('সাবস্ক্রাইব করার জন্য ধন্যবাদ! 🌿')
  email.value = ''
  setTimeout(() => { submitted.value = false }, 3000)
}
</script>
