<template>
  <div>
    <PageHero
      title="আমাদের সম্পর্কে"
      subtitle="তারাবান ফার্মের যাত্রা, দর্শন এবং দলের পরিচয়"
      tag="আমাদের গল্প"
      tagIcon="🌿"
      :breadcrumbs="[{ label: 'আমাদের সম্পর্কে' }]"
    />

    <!-- Story Section -->
    <section class="py-20 bg-[#fafaf7]">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="animate-on-scroll">
            <div class="inline-flex items-center gap-2 bg-forest-100 text-forest-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 bangla">
              🌱 আমাদের শুরুর গল্প
            </div>
            <h2 class="section-title bangla mb-6">কীভাবে শুরু হলো তারাবান ফার্ম</h2>
            <div class="space-y-4 text-gray-600 bangla leading-relaxed">
              <p>২০২৩ সালে, চট্টগ্রামের একটি ছোট্ট গ্রামে, আহমেদ হোসেনের মাথায় একটি স্বপ্ন জন্ম নেয়। তিনি দেখলেন বাজারে যে খাবার বিক্রি হচ্ছে তার অধিকাংশে রাসায়নিক পদার্থ মেশানো।</p>
              <p>তখন তিনি সিদ্ধান্ত নিলেন — নিরাপদ খাদ্য সরবরাহ করবেন সাধারণ মানুষের কাছে। শুরু হলো তারাবান ফার্মের যাত্রা।</p>
              <p>আজ আমরা ১৫টিরও বেশি কৃষক ও উদ্যোক্তার সাথে কাজ করছি এবং ৫০০+ পরিবারের কাছে নিরাপদ খাদ্য পৌঁছে দিচ্ছি।</p>
            </div>
          </div>
          <div class="animate-on-scroll grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&q=80" alt="Farm" class="rounded-2xl shadow-xl h-52 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&q=80" alt="Nature" class="rounded-2xl shadow-xl h-52 w-full object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=500&q=80" alt="Harvest" class="rounded-2xl shadow-xl h-52 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80" alt="Honey" class="rounded-2xl shadow-xl h-52 w-full object-cover mt-8" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-forest-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2260%22>🌿</text></svg>'); background-size: 100px;"></div>
      <div class="container mx-auto px-4 lg:px-8 relative">
        <div class="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div class="animate-on-scroll bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="font-display text-2xl font-bold bangla mb-4">আমাদের লক্ষ্য</h3>
            <p class="text-forest-200 bangla leading-relaxed">
              বাংলাদেশের প্রতিটি পরিবারের কাছে নিরাপদ, পুষ্টিকর ও রাসায়নিক মুক্ত খাদ্য পৌঁছে দেওয়া। কৃষক ও উদ্যোক্তাদের উন্নতিতে সহায়তা করা।
            </p>
          </div>
          <div class="animate-on-scroll bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div class="text-4xl mb-4">🔭</div>
            <h3 class="font-display text-2xl font-bold bangla mb-4">আমাদের দৃষ্টিভঙ্গি</h3>
            <p class="text-forest-200 bangla leading-relaxed">
              ২০৩০ সালের মধ্যে সারা দেশে ১০,০০০+ পরিবারের কাছে জৈব খাদ্য পৌঁছে দেওয়া এবং ১০০+ কৃষক পরিবারকে স্বনির্ভর করা।
            </p>
          </div>
        </div>

        <!-- Values -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div v-for="value in values" :key="value.title" class="text-center animate-on-scroll p-4">
            <div class="text-3xl mb-3">{{ value.icon }}</div>
            <h4 class="font-semibold bangla text-sm">{{ value.title }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Farm-to-Table Timeline -->
    <section class="py-20 bg-[#fafaf7]">
      <div class="container mx-auto px-4 lg:px-8">
        <SectionHeader
          tag="আমাদের যাত্রা"
          tagIcon="📅"
          title="তারাবান ফার্মের ইতিহাস"
        />
        <div class="max-w-3xl mx-auto">
          <div v-for="(event, i) in timeline" :key="event.year" class="flex gap-6 animate-on-scroll" :style="`transition-delay: ${i * 100}ms`">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-forest-700 text-white flex items-center justify-center font-bold text-sm shrink-0">{{ event.year.slice(-2) }}</div>
              <div v-if="i < timeline.length - 1" class="w-0.5 h-16 bg-forest-200 my-2" />
            </div>
            <div class="pb-10">
              <span class="text-forest-600 font-bold bangla text-sm">{{ event.year }}</span>
              <h4 class="font-display font-bold text-forest-900 text-lg bangla mt-1">{{ event.title }}</h4>
              <p class="text-gray-500 bangla text-sm mt-1 leading-relaxed">{{ event.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <SectionHeader
          tag="আমাদের টিম"
          tagIcon="👥"
          title="একা হলে ব্যক্তি, সংঘে এলে শক্তি"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div v-for="(member, i) in teamMembers" :key="member.id" class="text-center animate-on-scroll" :style="`transition-delay: ${i * 100}ms`">
            <div class="relative inline-block mb-4">
              <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full object-cover mx-auto ring-4 ring-forest-200" />
              <div class="absolute -bottom-1 -right-1 w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center text-white text-sm">✓</div>
            </div>
            <h3 class="font-display font-bold text-forest-900 text-xl bangla">{{ member.name }}</h3>
            <p class="text-forest-600 text-sm bangla font-medium mt-1">{{ member.role }}</p>
            <p class="text-gray-500 text-sm bangla mt-2 max-w-xs mx-auto">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-16 bg-forest-50">
      <div class="container mx-auto px-4 lg:px-8">
        <SectionHeader
          tag="সার্টিফিকেশন"
          tagIcon="🏆"
          title="আমাদের স্বীকৃতি ও সনদ"
        />
        <div class="flex flex-wrap justify-center gap-6">
          <div v-for="cert in certifications" :key="cert.name" class="bg-white rounded-2xl p-6 shadow-md text-center w-40 animate-on-scroll hover:shadow-xl transition-all">
            <div class="text-4xl mb-3">{{ cert.icon }}</div>
            <p class="text-forest-900 font-semibold bangla text-sm">{{ cert.name }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from '@/components/common/PageHero.vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import { teamMembers } from '@/data'

const values = [
  { icon: '🌿', title: 'প্রাকৃতিকতা' },
  { icon: '🤝', title: 'বিশ্বস্ততা' },
  { icon: '💚', title: 'স্বাস্থ্য সচেতনতা' },
  { icon: '🌍', title: 'পরিবেশ রক্ষা' },
]

const timeline = [
  { year: '২০২৩', title: 'তারাবান ফার্মের প্রতিষ্ঠা', desc: 'চট্টগ্রামে প্রথম ছোট্ট উদ্যোগ শুরু হয়। মাত্র ২ জন কৃষকের সাথে যাত্রা শুরু।' },
  { year: '২০২৪', title: 'প্রথম ১০০ গ্রাহক', desc: 'অনলাইন বিক্রয় শুরু এবং ১০০ পরিবারে পণ্য পৌঁছানো সম্পন্ন।' },
  { year: '২০২৫', title: 'সম্প্রসারণ ও স্বীকৃতি', desc: '১৫+ উদ্যোক্তার সাথে চুক্তি, জাতীয় পুরস্কার অর্জন।' },
  { year: '২০২৬', title: 'ডিজিটাল প্ল্যাটফর্ম', desc: 'সম্পূর্ণ অনলাইন ই-কমার্স প্ল্যাটফর্ম চালু, ৫০০+ গ্রাহক।' },
]

const certifications = [
  { icon: '🌿', name: 'জৈব সনদ' },
  { icon: '🧪', name: 'ল্যাব পরীক্ষিত' },
  { icon: '🏆', name: 'সেরা উদ্যোক্তা' },
  { icon: '✅', name: 'BSTI অনুমোদিত' },
  { icon: '🌍', name: 'ইকো-ফ্রেন্ডলি' },
]
</script>
