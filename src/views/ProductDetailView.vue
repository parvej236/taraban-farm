<template>
  <div v-if="product" class="min-h-screen overflow-x-hidden"
    style="background: linear-gradient(135deg, #f0fdf4 0%, #fefce8 50%, #f0fdfa 100%);">

    <!-- Breadcrumb -->
    <div class="pt-20 bg-forest-800 text-white">
      <div class="container mx-auto px-4 lg:px-8 py-3 sm:py-4 max-w-full">
        <nav class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm bangla min-w-0">
          <RouterLink to="/" class="hover:text-green-600 transition-colors shrink-0">হোম</RouterLink>
          <span class="text-gray-300 shrink-0">/</span>
          <RouterLink to="/products" class="hover:text-green-600 transition-colors shrink-0">পণ্যসমূহ</RouterLink>
          <span class="text-gray-300 shrink-0">/</span>
          <span class="font-medium min-w-0 break-words text-gray-100">{{ product.name }}</span>
        </nav>
      </div>
    </div>

    <!-- Product Section -->
    <section class="py-6 sm:py-10">
      <div class="container mx-auto px-4 lg:px-8 max-w-full min-w-0">
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start min-w-0">

          <!-- ── Image Gallery ── -->
          <div class="space-y-3 min-w-0 w-full max-w-full">
            <!-- Main image with lightbox trigger -->
            <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square cursor-zoom-in group shadow-xl max-w-full"
              style="background: rgba(255,255,255,0.8); border: 1px solid rgba(255,255,255,0.9);"
              @click="lightboxOpen = true">
              <img :src="displayImage" :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 max-w-full" />
              <!-- Zoom hint -->
              <div
                class="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style="background: rgba(0,0,0,0.45); backdrop-filter: blur(8px);">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                বড় করে দেখুন
              </div>
              <!-- Discount badge -->
              <div v-if="product.originalPrice > product.price"
                class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                style="background: linear-gradient(135deg, #ef4444, #dc2626);">
                {{ Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) }}% ছাড়
              </div>
            </div>

            <!-- Thumbnails -->
            <div class="flex gap-2 sm:gap-3 overflow-x-auto pb-1 -mx-1 px-1 scroll-ps-2 snap-x snap-mandatory touch-pan-x">
              <button v-for="(img, i) in allImages" :key="i" @click="selectedImg = img"
                class="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all duration-200 hover:scale-105 snap-start"
                :style="displayImage === img
                  ? 'border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22,163,74,0.15);'
                  : 'border-color: transparent; opacity: 0.65;'">
                <img :src="img" :alt="`${product.name} ${i + 1}`" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          <!-- ── Product Details ── -->
          <div class="space-y-5 min-w-0 max-w-full">

            <!-- Badges & Title -->
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bangla text-green-700"
                  style="background: linear-gradient(135deg, #dcfce7, #bbf7d0);">
                  {{ categoryLabel }}
                </span>
                <span v-if="product.badge" class="px-3 py-1 rounded-full text-xs font-semibold bangla text-amber-700"
                  style="background: linear-gradient(135deg, #fef9c3, #fde68a);">
                  {{ product.badge }}
                </span>
                <span v-if="product.inStock"
                  class="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-emerald-700"
                  style="background: rgba(16,185,129,0.1);">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
                  স্টকে আছে
                </span>
              </div>
              <h1 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 bangla leading-tight break-words">
                {{ product.name }}
              </h1>
              <p class="text-gray-400 mt-1 text-sm break-words">{{ product.nameEn }}</p>
            </div>

            <!-- Rating -->
            <div class="flex flex-wrap items-center gap-2 sm:gap-3">
              <div class="flex gap-0.5">
                <svg v-for="i in 5" :key="i" class="w-4 h-4"
                  :style="i <= Math.round(product.rating) ? 'color:#f59e0b' : 'color:#e5e7eb'" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="font-bold text-gray-700 text-sm">{{ product.rating }}</span>
              <span class="text-gray-400 bangla text-xs">({{ product.reviewCount }} টি রিভিউ)</span>
            </div>

            <!-- Price -->
            <div class="rounded-2xl p-3 sm:p-4 min-w-0"
              style="background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,253,244,0.8)); border: 1px solid rgba(255,255,255,0.9); box-shadow: 0 2px 12px rgba(34,197,94,0.06);">
              <div class="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-1">
                <span class="text-3xl sm:text-4xl font-extrabold text-gray-800 tabular-nums">৳{{ product.price }}</span>
                <span v-if="product.originalPrice > product.price" class="text-base sm:text-lg text-gray-400 line-through tabular-nums">
                  ৳{{ product.originalPrice }}
                </span>
              </div>
              <p class="text-xs text-gray-400 bangla break-words leading-relaxed">পরিমাণ: {{ product.weight }} · কৃষক: {{ product.farmer }}</p>
            </div>

            <!-- Description -->
            <p class="text-gray-500 bangla leading-relaxed text-sm break-words">{{ product.description }}</p>
            <p class="text-gray-500 leading-relaxed text-sm break-words">{{ product.descriptionEn }}</p>

            <!-- Quantity & Cart -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 min-w-0">
              <div class="flex items-center rounded-2xl overflow-hidden border border-gray-200 shrink-0 mx-auto sm:mx-0"
                style="background: rgba(255,255,255,0.9);">
                <button type="button" @click="quantity > 1 && quantity--"
                  class="w-12 h-12 sm:w-11 sm:h-11 flex items-center justify-center text-gray-500 hover:bg-green-50 hover:text-green-600 transition-colors text-lg font-bold">
                  −
                </button>
                <span class="min-w-[2.75rem] text-center font-bold text-gray-700">{{ quantity }}</span>
                <button type="button" @click="quantity++"
                  class="w-12 h-12 sm:w-11 sm:h-11 flex items-center justify-center text-gray-500 hover:bg-green-50 hover:text-green-600 transition-colors text-lg font-bold">
                  +
                </button>
              </div>
              <button type="button" @click="handleAddToCart"
                class="w-full sm:flex-1 min-w-0 flex items-center justify-center gap-2 py-3.5 sm:py-3 px-4 rounded-2xl text-white font-semibold bangla text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style="background: linear-gradient(135deg, #16a34a, #059669); box-shadow: 0 4px 16px rgba(22,163,74,0.25);">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                কার্টে যোগ করুন
              </button>
            </div>
            <RouterLink to="/checkout"
              class="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-semibold bangla text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-2 border-green-500 text-green-700 hover:bg-green-300"
              style="background: rgba(255,255,255,0.8);">
              এখনই কিনুন →
            </RouterLink>

            <!-- Trust Badges -->
            <div class="flex flex-wrap gap-2 pt-1">
              <span v-for="badge in trustBadges" :key="badge"
                class="flex items-center gap-1 text-xs text-green-700 rounded-full px-3 py-1.5 bangla font-medium"
                style="background: linear-gradient(135deg, rgba(220,252,231,0.8), rgba(187,247,208,0.6)); border: 1px solid rgba(134,239,172,0.4);">
                <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                {{ badge }}
              </span>
            </div>
          </div>
        </div>

        <!-- ── Tabs ── -->
        <div class="mt-10 sm:mt-16 min-w-0">
          <div class="flex gap-1 overflow-x-auto pb-px -mx-1 px-1 scroll-pb-1 touch-pan-x" style="border-bottom: 1px solid rgba(34,197,94,0.15);">
            <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key"
              class="px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold bangla whitespace-nowrap transition-all duration-200 rounded-t-lg sm:rounded-t-xl border-b-2 -mb-px shrink-0"
              :style="activeTab === tab.key
                ? 'border-color: #16a34a; color: #15803d; background: rgba(220,252,231,0.5);'
                : 'border-color: transparent; color: #9ca3af;'">
              {{ tab.label }}
            </button>
          </div>

          <div class="rounded-b-2xl rounded-tr-2xl p-4 sm:p-6 mt-0 min-w-0 overflow-x-hidden"
            style="background: rgba(255,255,255,0.85); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.9); border-top: none; box-shadow: 0 8px 32px rgba(34,197,94,0.06);">

            <!-- Nutrition -->
            <div v-if="activeTab === 'nutrition'">
              <h3 class="font-display text-lg font-bold text-gray-700 bangla mb-4">পুষ্টিমান (প্রতি ১০০ গ্রামে)</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div v-for="item in product.nutritionalValue" :key="item.name" class="rounded-xl p-4 border"
                  style="background: linear-gradient(135deg, rgba(240,253,244,0.8), rgba(255,255,255,0.6)); border-color: rgba(134,239,172,0.3);">
                  <p class="text-gray-400 text-xs bangla mb-1">{{ item.name }}</p>
                  <p class="font-bold text-gray-700 bangla text-sm">{{ item.value }}</p>
                </div>
              </div>
            </div>

            <!-- Benefits -->
            <div v-if="activeTab === 'benefits'">
              <h3 class="font-display text-lg font-bold text-gray-700 bangla mb-4">স্বাস্থ্য উপকারিতা</h3>
              <ul class="space-y-3">
                <li v-for="benefit in product.healthBenefits" :key="benefit" class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style="background: linear-gradient(135deg, #dcfce7, #bbf7d0);">
                    <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-600 bangla text-sm leading-relaxed">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- Process -->
            <div v-if="activeTab === 'process'" class="space-y-6">

              <!-- Title -->
              <h3 class="font-display text-xl font-bold text-gray-800 bangla">
                উৎপাদন প্রক্রিয়া
              </h3>

              <!-- Summary -->
              <p
                class="text-gray-600 bangla text-sm leading-relaxed bg-green-50 p-4 rounded-xl border border-green-100">
                {{ product.process.summary }}
              </p>

              <!-- Timeline Steps -->
              <div class="relative border-l-2 border-green-200 pl-4 sm:pl-6 space-y-6 min-w-0">

                <div v-for="(step, index) in product.process.steps" :key="index" class="relative">
                  <!-- Dot -->
                  <div class="absolute -left-[9px] top-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>

                  <!-- Content -->
                  <div class="bg-white shadow-sm rounded-xl p-4 border border-gray-100">
                    <h4 class="font-semibold text-gray-800 bangla text-sm">
                      {{ index + 1 }}. {{ step.title }}
                    </h4>
                    <p class="text-gray-500 text-sm mt-1 bangla leading-relaxed">
                      {{ step.description }}
                    </p>
                  </div>
                </div>

              </div>

              <!-- Certifications -->
              <div v-if="product.process.certifications?.length">
                <h4 class="text-sm font-semibold text-gray-700 mb-2 bangla">
                  বৈশিষ্ট্য
                </h4>

                <div class="flex flex-wrap gap-2">
                  <span v-for="(item, i) in product.process.certifications" :key="i"
                    class="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {{ item }}
                  </span>
                </div>
              </div>

              <!-- Storage + Origin -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                <!-- Storage -->
                <div class="bg-gray-50 p-4 rounded-xl border">
                  <p class="text-xs text-gray-400 mb-1">সংরক্ষণ</p>
                  <p class="text-sm text-gray-700 bangla">
                    {{ product.process.storage }}
                  </p>
                </div>

                <!-- Origin -->
                <div class="bg-gray-50 p-4 rounded-xl border">
                  <p class="text-xs text-gray-400 mb-1">উৎপত্তি</p>
                  <p class="text-sm text-gray-700 bangla">
                    {{ product.process.origin.farm }} <br />
                    {{ product.process.origin.location }}
                  </p>
                </div>

              </div>

            </div>

            <!-- Reviews -->
            <div v-if="activeTab === 'reviews'">
              <h3 class="font-display text-lg font-bold text-gray-700 bangla mb-6">গ্রাহক পর্যালোচনা</h3>
              <div class="space-y-4">
                <div v-for="review in sampleReviews" :key="review.name" class="rounded-2xl p-4"
                  style="background: linear-gradient(135deg, rgba(240,253,244,0.6), rgba(255,255,255,0.5)); border: 1px solid rgba(134,239,172,0.2);">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white"
                      style="background: linear-gradient(135deg, #16a34a, #059669);">
                      {{ review.name[0] }}
                    </div>
                    <div>
                      <p class="font-semibold text-gray-700 bangla text-sm">{{ review.name }}</p>
                      <div class="flex gap-0.5 mt-0.5">
                        <svg v-for="i in review.rating" :key="i" class="w-3 h-3 text-amber-400" fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-500 bangla text-sm leading-relaxed">{{ review.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Products -->
        <div class="mt-10 sm:mt-16 min-w-0">
          <div class="flex items-center gap-3 mb-4 sm:mb-6">
            <div class="w-1 h-6 rounded-full shrink-0" style="background: linear-gradient(180deg, #16a34a, #059669);"></div>
            <h2 class="font-display text-xl sm:text-2xl font-bold text-gray-800 bangla break-words">সম্পর্কিত পণ্যসমূহ</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 min-w-0">
            <ProductCard v-for="p in relatedProducts" :key="p.id" :product="p" />
          </div>
        </div>
      </div>
    </section>

    <!-- ── Lightbox ── -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto overscroll-contain"
          style="background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);" @click.self="lightboxOpen = false">

          <div class="relative max-w-3xl w-full min-w-0 my-auto py-8 sm:py-0">
            <!-- Close — in-viewport on mobile (no negative top offset) -->
            <button type="button" @click="lightboxOpen = false"
              class="absolute top-0 right-0 z-10 sm:-top-12 w-10 h-10 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white/90 hover:text-white transition-colors shadow-lg"
              style="background: rgba(255,255,255,0.15);">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Main large image -->
            <img :src="displayImage" :alt="product.name" class="w-full rounded-xl sm:rounded-2xl object-contain max-h-[min(78vh,560px)] sm:max-h-[70vh]" />

            <!-- Thumbnails in lightbox -->
            <div class="flex justify-start sm:justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 overflow-x-auto pb-1 -mx-1 px-1 touch-pan-x">
              <button v-for="(img, i) in allImages" :key="i" @click="selectedImg = img"
                class="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200" :style="displayImage === img
                  ? 'border-color: #4ade80; opacity: 1;'
                  : 'border-color: rgba(255,255,255,0.2); opacity: 0.55;'">
                <img :src="img" :alt="`thumb-${i}`" class="w-full h-full object-cover" />
              </button>
            </div>

            <!-- Prev / Next arrows -->
            <button v-if="currentImageIndex > 0" type="button" @click="selectedImg = allImages[currentImageIndex - 1]"
              class="absolute left-1 sm:left-3 top-[42%] sm:top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-all touch-manipulation"
              style="background: rgba(255,255,255,0.15); backdrop-filter: blur(4px);">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button v-if="currentImageIndex < allImages.length - 1" type="button"
              @click="selectedImg = allImages[currentImageIndex + 1]"
              class="absolute right-1 sm:right-3 top-[42%] sm:top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-all touch-manipulation"
              style="background: rgba(255,255,255,0.15); backdrop-filter: blur(4px);">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>

  <!-- Not Found -->
  <div v-else class="min-h-screen flex items-center justify-center pt-20"
    style="background: linear-gradient(135deg, #f0fdf4, #fefce8, #f0fdfa);">
    <div class="text-center">
      <div class="text-6xl mb-4">😕</div>
      <h2 class="font-display text-3xl text-gray-700 bangla mb-6">পণ্য পাওয়া যায়নি</h2>
      <RouterLink to="/products"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bangla transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        style="background: linear-gradient(135deg, #16a34a, #059669);">
        পণ্য তালিকায় ফিরুন
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useCartStore } from '@/store/modules/cart'
import { toast } from 'vue3-toastify'
import ProductCard from '@/components/product/ProductCard.vue'
import { products } from '@/data'

