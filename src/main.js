import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import App from './App.vue'
import router from './router'
import './assets/main.css'

// i18n messages
import { messages } from './utils/i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'bn',
  fallbackLocale: 'en',
  messages,
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(Vue3Toastify, {
  autoClose: 3000,
  theme: 'light',
  position: 'bottom-right',
})

app.mount('#app')
