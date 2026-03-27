<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center bg-gradient-to-br from-earth-800 via-forest-900 to-forest-800 overflow-hidden">
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
            <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              <span class="bangla">সুস্থ্য জীবনের জন্য</span>
              <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 bangla">
                নিরাপদ খাদ্য</span>
              <br />
            </h1>

            <p class="text-forest-200 text-lg md:text-xl bangla leading-relaxed mb-8 max-w-xl">
              তারাবান ফার্ম থেকে সরাসরি আপনার দরজায় পৌঁছে যাচ্ছে প্রকৃতির সেরা জৈব ও নিরাপদ খাদ্যপণ্য। কোনো রাসায়নিক
              নেই, শুধু খাঁটি প্রকৃতি।
            </p>

            <div class="flex flex-nowrap items-center gap-2 sm:gap-4 w-full max-w-xl min-w-0">
              <RouterLink to="/products"
                class="btn-accent flex-1 min-w-0 justify-center text-sm sm:text-base px-3 py-3 sm:px-8 sm:py-4 shadow-2xl shadow-earth-900/30 whitespace-nowrap">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 7H4l1-7z" />
                </svg>
                <span class="bangla truncate">পণ্য দেখুন</span>
              </RouterLink>
              <RouterLink to="/about"
                class="inline-flex flex-1 min-w-0 items-center justify-center gap-1 sm:gap-2 text-white border border-white/30 hover:bg-white/10 px-3 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 bangla text-sm sm:text-base whitespace-nowrap">
                <span class="truncate">আমাদের গল্প</span>
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </RouterLink>
            </div>

            <!-- Stats -->
            <div
              class="flex flex-nowrap items-start justify-between gap-2 sm:gap-4 md:gap-8 mt-12 pt-8 border-t border-forest-700/50 min-w-0">
              <div v-for="stat in stats" :key="stat.label" class="min-w-0 flex-1 text-center">
                <div class="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white tabular-nums leading-tight">
                  {{ stat.value }}
                </div>
                <div class="text-forest-400 text-[11px] sm:text-xs md:text-sm bangla mt-1 leading-snug px-0.5">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>

          <!-- Hero Image Grid -->
          <div class="hidden lg:block relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="rounded-3xl overflow-hidden h-56 shadow-2xl">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1678344170545-c3edef92a16e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFncmljdWx0dXJlfGVufDB8fDB8fHww"
                    alt="Honey" class="w-full h-full object-cover" />
                </div>
                <div class="rounded-3xl overflow-hidden h-40 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1703355685722-2996b01483be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpcm18ZW58MHx8MHx8fDA%3D"
                    alt="Farm" class="w-full h-full object-cover" />
                </div>
              </div>
              <div class="space-y-4 mt-8">
                <div class="rounded-3xl overflow-hidden h-40 shadow-2xl">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1680322474521-60fcadf0a416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNyb3BzfGVufDB8fDB8fHww"
                    alt="Vegetables" class="w-full h-full object-cover" />
                </div>
                <div class="rounded-3xl overflow-hidden h-56 shadow-2xl">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1658506729016-b0beeebda208?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYW0lMjB3b3JrfGVufDB8fDB8fHww"
                    alt="Spices" class="w-full h-full object-cover" />
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
    <section class="py-24 relative overflow-hidden"
      style="background: linear-gradient(135deg, #f0fdf4 0%, #fefce8 50%, #f0fdfa 100%);">

      <!-- Ambient glow blobs -->
      <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-40 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #bbf7d0, transparent 70%);"></div>
      <div class="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #a7f3d0, transparent 70%);"></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-20 blur-3xl pointer-events-none"
        style="background: radial-gradient(ellipse, #d1fae5, transparent 60%);"></div>

      <div class="container mx-auto px-4 lg:px-8 relative">
        <SectionHeader tag="কেন তারাবান ফার্ম?" tagIcon="🌱" title="আমাদের প্রতিশ্রুতি"
          subtitle="আমরা বিশ্বাস করি প্রতিটি পরিবার নিরাপদ ও পুষ্টিকর খাদ্য পাওয়ার অধিকার রাখে।" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="(benefit, i) in benefits" :key="benefit.title"
            class="group animate-on-scroll relative rounded-2xl p-6 text-center border hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-default"
            :style="`transition-delay: ${i * 100}ms;
          background: linear-gradient(145deg, rgba(255,255,255,0.85), rgba(255,255,255,0.6));
          backdrop-filter: blur(16px);
          border-color: rgba(255,255,255,0.9);
          box-shadow: 0 4px 24px rgba(34,197,94,0.07), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,1);`">

            <!-- Top shimmer line on hover -->
            <div
              class="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              :style="`background: linear-gradient(90deg, transparent, ${benefit.glowColor}, transparent);`"></div>

            <!-- Corner glow on hover -->
            <div
              class="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl pointer-events-none"
              :style="`background: ${benefit.glowColor};`"></div>

            <!-- Bottom border accent on hover -->
            <div
              class="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="`background: linear-gradient(90deg, transparent, ${benefit.glowColor}80, transparent);`"></div>

            <!-- Icon bubble -->
            <div
              class="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 relative transition-transform duration-300 group-hover:scale-110"
              :style="`background: linear-gradient(135deg, ${benefit.bgFrom}, ${benefit.bgTo});
            box-shadow: 0 4px 16px ${benefit.glowColor}30;
            border: 1px solid ${benefit.glowColor}25;`">

              <!-- Inline SVG per benefit -->
              <svg v-if="i === 0" viewBox="0 0 32 32" fill="none" class="w-7 h-7">
                <path d="M16 4C10 4 6 9 6 14c0 4 2 7 5 9v3h10v-3c3-2 5-5 5-9 0-5-4-10-10-10z"
                  :fill="`${benefit.glowColor}25`" :stroke="benefit.glowColor" stroke-width="1.5"
                  stroke-linejoin="round" />
                <path d="M12 14c0-2.2 1.8-4 4-4s4 1.8 4 4" :stroke="benefit.glowColor" stroke-width="1.5"
                  stroke-linecap="round" opacity="0.6" />
                <line x1="16" y1="4" x2="16" y2="2" :stroke="benefit.glowColor" stroke-width="1.5"
                  stroke-linecap="round" />
                <line x1="6" y1="14" x2="4" y2="14" :stroke="benefit.glowColor" stroke-width="1.5"
                  stroke-linecap="round" opacity="0.5" />
                <line x1="26" y1="14" x2="28" y2="14" :stroke="benefit.glowColor" stroke-width="1.5"
                  stroke-linecap="round" opacity="0.5" />
              </svg>
              <svg v-else-if="i === 1" viewBox="0 0 32 32" fill="none" class="w-7 h-7">
                <rect x="2" y="18" width="20" height="9" rx="2" :fill="`${benefit.glowColor}20`"
                  :stroke="benefit.glowColor" stroke-width="1.5" />
                <path d="M22 21h4l3 3v3h-7v-6z" :fill="`${benefit.glowColor}20`" :stroke="benefit.glowColor"
                  stroke-width="1.5" stroke-linejoin="round" />
                <circle cx="7" cy="29" r="2" :fill="benefit.glowColor" />
                <circle cx="20" cy="29" r="2" :fill="benefit.glowColor" />
                <path d="M6 18v-4l4-4h8l4 4v4" :stroke="benefit.glowColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" opacity="0.6" />
              </svg>
              <svg v-else-if="i === 2" viewBox="0 0 32 32" fill="none" class="w-7 h-7">
                <path d="M16 3L4 8v8c0 7 5 12 12 13 7-1 12-6 12-13V8L16 3z" :fill="`${benefit.glowColor}20`"
                  :stroke="benefit.glowColor" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M10 16l4 4 8-8" :stroke="benefit.glowColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              <svg v-else viewBox="0 0 32 32" fill="none" class="w-7 h-7">
                <circle cx="16" cy="16" r="11" :fill="`${benefit.glowColor}20`" :stroke="benefit.glowColor"
                  stroke-width="1.5" />
                <path d="M16 8v8l5 3" :stroke="benefit.glowColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M5 16H2M30 16h-3M16 2V5M16 27v3" :stroke="benefit.glowColor" stroke-width="1.5"
                  stroke-linecap="round" opacity="0.4" />
              </svg>
            </div>

            <h3 class="font-display font-bold text-gray-800 text-base bangla mb-2 leading-snug">
              {{ benefit.title }}
            </h3>
            <p
              class="text-gray-400 text-sm bangla leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
              {{ benefit.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-20 relative overflow-hidden"
      style="background: linear-gradient(135deg, #0f2d1f 0%, #1a4731 40%, #0d3320 70%, #162b1e 100%);">

      <!-- Decorative blobs -->
      <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #22c55e, transparent 70%);"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #4ade80, transparent 70%);"></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style="background: radial-gradient(circle, #86efac, transparent 60%);"></div>

      <!-- Subtle leaf pattern -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2260%22>🍃</text></svg>'); background-size: 80px;">
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative">
        <SectionHeader tag="Products" tagIcon="📦" title="Top Categories"
          subtitle="সেরা মানের জৈব ও প্রাকৃতিক পণ্য বেছে নিন" titleClass="text-white" />

        <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
          <RouterLink v-for="cat in productCategories" :key="cat.slug" :to="`/products?category=${cat.slug}`"
            class="group flex flex-col items-center rounded-2xl py-6 px-3 border transition-all duration-300 hover:-translate-y-1"
            :class="cat.active
              ? 'border-green-400/60 shadow-xl shadow-green-900/40'
              : 'border-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-black/30'"
            :style="cat.active
              ? 'background: linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08)); backdrop-filter: blur(12px);'
              : 'background: linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03)); backdrop-filter: blur(8px);'">
            <!-- Icon bubble -->
            <div
              class="w-14 h-14 rounded-full flex items-center justify-center mb-3 text-2xl transition-transform duration-300 group-hover:scale-110"
              :style="{ background: cat.bubbleColor, boxShadow: `0 4px 20px ${cat.glowColor}` }">
              {{ cat.icon }}
            </div>

            <!-- Name -->
            <span class="text-sm font-semibold text-center leading-tight bangla transition-colors duration-200"
              :class="cat.active ? 'text-white' : 'text-white/75 group-hover:text-white'">
              {{ cat.name }}
            </span>

            <!-- Count -->
            <span class="text-xs mt-1 transition-colors duration-200"
              :class="cat.active ? 'text-green-300' : 'text-white/35 group-hover:text-white/55'">
              ({{ cat.count }} item)
            </span>

            <!-- Active indicator dot -->
            <div v-if="cat.active" class="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shadow-sm shadow-green-400"></div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-24 relative overflow-hidden"
      style="background: linear-gradient(160deg, #f0fdf4 0%, #fafff7 40%, #f0fdfa 100%);">
      <div class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #bbf7d0, transparent 70%);"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #a7f3d0, transparent 70%);"></div>

      <div class="container mx-auto px-4 lg:px-8 relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14">
          <SectionHeader tag="বিশেষ পণ্য" tagIcon="⭐" title="জনপ্রিয় পণ্যসমূহ"
            subtitle="আমাদের সেরা বিক্রিত পণ্যগুলো দেখুন" :centered="false" />
          <RouterLink to="/products"
            class="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bangla border border-green-200 text-green-700 bg-white hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 mt-4 sm:mt-0 mb-0 sm:mb-12 shadow-sm hover:shadow-md whitespace-nowrap">
            সব পণ্য দেখুন
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
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
    <section class="py-24 relative overflow-hidden"
      style="background: linear-gradient(135deg, #0f2d1f 0%, #1a4731 45%, #0d3320 100%);">

      <div class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #4ade80, transparent 70%);"></div>
      <div class="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #22c55e, transparent 70%);"></div>
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2260%22>🍃</text></svg>'); background-size: 80px;">
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative">
        <SectionHeader tag="আমাদের প্রক্রিয়া" tagIcon="🚜" title="ফার্ম থেকে আপনার টেবিলে"
          subtitle="প্রতিটি পণ্য যেভাবে আপনার কাছে পৌঁছায়" titleClass="text-white" />

        <div class="relative mt-4">
          <!-- Connecting dashed line (desktop) -->
          <div class="hidden md:flex absolute top-14 left-[12.5%] right-[12.5%] items-center pointer-events-none z-0">
            <div class="flex-1 border-t-2 border-dashed border-green-500/30"></div>
            <div class="w-2 h-2 rounded-full bg-green-500/40 mx-1"></div>
            <div class="flex-1 border-t-2 border-dashed border-green-500/30"></div>
            <div class="w-2 h-2 rounded-full bg-green-500/40 mx-1"></div>
            <div class="flex-1 border-t-2 border-dashed border-green-500/30"></div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            <div v-for="(step, i) in processSteps" :key="step.title"
              class="group flex flex-col items-center text-center animate-on-scroll"
              :style="`transition-delay: ${i * 150}ms`">

              <!-- Card -->
              <div
                class="w-full rounded-2xl p-5 border border-white/10 hover:border-green-400/40 transition-all duration-300 hover:-translate-y-1"
                style="background: linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04)); backdrop-filter: blur(10px);">

                <!-- SVG Icon Circle -->
                <div class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center relative"
                  style="background: linear-gradient(135deg, rgba(74,222,128,0.2), rgba(34,197,94,0.1)); border: 1.5px solid rgba(74,222,128,0.3);">
                  <!-- Step number badge -->
                  <div
                    class="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style="background: linear-gradient(135deg, #16a34a, #059669);">
                    {{ i + 1 }}
                  </div>
                  <!-- Inline SVG per step -->
                  <svg v-if="i === 0" viewBox="0 0 40 40" fill="none" class="w-8 h-8">
                    <path d="M20 6C13 6 8 11 8 18c0 5 3 9 7 11v3h10v-3c4-2 7-6 7-11 0-7-5-12-12-12z"
                      fill="rgba(74,222,128,0.3)" stroke="#4ade80" stroke-width="1.5" />
                    <path d="M15 18c0-3 2-5 5-5s5 2 5 5" stroke="#86efac" stroke-width="1.5" stroke-linecap="round" />
                    <line x1="20" y1="6" x2="20" y2="3" stroke="#4ade80" stroke-width="1.5" stroke-linecap="round" />
                    <line x1="8" y1="18" x2="5" y2="18" stroke="#4ade80" stroke-width="1.5" stroke-linecap="round" />
                    <line x1="32" y1="18" x2="35" y2="18" stroke="#4ade80" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                  <svg v-else-if="i === 1" viewBox="0 0 40 40" fill="none" class="w-8 h-8">
                    <rect x="8" y="14" width="24" height="16" rx="3" fill="rgba(74,222,128,0.2)" stroke="#4ade80"
                      stroke-width="1.5" />
                    <path d="M14 14v-3a6 6 0 1112 0v3" stroke="#86efac" stroke-width="1.5" stroke-linecap="round" />
                    <circle cx="20" cy="22" r="3" fill="#4ade80" />
                    <line x1="20" y1="25" x2="20" y2="28" stroke="#4ade80" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                  <svg v-else-if="i === 2" viewBox="0 0 40 40" fill="none" class="w-8 h-8">
                    <rect x="7" y="18" width="26" height="12" rx="3" fill="rgba(74,222,128,0.2)" stroke="#4ade80"
                      stroke-width="1.5" />
                    <path d="M12 18v-3a8 3 0 0116 0v3" stroke="#86efac" stroke-width="1.5" stroke-linecap="round" />
                    <circle cx="14" cy="24" r="2" fill="#4ade80" />
                    <circle cx="20" cy="24" r="2" fill="#4ade80" />
                    <circle cx="26" cy="24" r="2" fill="#4ade80" />
                  </svg>
                  <svg v-else viewBox="0 0 40 40" fill="none" class="w-8 h-8">
                    <path d="M10 30 L10 20 L20 12 L30 20 L30 30 Z" fill="rgba(74,222,128,0.2)" stroke="#4ade80"
                      stroke-width="1.5" stroke-linejoin="round" />
                    <rect x="16" y="22" width="8" height="8" rx="1" fill="#4ade80" opacity="0.6" />
                    <path d="M7 21 L20 10 L33 21" stroke="#86efac" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>

                <h3 class="font-display font-bold text-white bangla mb-1.5 text-sm">{{ step.title }}</h3>
                <p class="text-green-200/60 text-xs bangla leading-relaxed">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Health Tips Section -->
    <section class="py-24 relative overflow-hidden"
      style="background: linear-gradient(160deg, #f0fdf4 0%, #fefce8 50%, #ecfdf5 100%);">

      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 opacity-40 blur-3xl pointer-events-none"
        style="background: radial-gradient(ellipse, #bbf7d0, transparent 70%);"></div>

      <div class="container mx-auto px-4 lg:px-8 relative">
        <SectionHeader tag="স্বাস্থ্য টিপস" tagIcon="💚" title="দৈনন্দিন স্বাস্থ্য টিপস"
          subtitle="সুস্থ থাকুন, সুখী থাকুন" />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(tip, i) in healthTips" :key="tip.title"
            class="group relative rounded-2xl p-6 border border-white/80 hover:border-green-200 hover:-translate-y-1 transition-all duration-300 animate-on-scroll overflow-hidden"
            :style="`transition-delay: ${i * 100}ms; background: linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,253,244,0.8)); backdrop-filter: blur(8px); box-shadow: 0 4px 24px rgba(34,197,94,0.08);`">

            <!-- Corner gradient accent -->
            <div class="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 pointer-events-none"
              :style="`background: radial-gradient(circle at top right, ${tip.accentColor}, transparent 70%);`"></div>

            <!-- Icon with inline SVG background -->
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative"
              :style="`background: linear-gradient(135deg, ${tip.bgFrom}, ${tip.bgTo}); box-shadow: 0 4px 16px ${tip.glowColor};`">
              <span class="text-2xl">{{ tip.icon }}</span>
            </div>

            <h3 class="font-display font-bold text-gray-800 text-lg bangla mb-2">{{ tip.title }}</h3>
            <p class="text-gray-500 bangla text-sm leading-relaxed">{{ tip.desc }}</p>

            <!-- Bottom accent line -->
            <div
              class="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="`background: linear-gradient(90deg, transparent, ${tip.accentColor}, transparent);`"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Preview -->
    <section class="py-24 relative overflow-hidden"
      style="background: linear-gradient(135deg, #0f2d1f 0%, #1a4731 45%, #0d3320 100%);">

      <div class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #4ade80, transparent 70%);"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #22c55e, transparent 70%);"></div>
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2260%22>📖</text></svg>'); background-size: 90px;">
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14">
          <SectionHeader tag="স্বাস্থ্য ব্লগ" tagIcon="📖" title="সর্বশেষ নিবন্ধসমূহ"
            subtitle="পুষ্টি ও স্বাস্থ্য সম্পর্কে জানুন" :centered="false" titleClass="text-white" />
          <RouterLink to="/blog"
            class="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bangla border border-white/20 text-white/80 hover:bg-white hover:text-green-800 hover:border-white transition-all duration-300 mt-4 sm:mt-0 mb-0 sm:mb-12 whitespace-nowrap backdrop-blur-sm"
            style="background: rgba(255,255,255,0.08);">
            সব পড়ুন
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
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
  {
    title: '১০০% প্রাকৃতিক',
    desc: 'কোনো রাসায়নিক সার বা কীটনাশক ব্যবহার করা হয় না।',
    bgFrom: '#dcfce7',
    bgTo: '#bbf7d0',
    glowColor: '#16a34a',
  },
  {
    title: 'সরাসরি ফার্ম থেকে',
    desc: 'মধ্যস্থকারী ছাড়াই সরাসরি কৃষক থেকে আপনার কাছে।',
    bgFrom: '#fef9c3',
    bgTo: '#fde68a',
    glowColor: '#d97706',
  },
  {
    title: 'মানসম্পন্ন পরীক্ষিত',
    desc: 'প্রতিটি পণ্য ল্যাবে পরীক্ষিত ও মানসম্পন্ন।',
    bgFrom: '#dbeafe',
    bgTo: '#bfdbfe',
    glowColor: '#2563eb',
  },
  {
    title: 'দ্রুত ডেলিভারি',
    desc: '২৪-৪৮ ঘণ্টার মধ্যে আপনার দরজায় পৌঁছে দেওয়া হয়।',
    bgFrom: '#f3e8ff',
    bgTo: '#e9d5ff',
    glowColor: '#9333ea',
  },
]

const productCategories = [
  {
    slug: 'vegetables',
    name: 'Vegetables',
    icon: '🥦',
    count: 140,
    bubbleColor: 'linear-gradient(135deg, #bbf7d0, #86efac)',
    glowColor: 'rgba(134,239,172,0.35)',
    active: true,
  },
  {
    slug: 'fruits',
    name: 'Fruits',
    icon: '🍎',
    count: 45,
    bubbleColor: 'linear-gradient(135deg, #fed7aa, #fdba74)',
    glowColor: 'rgba(253,186,116,0.35)',
    active: false,
  },
  {
    slug: 'meat',
    name: 'Meat',
    icon: '🥩',
    count: 25,
    bubbleColor: 'linear-gradient(135deg, #fecaca, #fca5a5)',
    glowColor: 'rgba(252,165,165,0.35)',
    active: false,
  },
  {
    slug: 'fish',
    name: 'Fish',
    icon: '🐟',
    count: 38,
    bubbleColor: 'linear-gradient(135deg, #bfdbfe, #93c5fd)',
    glowColor: 'rgba(147,197,253,0.35)',
    active: false,
  },
  {
    slug: 'dairy',
    name: 'Dairy & Milk',
    icon: '🥛',
    count: 52,
    bubbleColor: 'linear-gradient(135deg, #fef9c3, #fde68a)',
    glowColor: 'rgba(253,230,138,0.35)',
    active: false,
  },
  {
    slug: 'browse-all',
    name: 'Browse All',
    icon: '🛒',
    count: 240,
    bubbleColor: 'linear-gradient(135deg, #e9d5ff, #c4b5fd)',
    glowColor: 'rgba(196,181,253,0.35)',
    active: false,
  },
]

const processSteps = [
  { icon: '🌱', title: 'জৈব চাষ', desc: 'রাসায়নিক মুক্ত জমিতে প্রাকৃতিক পদ্ধতিতে চাষ।' },
  { icon: '🤲', title: 'যত্নসহকারে সংগ্রহ', desc: 'হাতে বাছাই করে সেরা পণ্য সংগ্রহ করা হয়।' },
  { icon: '🧪', title: 'মান পরীক্ষা', desc: 'ল্যাবে পরীক্ষা করে মান নিশ্চিত করা হয়।' },
  { icon: '🚚', title: 'আপনার দরজায়', desc: 'সতেজ অবস্থায় প্যাক করে দ্রুত পৌঁছে দেওয়া হয়।' },
]

const healthTips = [
  {
    icon: '🥗',
    title: 'সুষম খাদ্যাভ্যাস',
    desc: 'প্রতিদিন তাজা শাকসবজি ও ফলমূল খান। রাসায়নিক মুক্ত জৈব খাবার বেছে নিন।',
    accentColor: '#4ade80',
    bgFrom: '#dcfce7',
    bgTo: '#bbf7d0',
    glowColor: 'rgba(74,222,128,0.25)',
  },
  {
    icon: '💧',
    title: 'পর্যাপ্ত পানি পান',
    desc: 'প্রতিদিন কমপক্ষে ৮ গ্লাস বিশুদ্ধ পানি পান করুন। শরীর সুস্থ রাখুন।',
    accentColor: '#60a5fa',
    bgFrom: '#dbeafe',
    bgTo: '#bfdbfe',
    glowColor: 'rgba(96,165,250,0.25)',
  },
  {
    icon: '🌙',
    title: 'পর্যাপ্ত ঘুম',
    desc: 'প্রতিরাতে ৭-৮ ঘন্টা ঘুমান। ভালো ঘুম শরীর ও মনকে সতেজ রাখে।',
    accentColor: '#c084fc',
    bgFrom: '#f3e8ff',
    bgTo: '#e9d5ff',
    glowColor: 'rgba(192,132,252,0.25)',
  },
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