const route = useRoute()
const cartStore = useCartStore()

const product = computed(() => products.find(p => p.id === Number(route.params.id)))

const selectedImg = ref(null)
const lightboxOpen = ref(false)

const allImages = computed(() => {
  if (!product.value) return []
  const imgs = product.value.images?.length ? product.value.images : [product.value.image]
  // ensure main image is also in list
  if (!imgs.includes(product.value.image)) imgs.unshift(product.value.image)
  return [...new Set(imgs)]
})

const displayImage = computed(() =>
  selectedImg.value || allImages.value[0]
)

const currentImageIndex = computed(() =>
  allImages.value.indexOf(displayImage.value)
)

const quantity = ref(1)
const activeTab = ref('nutrition')

const categoryLabels = {
  vegetables: 'সবজি',
  fruits: 'ফলমূল',
  meat: 'মাংস',
  fish: 'মাছ',
  dairy: 'দুগ্ধজাত',
}
const categoryLabel = computed(() => categoryLabels[product.value?.category] || '')

const tabs = [
  { key: 'nutrition', label: '🧪 পুষ্টিমান' },
  { key: 'benefits', label: '💚 স্বাস্থ্য উপকারিতা' },
  { key: 'process', label: '🌾 উৎপাদন প্রক্রিয়া' },
  { key: 'reviews', label: '⭐ রিভিউ' },
]

const trustBadges = ['১০০% খাঁটি', 'রাসায়নিক মুক্ত', 'ল্যাব পরীক্ষিত', 'দ্রুত ডেলিভারি']

const sampleReviews = [
  { name: 'রেহানা বেগম', rating: 5, text: 'অসাধারণ গুণমান! পরিবারের সবাই খুব পছন্দ করেছে। আবার অর্ডার করব।' },
  { name: 'আবু সাঈদ', rating: 4, text: 'দাম একটু বেশি মনে হলেও মান নিঃসন্দেহে ভালো। সন্তুষ্ট।' },
  { name: 'তাহমিনা', rating: 5, text: 'প্রথমবার কিনলাম। এত ভালো মান আশা করিনি। ধন্যবাদ Safe Food Movement.' },
]

const relatedProducts = computed(() =>
  products.filter(p => p.id !== product.value?.id && p.category === product.value?.category).slice(0, 4)
)

function handleAddToCart() {
  if (!product.value) return
  cartStore.addItem(product.value, quantity.value)
  toast.success(`${product.value.name} কার্টে যোগ হয়েছে! 🛒`)
}
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: all 0.25s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>