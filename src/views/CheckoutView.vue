<template>
  <div class="bg-forest-900 min-h-screen pt-24 pb-16">
    <div class="container mx-auto px-4 lg:px-8 max-w-5xl">
      <h1 class="font-display text-3xl font-bold text-forest-900 bangla mb-8">চেকআউট</h1>

      <div v-if="!orderPlaced" class="grid lg:grid-cols-3 gap-8">
        <!-- Shipping Form -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Shipping Info -->
          <div class="bg-white rounded-2xl p-6 shadow-md">
            <h3 class="font-display text-lg font-bold text-forest-900 bangla mb-5 flex items-center gap-2">
              <span class="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center text-forest-700 text-sm font-bold">১</span>
              ডেলিভারি তথ্য
            </h3>
            <div class="space-y-4">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-forest-900 bangla mb-2">পূর্ণ নাম *</label>
                  <input v-model="shipping.name" type="text" class="input-field" placeholder="আপনার নাম" required />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-forest-900 bangla mb-2">ফোন নম্বর *</label>
                  <input v-model="shipping.phone" type="tel" class="input-field" placeholder="+880 1700 000000" required />
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-forest-900 bangla mb-2">ইমেইল</label>
                <input v-model="shipping.email" type="email" class="input-field" placeholder="example@email.com" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-forest-900 bangla mb-2">ডেলিভারি ঠিকানা *</label>
                <textarea v-model="shipping.address" rows="3" class="input-field resize-none" placeholder="বাড়ি/ফ্ল্যাট নম্বর, রাস্তা, এলাকা..." required></textarea>
              </div>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-forest-900 bangla mb-2">জেলা *</label>
                  <select v-model="shipping.district" class="input-field bangla" required>
                    <option value="">জেলা নির্বাচন করুন</option>
                    <option v-for="d in districts" :key="d" :value="d">{{ d }}</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-forest-900 bangla mb-2">পোস্ট কোড</label>
                  <input v-model="shipping.postcode" type="text" class="input-field" placeholder="৪০০০" />
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="bg-white rounded-2xl p-6 shadow-md">
            <h3 class="font-display text-lg font-bold text-forest-900 bangla mb-5 flex items-center gap-2">
              <span class="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center text-forest-700 text-sm font-bold">২</span>
              পেমেন্ট পদ্ধতি
            </h3>
            <div class="grid grid-cols-2 gap-3">
              <button
                v-for="method in paymentMethods"
                :key="method.id"
                @click="selectedPayment = method.id"
                class="flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left"
                :class="selectedPayment === method.id
                  ? 'border-forest-500 bg-forest-50'
                  : 'border-gray-200 hover:border-forest-300'"
              >
                <span class="text-2xl">{{ method.icon }}</span>
                <div>
                  <p class="font-semibold text-sm bangla text-forest-900">{{ method.name }}</p>
                  <p class="text-xs text-gray-400 bangla">{{ method.desc }}</p>
                </div>
              </button>
            </div>
          </div>

          <!-- Order Notes -->
          <div class="bg-white rounded-2xl p-6 shadow-md">
            <h3 class="font-display text-lg font-bold text-forest-900 bangla mb-4 flex items-center gap-2">
              <span class="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center text-forest-700 text-sm font-bold">৩</span>
              বিশেষ নির্দেশনা (ঐচ্ছিক)
            </h3>
            <textarea v-model="orderNotes" rows="3" class="input-field resize-none" placeholder="ডেলিভারি সম্পর্কে কোনো বিশেষ নির্দেশনা..."></textarea>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="space-y-4">
          <div class="bg-white rounded-2xl p-6 shadow-md sticky top-24">
            <h3 class="font-display text-xl font-bold text-forest-900 bangla mb-5">অর্ডার সারসংক্ষেপ</h3>
            <div class="space-y-3 max-h-52 overflow-y-auto mb-4">
              <div v-for="item in cartStore.items" :key="item.id" class="flex gap-3">
                <img :src="item.image" :alt="item.name" class="w-12 h-12 rounded-xl object-cover shrink-0" />
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-forest-900 bangla line-clamp-1">{{ item.name }}</p>
                  <p class="text-xs text-gray-400 bangla">{{ item.quantity }}x ৳{{ item.price }}</p>
                </div>
                <p class="text-sm font-bold text-forest-900 bangla">৳{{ (item.price * item.quantity).toLocaleString() }}</p>
              </div>
            </div>
            <div class="border-t border-forest-100 pt-4 space-y-2">
              <div class="flex justify-between bangla text-sm">
                <span class="text-gray-500">সাবটোটাল</span>
                <span>৳{{ cartStore.total.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between bangla text-sm">
                <span class="text-gray-500">ডেলিভারি</span>
                <span class="text-green-600">বিনামূল্যে</span>
              </div>
              <div class="flex justify-between bangla font-bold text-lg pt-2 border-t border-forest-100">
                <span>মোট</span>
                <span class="font-display text-xl text-forest-900">৳{{ cartStore.total.toLocaleString() }}</span>
              </div>
            </div>
            <button @click="placeOrder" :disabled="placing" class="btn-primary w-full justify-center mt-5 py-4 text-base bangla">
              <svg v-if="placing" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              {{ placing ? 'প্রক্রিয়া করা হচ্ছে...' : 'অর্ডার দিন' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Order Success -->
      <div v-else class="text-center py-20">
        <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">✅</div>
        <h2 class="font-display text-3xl font-bold text-forest-900 bangla mb-3">অর্ডার সফলভাবে দেওয়া হয়েছে!</h2>
        <p class="text-gray-500 bangla mb-2">অর্ডার নং: <strong class="text-forest-800">#TF{{ orderNumber }}</strong></p>
        <p class="text-gray-500 bangla mb-8">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
        <div class="flex gap-4 justify-center">
          <RouterLink to="/dashboard/orders" class="btn-primary">অর্ডার ট্র্যাক করুন</RouterLink>
          <RouterLink to="/products" class="btn-secondary">কেনাকাটা চালিয়ে যান</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/store/modules/cart'
import { toast } from 'vue3-toastify'

const cartStore = useCartStore()
const placing = ref(false)
const orderPlaced = ref(false)
const orderNumber = ref('')
const orderNotes = ref('')
const selectedPayment = ref('bkash')

const shipping = reactive({ name: '', phone: '', email: '', address: '', district: '', postcode: '' })

const districts = ['ঢাকা', 'চট্টগ্রাম', 'রাজশাহী', 'খুলনা', 'সিলেট', 'বরিশাল', 'ময়মনসিংহ', 'রংপুর', 'কুমিল্লা']

const paymentMethods = [
  { id: 'bkash', name: 'bKash', icon: '💚', desc: 'মোবাইল ব্যাংকিং' },
  { id: 'nagad', name: 'Nagad', icon: '🧡', desc: 'মোবাইল ব্যাংকিং' },
  { id: 'rocket', name: 'Rocket', icon: '💜', desc: 'DBBL Mobile Banking' },
  { id: 'cod', name: 'ক্যাশ অন ডেলিভারি', icon: '💵', desc: 'পণ্য পেয়ে টাকা দিন' },
]

async function placeOrder() {
  if (!shipping.name || !shipping.phone || !shipping.address || !shipping.district) {
    toast.error('সকল প্রয়োজনীয় তথ্য পূরণ করুন')
    return
  }
  placing.value = true
  await new Promise(r => setTimeout(r, 2000))
  placing.value = false
  orderPlaced.value = true
  orderNumber.value = Math.random().toString(36).substr(2, 6).toUpperCase()
  cartStore.clearCart()
}
</script>
