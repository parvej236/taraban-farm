<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center bg-gradient-to-br from-orange-950 via-forest-900 to-forest-800 overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 right-10 w-72 h-72 bg-forest-600/20 blob animate-float"
          style="animation-delay: 0s" />
        <div class="absolute bottom-20 left-10 w-48 h-48 bg-earth-500/15 blob animate-float"
          style="animation-delay: 2s" />
        <div class="absolute top-1/2 right-1/3 w-32 h-32 bg-cream-300/10 blob animate-float"
          style="animation-delay: 4s" />
      </div>
      <!-- Leaf watermark -->
      <div class="absolute inset-0 opacity-5 pointer-events-none"
        style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2270%22>🍃</text></svg>'); background-size: 150px; background-repeat: repeat;">
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div>
            <!-- Trust Badge -->
            <div
              class="inline-flex items-center gap-2 bg-forest-700/60 backdrop-blur-sm border border-forest-600/50 text-forest-200 text-sm font-semibold px-4 py-2 rounded-full mb-6 bangla">
              <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              ১০০% প্রাকৃতিক ও নিরাপদ খাদ্য
            </div>

            <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              <span class="bangla">সুস্থ্য জীবনের</span>
              <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 bangla">জন্য
                নিরাপদ</span>
              <br />
              <span class="bangla">খাদ্য</span>
            </h1>

            <p class="text-forest-200 text-lg md:text-xl bangla leading-relaxed mb-8 max-w-xl">
              তারাবান ফার্ম থেকে সরাসরি আপনার দরজায় পৌঁছে যাচ্ছে প্রকৃতির সেরা জৈব ও নিরাপদ খাদ্যপণ্য। কোনো রাসায়নিক
              নেই, শুধু খাঁটি প্রকৃতি।
            </p>

            <div class="flex flex-wrap gap-4">
              <RouterLink to="/products" class="btn-accent text-base px-8 py-4 shadow-2xl shadow-earth-900/30">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 7H4l1-7z" />
                </svg>
                <span class="bangla">পণ্য দেখুন</span>
              </RouterLink>
              <RouterLink to="/about"
                class="inline-flex items-center gap-2 text-white border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 bangla text-base">
                আমাদের গল্প
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </RouterLink>
            </div>

            <!-- Stats -->
            <div class="flex flex-wrap gap-8 mt-12 pt-8 border-t border-forest-700/50">
              <div v-for="stat in stats" :key="stat.label">
                <div class="font-display text-3xl font-extrabold text-white">{{ stat.value }}</div>
                <div class="text-forest-400 text-sm bangla mt-1">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- Hero Image Grid -->
          <div class="hidden lg:block relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="rounded-3xl overflow-hidden h-56 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80" alt="Honey"
                    class="w-full h-full object-cover" />
                </div>
                <div class="rounded-3xl overflow-hidden h-40 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&q=80" alt="Farm"
                    class="w-full h-full object-cover" />
                </div>
              </div>
              <div class="space-y-4 mt-8">
                <div class="rounded-3xl overflow-hidden h-40 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80" alt="Vegetables"
                    class="w-full h-full object-cover" />
                </div>
                <div class="rounded-3xl overflow-hidden h-56 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=500&q=80" alt="Spices"
                    class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-3">
              <div class="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center text-2xl">🌿</div>
              <div>
                <div class="font-bold text-forest-900 text-sm bangla">১০০% জৈব</div>
                <div class="text-xs text-gray-500 bangla">রাসায়নিক মুক্ত</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 10 0 30L0 60Z" fill="#fafaf7" />
        </svg>
      </div>
    </section>

    <!-- Benefits/Features Section -->
    <section class="py-20 bg-[#fafaf7]">
      <div class="container mx-auto px-4 lg:px-8">
        <SectionHeader tag="কেন তারাবান ফার্ম?" tagIcon="🌱" title="আমাদের প্রতিশ্রুতি"
          subtitle="আমরা বিশ্বাস করি প্রতিটি পরিবার নিরাপদ ও পুষ্টিকর খাদ্য পাওয়ার অধিকার রাখে।" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(benefit, i) in benefits" :key="benefit.title"
            class="animate-on-scroll bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-forest-50"
            :style="`transition-delay: ${i * 100}ms`">
            <div class="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-4"
              :class="benefit.bgColor">
              {{ benefit.icon }}
            </div>
            <h3 class="font-display font-bold text-forest-900 text-lg bangla mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-500 text-sm bangla leading-relaxed">{{ benefit.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-20 bg-gradient-to-br from-forest-800 to-forest-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5"
        style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2260%22>🍃</text></svg>'); background-size: 100px;">
      </div>
      <div class="container mx-auto px-4 lg:px-8 relative">
        <SectionHeader tag="পণ্য বিভাগ" tagIcon="📦" title="আমাদের পণ্য বিভাগ"
          subtitle="সেরা মানের জৈব ও প্রাকৃতিক পণ্য বেছে নিন" titleClass="text-white" />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <RouterLink v-for="cat in productCategories" :key="cat.slug" :to="`/products?category=${cat.slug}`"
            class="group relative rounded-2xl overflow-hidden aspect-square">
            <img :src="cat.image" :alt="cat.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
            <div class="absolute inset-0 flex flex-col items-center justify-end p-5">
              <span class="text-4xl mb-2">{{ cat.icon }}</span>
              <h3 class="font-display font-bold text-dark text-lg bangla text-center">{{ cat.name }}</h3>
              <span class="text-forest-300 text-xs bangla mt-1">{{ cat.count }}+ পণ্য</span>
            </div>
            <div
              class="absolute top-3 right-3 w-8 h-8 bg-white/0 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
              <svg class="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-20 bg-[#fafaf7]">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <SectionHeader tag="বিশেষ পণ্য" tagIcon="⭐" title="জনপ্রিয় পণ্যসমূহ"
            subtitle="আমাদের সেরা বিক্রিত পণ্যগুলো দেখুন" :centered="false" />
          <RouterLink to="/products" class="btn-secondary text-sm whitespace-nowrap mt-4 sm:mt-0 mb-0 sm:mb-12">
            সব পণ্য দেখুন
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </RouterLink>
        </div>
        <div class="product-grid">
          <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product"
            class="animate-on-scroll" />
        </div>
      </div>
    </section>

    <!-- Farm-to-Table Process -->
    <section class="py-20 bg-forest-50">
      <div class="container mx-auto px-4 lg:px-8">
        <SectionHeader tag="আমাদের প্রক্রিয়া" tagIcon="🚜" title="ফার্ম থেকে আপনার টেবিলে"
          subtitle="প্রতিটি পণ্য যেভাবে আপনার কাছে পৌঁছায়" />
        <div class="relative">
          <!-- Connecting line -->
          <div
            class="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-forest-200 via-forest-400 to-forest-200" />
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="(step, i) in processSteps" :key="step.title"
              class="flex flex-col items-center text-center animate-on-scroll"
              :style="`transition-delay: ${i * 150}ms`">
              <div
                class="w-16 h-16 rounded-full bg-white border-4 border-forest-400 flex items-center justify-center text-2xl shadow-lg mb-4 relative z-10">
                {{ step.icon }}
              </div>
              <div
                class="w-6 h-6 bg-forest-600 text-white rounded-full flex items-center justify-center text-xs font-bold mb-3">
                {{ i + 1 }}</div>
              <h3 class="font-display font-bold text-forest-900 bangla mb-2">{{ step.title }}</h3>
              <p class="text-gray-500 text-sm bangla leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Health Tips Section -->
    <section class="py-20 bg-gradient-to-br from-forest-800 to-forest-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10"
        style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2250%22>🌿</text></svg>'); background-size: 80px;">
      </div>
      <div class="container mx-auto px-4 lg:px-8 relative">
        <SectionHeader tag="স্বাস্থ্য টিপস" tagIcon="💚" title="দৈনন্দিন স্বাস্থ্য টিপস"
          subtitle="সুস্থ থাকুন, সুখী থাকুন" titleClass="text-white" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(tip, i) in healthTips" :key="tip.title"
            class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-on-scroll hover:bg-white/15 transition-colors"
            :style="`transition-delay: ${i * 100}ms`">
            <div class="text-4xl mb-4">{{ tip.icon }}</div>
            <h3 class="font-display font-bold text-xl bangla mb-3">{{ tip.title }}</h3>
            <p class="text-forest-200 bangla text-sm leading-relaxed">{{ tip.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Preview -->
    <section class="py-20 bg-[#fafaf7]">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <SectionHeader tag="স্বাস্থ্য ব্লগ" tagIcon="📖" title="সর্বশেষ নিবন্ধসমূহ"
            subtitle="পুষ্টি ও স্বাস্থ্য সম্পর্কে জানুন" :centered="false" />
          <RouterLink to="/blog" class="btn-secondary text-sm mt-4 sm:mt-0 mb-0 sm:mb-12 whitespace-nowrap">
            সব পড়ুন
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BlogCard v-for="post in latestPosts" :key="post.id" :post="post" class="animate-on-scroll" />
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-forest-50">
      <div class="container mx-auto px-4 lg:px-8">
        <SectionHeader tag="গ্রাহক পর্যালোচনা" tagIcon="⭐" title="আমাদের গ্রাহকরা কী বলছেন"
          subtitle="হাজার হাজার সন্তুষ্ট পরিবারের বিশ্বাস" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(review, i) in testimonials" :key="review.name"
            class="bg-white rounded-2xl p-6 shadow-md animate-on-scroll" :style="`transition-delay: ${i * 100}ms`">
            <div class="flex mb-4">
              <svg v-for="j in 5" :key="j" class="w-5 h-5 star-filled" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-gray-600 bangla text-sm leading-relaxed mb-4 italic">"{{ review.text }}"</p>
            <div class="flex items-center gap-3">
              <img :src="review.avatar" :alt="review.name" class="w-10 h-10 rounded-full object-cover" />
              <div>
                <div class="font-semibold text-forest-900 bangla text-sm">{{ review.name }}</div>
                <div class="text-gray-400 text-xs bangla">{{ review.location }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-earth-600 to-earth-800 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10"
        style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🌾</text></svg>'); background-size: 120px;">
      </div>
      <div class="container mx-auto px-4 lg:px-8 text-center relative">
        <h2 class="font-display text-4xl md:text-5xl font-bold text-white mb-4 bangla">আজই শুরু করুন স্বাস্থ্যকর জীবন
        </h2>
        <p class="text-earth-100 text-xl bangla mb-8 max-w-2xl mx-auto">প্রথম অর্ডারে ১০% ছাড় পান। কোড: <span
            class="font-bold bg-white/20 px-2 py-0.5 rounded">TARABAN10</span></p>
        <RouterLink to="/products"
          class="inline-flex items-center gap-3 bg-white text-earth-700 font-bold px-10 py-5 rounded-full text-lg hover:bg-earth-50 transition-all duration-300 shadow-2xl hover:-translate-y-1 bangla">
          এখনই অর্ডার করুন
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import SectionHeader from '@/components/common/SectionHeader.vue'
import ProductCard from '@/components/product/ProductCard.vue'
import BlogCard from '@/components/blog/BlogCard.vue'
import { products, blogPosts } from '@/data'

const featuredProducts = computed(() => products.slice(0, 4))
const latestPosts = computed(() => blogPosts.slice(0, 3))

const stats = [
  { value: '৫০০+', label: 'খুশি গ্রাহক' },
  { value: '৩০+', label: 'ধরনের পণ্য' },
  { value: '১৫+', label: 'উদ্যোক্তা' },
  { value: '১০০%', label: 'জৈব' },
]

const benefits = [
  { icon: '🌿', title: '১০০% প্রাকৃতিক', desc: 'কোনো রাসায়নিক সার বা কীটনাশক ব্যবহার করা হয় না।', bgColor: 'bg-forest-100' },
  { icon: '🚜', title: 'সরাসরি ফার্ম থেকে', desc: 'মধ্যস্থকারী ছাড়াই সরাসরি কৃষক থেকে আপনার কাছে।', bgColor: 'bg-earth-100' },
  { icon: '🧪', title: 'মানসম্পন্ন পরীক্ষিত', desc: 'প্রতিটি পণ্য ল্যাবে পরীক্ষিত ও মানসম্পন্ন।', bgColor: 'bg-cream-200' },
  { icon: '🚚', title: 'দ্রুত ডেলিভারি', desc: '২৪-৪৮ ঘণ্টার মধ্যে আপনার দরজায় পৌঁছে দেওয়া হয়।', bgColor: 'bg-forest-100' },
]

const productCategories = [
  { name: 'জৈব খাদ্য', slug: 'organic', icon: '🌾', count: '১০', image: 'https://images.unsplash.com/photo-1728895604559-a4e16081504e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'প্রাকৃতিক মধু', slug: 'honey', icon: '🍯', count: '৫', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80' },
  { name: 'শস্য ও ডাল', slug: 'grains', icon: '🌿', count: '১৫', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80' },
  { name: 'শুকনো খাবার', slug: 'dry', icon: '🌰', count: '৮', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&q=80' },
]

const processSteps = [
  { icon: '🌱', title: 'জৈব চাষ', desc: 'রাসায়নিক মুক্ত জমিতে প্রাকৃতিক পদ্ধতিতে চাষ।' },
  { icon: '🤲', title: 'যত্নসহকারে সংগ্রহ', desc: 'হাতে বাছাই করে সেরা পণ্য সংগ্রহ করা হয়।' },
  { icon: '🧪', title: 'মান পরীক্ষা', desc: 'ল্যাবে পরীক্ষা করে মান নিশ্চিত করা হয়।' },
  { icon: '🚚', title: 'আপনার দরজায়', desc: 'সতেজ অবস্থায় প্যাক করে দ্রুত পৌঁছে দেওয়া হয়।' },
]

const healthTips = [
  { icon: '💧', title: 'পর্যাপ্ত পানি পান', desc: 'প্রতিদিন কমপক্ষে ৮-১০ গ্লাস পানি পান করুন। সকালে খালি পেটে ১ গ্লাস উষ্ণ পানি শরীর পরিষ্কার রাখে।' },
  { icon: '🥗', title: 'তাজা শাকসবজি খান', desc: 'প্রতিদিনের খাবারে রঙিন শাকসবজি রাখুন। জৈব সবজিতে বেশি পুষ্টিগুণ থাকে।' },
  { icon: '🕐', title: 'নিয়মিত সময়ে খান', desc: 'প্রতিদিন একই সময়ে খাবার খাওয়ার অভ্যাস করুন। সকালের নাস্তা কখনো বাদ দেবেন না।' },
]

const testimonials = [
  {
    text: 'তারাবান ফার্মের মধু সত্যিই অসাধারণ! পরিবারের সবাই এখন প্রতিদিন সকালে মধু খায়। স্বাদ ও গুণমান দুটোই অতুলনীয়।',
    name: 'রেহানা বেগম',
    location: 'ঢাকা',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&q=80',
  },
  {
    text: 'লাল চালের ভাত খেয়ে আমার ডায়াবেটিস অনেক নিয়ন্ত্রণে এসেছে। ডাক্তারও অবাক হয়েছেন। তারাবান ফার্মকে ধন্যবাদ।',
    name: 'মোহাম্মদ হাসান',
    location: 'চট্টগ্রাম',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80',
  },
  {
    text: 'দেশীয় মশলার গুণগত মান অবিশ্বাস্য। কালোজিরা নিয়মিত খাওয়ার পর থেকে ঠান্ডা-কাশি অনেক কমে গেছে।',
    name: 'সারা আক্তার',
    location: 'রাজশাহী',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
  },
]
</script>
