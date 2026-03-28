<template>
  <div v-if="post" class="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 min-h-screen">
    <!-- Hero Image -->
    <div class="relative h-[50vh] min-h-[400px] overflow-hidden pt-20">
      <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/30 to-transparent" />
      <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div class="container mx-auto">
          <div class="flex items-center gap-3 mb-4 bangla text-sm text-forest-900">
            <RouterLink to="/blog" class="hover:text-white transition-colors">ব্লগ</RouterLink>
            <span>/</span>
            <span class="badge bg-forest-600 text-white">{{ post.category }}</span>
          </div>
          <h1 class="font-display text-3xl md:text-5xl font-bold text-forest-900 bangla max-w-3xl leading-tight">
            {{ post.title }}
          </h1>
          <div class="text-2xl">{{ post.titleEn }}</div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 lg:px-8 py-12">
      <div class="grid lg:grid-cols-3 gap-10">
        <!-- Article -->
        <article class="lg:col-span-2 bg-white rounded-3xl shadow-md p-8 md:p-12">
          <!-- Meta -->
          <div class="flex items-center gap-4 mb-8 pb-6 border-b border-forest-100">
            <img v-if="post.authorAvatar" :src="post.authorAvatar" :alt="post.author" class="w-12 h-12 rounded-full object-cover" />
            <div>
              <p class="font-semibold text-forest-900 bangla">{{ post.author }}</p>
              <div class="flex items-center gap-2 text-xs text-gray-400 bangla">
                <span>{{ post.date }}</span>
                <span>·</span>
                <span>{{ post.readTime }} পড়া</span>
              </div>
            </div>
            <!-- Share -->
            <div class="ml-auto flex gap-2">
              <button v-for="s in shareOptions" :key="s.label" class="w-9 h-9 rounded-full bg-forest-50 hover:bg-forest-100 flex items-center justify-center transition-colors" :title="s.label">
                <span class="text-sm">{{ s.icon }}</span>
              </button>
            </div>
          </div>

          <!-- Article Body -->
          <div class="prose prose-green max-w-none bangla">
            <p class="text-lg text-gray-700 leading-relaxed font-medium mb-6">{{ post.excerpt }}</p>
            <div v-html="articleBody" class="text-gray-600 leading-relaxed space-y-4"></div>
          </div>

          <!-- Tags -->
          <div class="mt-8 pt-6 border-t border-forest-100">
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in post.tags" :key="tag" class="badge badge-organic bangla text-sm">#{{ tag }}</span>
            </div>
          </div>
        </article>

        <!-- Sidebar -->
        <aside class="space-y-6">
          <!-- Related Posts -->
          <div class="bg-white rounded-2xl p-6 shadow-md">
            <h3 class="font-display font-bold text-forest-900 bangla mb-4">সম্পর্কিত নিবন্ধ</h3>
            <div class="space-y-4">
              <RouterLink
                v-for="related in relatedPosts"
                :key="related.id"
                :to="`/blog/${related.slug}`"
                class="flex gap-3 group"
              >
                <img :src="related.image" :alt="related.title" class="w-16 h-16 rounded-xl object-cover shrink-0 group-hover:opacity-90 transition-opacity" />
                <div>
                  <p class="text-sm font-semibold text-forest-900 bangla leading-tight group-hover:text-forest-700 transition-colors line-clamp-2">{{ related.title }}</p>
                  <p class="text-xs text-gray-400 bangla mt-1">{{ related.readTime }} পড়া</p>
                </div>
              </RouterLink>
            </div>
          </div>

          <!-- Newsletter CTA -->
          <div class="bg-forest-800 rounded-2xl p-6 text-white">
            <div class="text-3xl mb-3">📬</div>
            <h3 class="font-display font-bold text-lg bangla mb-2">নিউজলেটার সাবস্ক্রাইব করুন</h3>
            <p class="text-forest-300 text-sm bangla mb-4">প্রতি সপ্তাহে স্বাস্থ্য টিপস পান</p>
            <input type="email" placeholder="ইমেইল দিন" class="w-full px-3 py-2 rounded-xl bg-forest-700 border border-forest-600 text-white placeholder-forest-400 text-sm mb-2 focus:outline-none bangla" />
            <button class="btn-accent w-full justify-center text-sm">সাবস্ক্রাইব</button>
          </div>

          <!-- Products CTA -->
          <div class="bg-white rounded-2xl p-6 shadow-md text-center">
            <div class="text-3xl mb-3">🌿</div>
            <h3 class="font-display font-bold text-forest-900 bangla mb-2">জৈব পণ্য কিনুন</h3>
            <p class="text-gray-500 text-sm bangla mb-4">আমাদের সেরা পণ্যগুলো দেখুন</p>
            <RouterLink to="/products" class="btn-primary w-full justify-center text-sm">পণ্য দেখুন</RouterLink>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { blogPosts } from '@/data'

