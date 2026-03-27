<template>
  <div id="taraban-app" :class="locale === 'bn' ? 'bangla-mode' : ''">
    <AppHeader />
    <main class="min-h-screen">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
    <CartDrawer />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import CartDrawer from '@/components/common/CartDrawer.vue'
import ScrollToTop from '@/components/common/ScrollToTop.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { locale } = useI18n()
const { initScrollAnimation } = useScrollAnimation()

onMounted(() => {
  initScrollAnimation()
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.bangla-mode {
  font-family: 'Hind Siliguri', 'Lato', sans-serif;
}
</style>
