<template>
  <div>
    <PageHero
      title="যোগাযোগ করুন"
      subtitle="আমাদের সাথে কথা বলুন। আপনার যেকোনো প্রশ্ন বা পরামর্শে আমরা সদা প্রস্তুত।"
      tag="যোগাযোগ"
      tagIcon="📞"
      :breadcrumbs="[{ label: 'যোগাযোগ' }]"
    />

    <section class="py-16 bg-[#fafaf7]">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-10">
          <!-- Contact Info -->
          <div class="space-y-6">
            <div>
              <h2 class="font-display text-2xl font-bold text-forest-900 bangla mb-2">সরাসরি যোগাযোগ</h2>
              <p class="text-gray-500 bangla text-sm">যেকোনো সমস্যায় আমরা আছি।</p>
            </div>

            <div v-for="info in contactInfoList" :key="info.title" class="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md">
              <div class="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center shrink-0 text-2xl">
                {{ info.icon }}
              </div>
              <div>
                <h4 class="font-semibold text-forest-900 bangla mb-1">{{ info.title }}</h4>
                <p class="text-gray-500 bangla text-sm">{{ info.value }}</p>
              </div>
            </div>

            <!-- Social Links -->
            <div class="bg-white rounded-2xl p-5 shadow-md">
              <h4 class="font-semibold text-forest-900 bangla mb-3">সোশ্যাল মিডিয়া</h4>
              <div class="flex gap-3">
                <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank"
                  class="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all bangla"
                  :class="s.colorClass">
                  {{ s.icon }} {{ s.name }}
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <h2 class="font-display text-2xl font-bold text-forest-900 bangla mb-2">বার্তা পাঠান</h2>
              <p class="text-gray-500 bangla text-sm mb-8">আমরা ২৪ ঘণ্টার মধ্যে উত্তর দেওয়ার চেষ্টা করি।</p>

              <form @submit.prevent="submitForm" class="space-y-5">
                <div class="grid md:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-semibold text-forest-900 bangla mb-2">আপনার নাম *</label>
                    <input v-model="form.name" type="text" class="input-field" placeholder="আপনার পূর্ণ নাম" required />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-forest-900 bangla mb-2">ইমেইল *</label>
                    <input v-model="form.email" type="email" class="input-field" placeholder="example@email.com" required />
                  </div>
                </div>
                <div class="grid md:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-semibold text-forest-900 bangla mb-2">ফোন নম্বর</label>
                    <input v-model="form.phone" type="tel" class="input-field" placeholder="+880 1700 000000" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-forest-900 bangla mb-2">বিষয়</label>
                    <select v-model="form.subject" class="input-field bangla">
                      <option value="">বিষয় নির্বাচন করুন</option>
                      <option value="order">অর্ডার সম্পর্কিত</option>
                      <option value="product">পণ্য সম্পর্কিত</option>
                      <option value="entrepreneur">উদ্যোক্তা হওয়া</option>
                      <option value="partnership">অংশীদারিত্ব</option>
                      <option value="other">অন্যান্য</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-forest-900 bangla mb-2">বার্তা *</label>
                  <textarea v-model="form.message" rows="5" class="input-field resize-none" placeholder="আপনার বার্তা লিখুন..." required></textarea>
                </div>

                <button type="submit" :disabled="submitting" class="btn-primary w-full justify-center py-4 text-base bangla">
                  <svg v-if="submitting" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {{ submitting ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান' }}
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Map Placeholder -->
        <div class="mt-10 bg-white rounded-3xl overflow-hidden shadow-xl h-80 animate-on-scroll relative">
          <div class="w-full h-full bg-gradient-to-br from-forest-100 to-forest-200 flex flex-col items-center justify-center gap-4">
            <div class="text-6xl">🗺️</div>
            <div class="text-center">
              <p class="font-display text-xl font-bold text-forest-900 bangla">আমাদের অবস্থান</p>
              <p class="text-forest-600 bangla text-sm mt-1">রোড ৫, বাড়ি ১২, দিনাজপুর, বাংলাদেশ</p>
              <a href="https://goo.gl/maps/example" target="_blank" class="btn-primary text-sm mt-4 inline-flex">Google Maps-এ দেখুন</a>
            </div>
          </div>
          <!-- For production: replace with actual Google Maps embed -->
          <!-- <iframe src="https://www.google.com/maps/embed?..." class="w-full h-full border-0" allowfullscreen loading="lazy" /> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import PageHero from '@/components/common/PageHero.vue'
import { toast } from 'vue3-toastify'

const submitting = ref(false)
const form = reactive({ name: '', email: '', phone: '', subject: '', message: '' })

const contactInfoList = [
  { icon: '📍', title: 'ঠিকানা', value: 'রোড ৫, বাড়ি ১২, দিনাজপুর, বাংলাদেশ' },
  { icon: '📞', title: 'ফোন', value: '+880 1670-394056 (সকাল ৯টা - রাত ৯টা)' },
  { icon: '📧', title: 'ইমেইল', value: 'info@safefoodmovement.com' },
  { icon: '⏰', title: 'কার্যসময়', value: 'শনিবার - বৃহস্পতিবার, সকাল ৯টা - রাত ৯টা' },
]

const socials = [
  { name: 'Facebook', icon: '👍', url: '#', colorClass: 'bg-blue-50 text-blue-700 hover:bg-blue-100' },
  { name: 'WhatsApp', icon: '💬', url: '#', colorClass: 'bg-green-50 text-green-700 hover:bg-green-100' },
]

async function submitForm() {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  submitting.value = false
  toast.success('আপনার বার্তা পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব। 🌿')
  Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '' })
}
</script>
