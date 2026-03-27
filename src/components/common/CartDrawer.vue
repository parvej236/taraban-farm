<template>
  <!-- Backdrop -->
  <Transition name="fade">
    <div v-if="cartStore.isOpen" class="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" @click="cartStore.closeDrawer()" />
  </Transition>

  <!-- Drawer -->
  <Transition name="slide-right">
    <div v-if="cartStore.isOpen" class="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-forest-100 bg-forest-50">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-forest-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 class="font-display text-lg font-bold text-forest-900 bangla">{{ t('cart.title') }}</h2>
          <span v-if="cartStore.itemCount > 0" class="badge badge-organic">{{ cartStore.itemCount }}</span>
        </div>
        <button @click="cartStore.closeDrawer()" class="p-2 rounded-full hover:bg-forest-100 transition-colors">
          <svg class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Items -->
      <div class="flex-1 overflow-y-auto px-6 py-4">
        <!-- Empty State -->
        <div v-if="cartStore.isEmpty" class="flex flex-col items-center justify-center h-full gap-4 py-12">
          <div class="w-24 h-24 bg-forest-50 rounded-full flex items-center justify-center">
            <svg class="w-12 h-12 text-forest-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p class="font-display text-xl text-gray-400 bangla">{{ t('cart.empty') }}</p>
          <button @click="goToProducts" class="btn-primary">
            {{ t('cart.continue') }}
          </button>
        </div>

        <!-- Cart Items -->
        <TransitionGroup name="cart-item" tag="div" class="space-y-4">
          <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="flex gap-4 p-4 bg-forest-50 rounded-2xl"
          >
            <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-xl flex-shrink-0" />
            <div class="flex-1 min-w-0">
              <h4 class="font-semibold text-forest-900 bangla text-sm leading-tight">{{ item.name }}</h4>
              <p class="text-xs text-gray-500 mt-0.5">{{ item.weight }}</p>
              <div class="flex items-center justify-between mt-3">
                <div class="flex items-center border border-forest-200 rounded-full overflow-hidden bg-white">
                  <button
                    @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                    class="w-8 h-8 flex items-center justify-center text-forest-600 hover:bg-forest-50 transition-colors"
                  >−</button>
                  <span class="w-8 text-center text-sm font-semibold">{{ item.quantity }}</span>
                  <button
                    @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                    class="w-8 h-8 flex items-center justify-center text-forest-600 hover:bg-forest-50 transition-colors"
                  >+</button>
                </div>
                <span class="font-bold text-forest-800">৳{{ (item.price * item.quantity).toLocaleString() }}</span>
              </div>
            </div>
            <button @click="cartStore.removeItem(item.id)" class="self-start p-1 hover:text-red-500 transition-colors text-gray-400">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </TransitionGroup>
      </div>

      <!-- Footer -->
      <div v-if="!cartStore.isEmpty" class="border-t border-forest-100 px-6 py-6 bg-white">
        <div class="flex justify-between items-center mb-4">
          <span class="text-gray-600 bangla font-medium">{{ t('cart.total') }}</span>
          <span class="font-display text-2xl font-bold text-forest-900">৳{{ cartStore.total.toLocaleString() }}</span>
        </div>
        <RouterLink
          to="/checkout"
          @click="cartStore.closeDrawer()"
          class="btn-primary w-full justify-center text-base py-4"
        >
          {{ t('cart.checkout') }}
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
        <button @click="goToCart" class="w-full mt-2 text-center text-sm text-forest-600 hover:text-forest-800 py-2 bangla transition-colors">
          কার্ট দেখুন
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useCartStore } from '@/store/modules/cart'

const { t } = useI18n()
const cartStore = useCartStore()
const router = useRouter()

function goToProducts() {
  cartStore.closeDrawer()
  router.push('/products')
}

function goToCart() {
  cartStore.closeDrawer()
  router.push('/cart')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-right-enter-active, .slide-right-leave-active { transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
.slide-right-enter-from, .slide-right-leave-to { transform: translateX(100%); }

.cart-item-enter-active, .cart-item-leave-active { transition: all 0.3s ease; }
.cart-item-enter-from { opacity: 0; transform: translateX(20px); }
.cart-item-leave-to { opacity: 0; transform: translateX(-20px); }
</style>
