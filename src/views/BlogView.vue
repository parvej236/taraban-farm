<template>
  <div>
    <PageHero
      title="স্বাস্থ্য ও পুষ্টি ব্লগ"
      subtitle="জৈব খাদ্য, সুস্বাস্থ্য ও পুষ্টি সম্পর্কে বিশেষজ্ঞদের লেখা পড়ুন"
      tag="স্বাস্থ্য ব্লগ"
      tagIcon="📖"
      :breadcrumbs="[{ label: 'স্বাস্থ্য ব্লগ' }]"
    />

    <section class="py-12 bg-earth-100/60 min-h-screen">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Featured Post -->
        <div class="mb-12 animate-on-scroll">
          <RouterLink :to="`/blog/${featuredPost.slug}`" class="group block bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-400">
            <div class="grid md:grid-cols-2 gap-0">
              <div class="relative overflow-hidden aspect-video md:aspect-auto">
                <img :src="featuredPost.image" :alt="featuredPost.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span class="absolute top-4 left-4 badge bg-earth-500 text-white bangla">বিশেষ নিবন্ধ</span>
              </div>
              <div class="p-8 md:p-10 flex flex-col justify-center">
                <div class="flex items-center gap-3 text-xs text-gray-400 mb-4 bangla">
                  <span class="badge badge-organic">{{ featuredPost.category }}</span>
                  <span>{{ featuredPost.date }}</span>
                  <span>· {{ featuredPost.readTime }} পড়া</span>
                </div>
                <h2 class="font-display text-2xl md:text-3xl font-bold text-forest-900 bangla leading-tight mb-4 group-hover:text-forest-700 transition-colors">
                  {{ featuredPost.title }}
                </h2>
                <p class="text-gray-500 bangla leading-relaxed mb-6">{{ featuredPost.excerpt }}</p>
                <div class="flex items-center gap-3">
                  <img :src="featuredPost.authorAvatar" :alt="featuredPost.author" class="w-10 h-10 rounded-full object-cover" />
                  <span class="font-semibold text-forest-900 bangla text-sm">{{ featuredPost.author }}</span>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap gap-2 mb-8">
          <button
            v-for="cat in blogCategories"
            :key="cat"
            @click="activeCategory = cat"
            class="px-4 py-2 rounded-full text-sm font-semibold bangla transition-all"
            :class="activeCategory === cat ? 'bg-forest-700 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-forest-50'"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard
            v-for="(post, i) in filteredPosts"
            :key="post.id"
            :post="post"
            class="animate-on-scroll"
            :style="`transition-delay: ${i * 100}ms`"
          />
        </div>

        <!-- Load More -->
        <div class="text-center mt-12">
          <button class="btn-secondary px-10">
            আরও পোস্ট দেখুন
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import PageHero from '@/components/common/PageHero.vue'
import BlogCard from '@/components/blog/BlogCard.vue'
import { blogPosts } from '@/data'

const activeCategory = ref('সব')
const blogCategories = ['সব', 'পুষ্টি', 'স্বাস্থ্য', 'কৃষি', 'রেসিপি']
const featuredPost = computed(() => blogPosts[0])

const filteredPosts = computed(() => {
  const posts = blogPosts.slice(1)
  if (activeCategory.value === 'সব') return posts
  return posts.filter(p => p.category === activeCategory.value)
})
</script>
