<template>
  <div class="bg-[#fafaf7] min-h-screen pt-24 pb-16">
    <div class="container mx-auto px-4 lg:px-8">
      <h1 class="font-display text-3xl font-bold text-forest-900 bangla mb-2">আপনার কার্ট</h1>
      <p class="text-gray-500 bangla text-sm mb-8">{{ cartStore.itemCount }} টি পণ্য</p>

      <div v-if="!cartStore.isEmpty" class="grid lg:grid-cols-3 gap-8">
        <!-- Items -->
        <div class="lg:col-span-2 space-y-4">
          <TransitionGroup name="cart-list">
            <div v-for="item in cartStore.items" :key="item.id" class="bg-white rounded-2xl p-5 shadow-md flex gap-4">
              <img :src="item.image" :alt="item.name" class="w-24 h-24 object-cover rounded-xl shrink-0" />
              <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-forest-900 bangla">{{ item.name }}</h3>
                <p class="text-xs text-gray-400 bangla mt-0.5">{{ item.weight }}</p>
                <div class="flex items-center justify-between mt-4">
                  <div class="flex items-center border border-forest-200 rounded-full overflow-hidden">
                    <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)" class="w-9 h-9 flex items-center justify-center text-forest-600 hover:bg-forest-50 transition-colors">−</button>
                    <span class="w-9 text-center text-sm font-bold">{{ item.quantity }}</span>
                    <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)" class="w-9 h-9 flex items-center justify-center text-forest-600 hover:bg-forest-50 transition-colors">+</button>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="font-bold text-forest-900">৳{{ (item.price * item.quantity).toLocaleString() }}</span>
                    <button @click="cartStore.removeItem(item.id)" class="text-red-400 hover:text-red-600 transition-colors">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
          <!-- Continue Shopping -->
          <RouterLink to="/products" class="inline-flex items-center gap-2 text-forest-600 hover:text-forest-800 bangla text-sm font-semibold transition-colors mt-2">
            ← কেনাকাটা চালিয়ে যান
          </RouterLink>
        </div>

        <!-- Summary -->
        <div class="space-y-4">
          <div class="bg-white rounded-2xl p-6 shadow-md">
            <h3 class="font-display text-xl font-bold text-forest-900 bangla mb-4">অর্ডার সারসংক্ষেপ</h3>
            <div class="space-y-3">
              <div class="flex justify-between bangla text-sm">
                <span class="text-gray-500">পণ্যের মূল্য</span>
                <span>৳{{ cartStore.total.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between bangla text-sm">
                <span class="text-gray-500">ডেলিভারি চার্জ</span>
                <span class="text-green-600">বিনামূল্যে</span>
              </div>
              <div class="flex justify-between bangla text-sm">
                <span class="text-gray-500">ডিসকাউন্ট</span>
                <span class="text-red-500">- ৳{{ discount.toLocaleString() }}</span>
              </div>
            </div>
            <div class="border-t border-forest-100 mt-4 pt-4 flex justify-between">
              <span class="font-bold text-forest-900 bangla">মোট</span>
              <span class="font-display text-2xl font-extrabold text-forest-900">৳{{ finalTotal.toLocaleString() }}</span>
            </div>

            <!-- Coupon -->
            <div class="mt-4">
              <div class="flex gap-2">
                <input v-model="coupon" type="text" placeholder="কুপন কোড" class="input-field text-sm py-2 flex-1" />
                <button @click="applyCoupon" class="btn-secondary text-sm py-2 px-4">প্রয়োগ</button>
              </div>
            </div>

            <RouterLink to="/checkout" class="btn-primary w-full justify-center mt-5 py-4 text-base bangla">
              চেকআউটে যান →
            </RouterLink>
          </div>

          <!-- Secure badges -->
          <div class="bg-forest-50 rounded-xl p-4">
            <p class="text-center text-xs text-gray-500 bangla mb-3">নিরাপদ পেমেন্ট</p>
            <div class="flex justify-center gap-4 text-2xl">
              <span title="SSL Secured">🔒</span>
              <span title="bKash">💚</span>
              <span title="Nagad">🧡</span>
              <span title="Rocket">💜</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-else class="text-center py-24">
        <div class="text-7xl mb-6">🛒</div>
        <h2 class="font-display text-3xl text-forest-900 bangla mb-3">কার্ট খালি</h2>
        <p class="text-gray-500 bangla mb-8">কোনো পণ্য যোগ করা হয়নি।</p>
        <RouterLink to="/products" class="btn-primary text-base px-10 py-4">পণ্য দেখুন</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/store/modules/cart'
import { toast } from 'vue3-toastify'

const cartStore = useCartStore()
const coupon = ref('')
const discount = ref(0)
const finalTotal = computed(() => cartStore.total - discount.value)

function applyCoupon() {
  if (coupon.value.toUpperCase() === 'TARABAN10') {
    discount.value = Math.round(cartStore.total * 0.1)
    toast.success('কুপন কোড প্রয়োগ হয়েছে! ১০% ছাড় পেয়েছেন 🎉')
  } else {
    toast.error('অবৈধ কুপন কোড')
  }
}
</script>

<style scoped>
.cart-list-enter-active, .cart-list-leave-active { transition: all 0.3s ease; }
.cart-list-enter-from { opacity: 0; transform: translateX(20px); }
.cart-list-leave-to { opacity: 0; transform: translateX(-20px); }
</style>
