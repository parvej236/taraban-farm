<template>
  <div v-if="product" class="bg-earth-100/60 min-h-screen">
    <!-- Breadcrumb -->
    <div class="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 border-b border-forest-100 pt-20">
      <div class="container mx-auto px-4 lg:px-8 py-3">
        <nav class="flex items-center gap-2 text-sm bangla text-white">
          <RouterLink to="/" class="hover:text-forest-700 transition-colors">হোম</RouterLink>
          <span>/</span>
          <RouterLink to="/products" class="hover:text-forest-700 transition-colors">পণ্যসমূহ</RouterLink>
          <span>/</span>
          <span class="text-forest-800 font-medium">{{ product.name }}</span>
        </nav>
      </div>
    </div>

    <!-- Product Section -->
    <section class="py-12">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Images -->
          <div class="space-y-4">
            <div class="rounded-3xl overflow-hidden aspect-square bg-white shadow-xl">
              <img :src="selectedImage" :alt="product.name" class="w-full h-full object-cover" />
            </div>
            <div v-if="product.images?.length > 1" class="flex gap-3">
              <button
                v-for="(img, i) in product.images"
                :key="i"
                @click="selectedImage = img"
                class="w-20 h-20 rounded-2xl overflow-hidden border-2 transition-colors"
                :class="selectedImage === img ? 'border-forest-500' : 'border-transparent hover:border-forest-300'"
              >
                <img :src="img" :alt="`${product.name} ${i+1}`" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          <!-- Details -->
          <div class="space-y-6">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="badge badge-organic bangla">{{ categoryLabel }}</span>
                <span v-if="product.badge" class="badge bg-earth-100 text-earth-800 bangla">{{ product.badge }}</span>
              </div>
              <h1 class="font-display text-3xl md:text-4xl font-bold text-forest-900 bangla leading-tight">{{ product.name }}</h1>
              <p class="text-gray-500 mt-1 bangla">{{ product.nameEn }}</p>
            </div>

            <!-- Rating -->
            <div class="flex items-center gap-3">
              <div class="flex">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= Math.round(product.rating) ? 'star-filled' : 'star-empty'" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="font-bold text-forest-900">{{ product.rating }}</span>
              <span class="text-gray-400 bangla text-sm">({{ product.reviewCount }} টি রিভিউ)</span>
            </div>

            <!-- Price -->
            <div class="flex items-baseline gap-3">
              <span class="font-display text-4xl font-extrabold text-forest-900">৳{{ product.price }}</span>
              <span v-if="product.originalPrice > product.price" class="text-xl text-gray-400 line-through">৳{{ product.originalPrice }}</span>
              <span v-if="product.originalPrice > product.price" class="badge bg-red-100 text-red-700 font-bold">
                {{ Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) }}% ছাড়
              </span>
            </div>
            <p class="text-sm text-gray-500 bangla">পরিমাণ: {{ product.weight }} | কৃষক: {{ product.farmer }}</p>

            <!-- Description -->
            <p class="text-gray-600 bangla leading-relaxed border-t border-forest-100 pt-4">{{ product.description }}</p>

            <!-- Quantity & Cart -->
            <div class="flex items-center gap-4 pt-2">
              <div class="flex items-center border-2 border-forest-200 rounded-full overflow-hidden">
                <button @click="quantity > 1 && quantity--" class="w-12 h-12 flex items-center justify-center text-forest-600 hover:bg-forest-50 transition-colors text-xl font-bold">−</button>
                <span class="w-12 text-center font-bold text-lg">{{ quantity }}</span>
                <button @click="quantity++" class="w-12 h-12 flex items-center justify-center text-forest-600 hover:bg-forest-50 transition-colors text-xl font-bold">+</button>
              </div>
              <button @click="handleAddToCart" class="btn-primary flex-1 justify-center py-3.5 text-base bangla">
                🛒 কার্টে যোগ করুন
              </button>
            </div>
            <RouterLink to="/checkout" class="btn-accent w-full justify-center py-3.5 text-base bangla">
              এখনই কিনুন
            </RouterLink>

            <!-- Trust Badges -->
            <div class="flex flex-wrap gap-3 pt-2">
              <span v-for="badge in trustBadges" :key="badge" class="flex items-center gap-1.5 text-xs text-forest-700 bg-forest-50 rounded-full px-3 py-1.5 bangla">
                ✅ {{ badge }}
              </span>
            </div>
          </div>
        </div>

        <!-- Tabs Section -->
        <div class="mt-16">
          <div class="flex border-b border-forest-200 gap-1 overflow-x-auto">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              @click="activeTab = tab.key"
              class="px-6 py-3 text-sm font-semibold bangla whitespace-nowrap transition-colors border-b-2 -mb-0.5"
              :class="activeTab === tab.key
                ? 'border-forest-700 text-forest-800'
                : 'border-transparent text-gray-500 hover:text-forest-700'"
            >
              {{ tab.label }}
            </button>
          </div>

          <div class="py-8 bg-white rounded-b-2xl rounded-tr-2xl p-6 shadow-md mt-0">
            <!-- Nutrition Tab -->
            <div v-if="activeTab === 'nutrition'">
              <h3 class="font-display text-xl font-bold text-forest-900 bangla mb-4">পুষ্টিমান (প্রতি ১০০ গ্রামে)</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div v-for="item in product.nutritionalValue" :key="item.name" class="bg-forest-50 rounded-xl p-4">
                  <p class="text-gray-500 text-xs bangla mb-1">{{ item.name }}</p>
                  <p class="font-bold text-forest-900 bangla">{{ item.value }}</p>
                </div>
              </div>
            </div>

            <!-- Benefits Tab -->
            <div v-if="activeTab === 'benefits'">
              <h3 class="font-display text-xl font-bold text-forest-900 bangla mb-4">স্বাস্থ্য উপকারিতা</h3>
              <ul class="space-y-3">
                <li v-for="benefit in product.healthBenefits" :key="benefit" class="flex items-start gap-3">
                  <span class="w-6 h-6 bg-forest-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">✓</span>
                  <span class="text-gray-700 bangla">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- Process Tab -->
            <div v-if="activeTab === 'process'">
              <h3 class="font-display text-xl font-bold text-forest-900 bangla mb-4">উৎপাদন প্রক্রিয়া</h3>
              <p class="text-gray-700 bangla leading-relaxed">{{ product.process }}</p>
            </div>

            <!-- Reviews Tab -->
            <div v-if="activeTab === 'reviews'">
              <h3 class="font-display text-xl font-bold text-forest-900 bangla mb-6">গ্রাহক পর্যালোচনা</h3>
              <div class="space-y-4">
                <div v-for="review in sampleReviews" :key="review.name" class="border-b border-forest-100 pb-4">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-9 h-9 rounded-full bg-forest-200 flex items-center justify-center font-bold text-forest-700">{{ review.name[0] }}</div>
                    <div>
                      <p class="font-semibold text-forest-900 bangla text-sm">{{ review.name }}</p>
                      <div class="flex">
                        <svg v-for="i in review.rating" :key="i" class="w-3 h-3 star-filled" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-600 bangla text-sm">{{ review.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Products -->
        <div class="mt-16">
          <h2 class="font-display text-2xl font-bold text-forest-900 bangla mb-6">সম্পর্কিত পণ্যসমূহ</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
            <ProductCard v-for="p in relatedProducts" :key="p.id" :product="p" />
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Not Found -->
  <div v-else class="min-h-screen flex items-center justify-center pt-20">
    <div class="text-center">
      <div class="text-6xl mb-4">😕</div>
      <h2 class="font-display text-3xl text-forest-900 bangla">পণ্য পাওয়া যায়নি</h2>
      <RouterLink to="/products" class="btn-primary mt-6">পণ্য তালিকায় ফিরুন</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useCartStore } from '@/store/modules/cart'
