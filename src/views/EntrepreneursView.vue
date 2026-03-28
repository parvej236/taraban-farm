<template>
  <div>
    <PageHero
      title="আমাদের কৃষক ও উদ্যোক্তা"
      subtitle="যাঁদের পরিশ্রম ও নিষ্ঠায় আপনার কাছে পৌঁছায় নিরাপদ খাদ্য"
      tag="উদ্যোক্তা"
      tagIcon="👨‍🌾"
      :breadcrumbs="[{ label: 'উদ্যোক্তা' }]"
    />

    <section class="py-16 bg-[#fafaf7]">
      <div class="container mx-auto px-4 lg:px-8">
        <SectionHeader
          tag="আমাদের পরিবার"
          tagIcon="🌿"
          title="পরিচয় করুন আমাদের সাথে"
          subtitle="Safe Food Movement এর প্রতিটি পণ্যের পেছনে আছে একটি পরিবারের গল্প"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EntrepreneurCard
            v-for="(e, i) in entrepreneurs"
            :key="e.id"
            :entrepreneur="e"
            class="animate-on-scroll"
            :style="`transition-delay: ${i * 100}ms`"
          />
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="py-16 bg-forest-900 text-white">
      <div class="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="আমাদের প্রভাব"
          subtitle="Safe Food Movement কৃষক ও গ্রামীণ অর্থনীতিতে যে পরিবর্তন আনছে"
          titleClass="text-white"
        />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="impact in impacts" :key="impact.label" class="text-center animate-on-scroll">
            <div class="font-display text-4xl md:text-5xl font-extrabold text-green-400 mb-2">{{ impact.value }}</div>
            <p class="text-forest-300 bangla text-sm">{{ impact.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Us CTA -->
    <section class="py-16 bg-forest-50">
      <div class="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <div class="text-5xl mb-6">🤝</div>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-forest-900 bangla mb-4">আপনিও যোগ দিন</h2>
        <p class="text-gray-600 bangla text-lg leading-relaxed mb-8">
          আপনি কি একজন কৃষক বা উদ্যোক্তা? Safe Food Movement এর সাথে যুক্ত হয়ে আপনার পণ্য সারা দেশে পৌঁছে দিন।
        </p>
        <RouterLink to="/contact" class="btn-primary text-base px-10 py-4">
          আমাদের সাথে যোগাযোগ করুন
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import PageHero from '@/components/common/PageHero.vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import EntrepreneurCard from '@/components/entrepreneur/EntrepreneurCard.vue'
import { entrepreneurs } from '@/data'

const impacts = [
  { value: '১৫+', label: 'সক্রিয় উদ্যোক্তা' },
  { value: '৮টি', label: 'জেলায় কার্যক্রম' },
  { value: '৫০০+', label: 'পরিবার উপকৃত' },
  { value: '৩ বছর', label: 'অভিজ্ঞতা' },
]
</script>