const route = useRoute()
const post = computed(() => blogPosts.find(p => p.slug === route.params.slug))

const articleBody = computed(() => {
  if (!post.value) return ''
  return `
    <p>মধু মানব সভ্যতার সবচেয়ে পুরনো প্রাকৃতিক মিষ্টি খাবারগুলোর একটি। হাজার বছর ধরে মানুষ মধু শুধু খাবার হিসেবে নয়, ওষুধ হিসেবেও ব্যবহার করে আসছে। আধুনিক বিজ্ঞান এখন প্রমাণ করেছে যে প্রাচীন কালের মানুষেরা মধুর শক্তি সম্পর্কে যা জানতেন তা সত্যি।</p>
    <h3 style="font-size:1.25rem; font-weight:700; color:#14532d; margin-top:1.5rem; margin-bottom:0.75rem; font-family:'Playfair Display',serif;">রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি</h3>
    <p>মধুতে রয়েছে শক্তিশালী অ্যান্টিঅক্সিডেন্ট যা আমাদের শরীরকে ফ্রি র‍্যাডিকেলের ক্ষতি থেকে রক্ষা করে। নিয়মিত মধু খেলে রোগ প্রতিরোধ ক্ষমতা উল্লেখযোগ্যভাবে বৃদ্ধি পায়।</p>
    <h3 style="font-size:1.25rem; font-weight:700; color:#14532d; margin-top:1.5rem; margin-bottom:0.75rem; font-family:'Playfair Display',serif;">হজম শক্তি উন্নয়ন</h3>
    <p>মধুতে থাকা প্রাকৃতিক এনজাইম হজম প্রক্রিয়াকে সহায়তা করে। খাবারের আগে অথবা পরে ১-২ চা চামচ মধু হজমের সমস্যা দূর করতে সাহায্য করে।</p>
    <h3 style="font-size:1.25rem; font-weight:700; color:#14532d; margin-top:1.5rem; margin-bottom:0.75rem; font-family:'Playfair Display',serif;">অ্যান্টিব্যাকটেরিয়াল গুণ</h3>
    <p>মধুর অ্যান্টিব্যাকটেরিয়াল গুণ ক্ষতকে দ্রুত সারিয়ে তুলতে সাহায্য করে। বিশেষত সুন্দরবনের মধু এই গুণের জন্য বিখ্যাত।</p>
    <p>Safe Food Movement এর সুন্দরবনের খাঁটি মধু সরাসরি প্রকৃতি থেকে সংগ্রহ করা। কোনো রাসায়নিক প্রক্রিয়াজাতকরণ ছাড়াই আপনার কাছে পৌঁছে দেওয়া হয়।</p>
  `
})

const relatedPosts = computed(() => {
  if (!post.value) return []
  return blogPosts.filter(p => p.id !== post.value.id).slice(0, 3)
})

const shareOptions = [
  { label: 'Facebook', icon: '👍' },
  { label: 'WhatsApp', icon: '💬' },
  { label: 'Copy Link', icon: '🔗' },
]
</script>