import { toast } from 'vue3-toastify'
import PageHero from '@/components/common/PageHero.vue'
import ProductCard from '@/components/product/ProductCard.vue'
import { products } from '@/data'

const route = useRoute()
const cartStore = useCartStore()

const product = computed(() => products.find(p => p.id === Number(route.params.id)))
const selectedImage = computed({
  get: () => product.value?.images?.[0] || product.value?.image,
  set: (val) => {},
})
const selectedImg = ref(null)
const displayImage = computed(() => selectedImg.value || product.value?.images?.[0] || product.value?.image)

const quantity = ref(1)
const activeTab = ref('nutrition')

const categoryLabels = { honey: 'মধু', organic: 'জৈব খাদ্য', grains: 'শস্য', dry: 'শুকনো খাবার' }
const categoryLabel = computed(() => categoryLabels[product.value?.category] || '')

const tabs = [
  { key: 'nutrition', label: 'পুষ্টিমান' },
  { key: 'benefits', label: 'স্বাস্থ্য উপকারিতা' },
  { key: 'process', label: 'উৎপাদন প্রক্রিয়া' },
  { key: 'reviews', label: 'রিভিউ' },
]

const trustBadges = ['১০০% খাঁটি', 'রাসায়নিক মুক্ত', 'ল্যাব পরীক্ষিত', 'দ্রুত ডেলিভারি']

const sampleReviews = [
  { name: 'রেহানা বেগম', rating: 5, text: 'অসাধারণ গুণমান! পরিবারের সবাই খুব পছন্দ করেছে। আবার অর্ডার করব।' },
  { name: 'আবু সাঈদ', rating: 4, text: 'দাম একটু বেশি মনে হলেও মান নিঃসন্দেহে ভালো। সন্তুষ্ট।' },
  { name: 'তাহমিনা', rating: 5, text: 'প্রথমবার কিনলাম। এত ভালো মান আশা করিনি। ধন্যবাদ তারাবান ফার্ম।' },
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
