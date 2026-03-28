import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Safe Food Movement- সুস্থ্যতার জন্য নিরাপদ খাদ্য' },
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/ProductsView.vue'),
    meta: { title: 'আমাদের পণ্য | Safe Food Movement' },
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetailView.vue'),
    meta: { title: 'পণ্যের বিবরণ | Safe Food Movement' },
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/BlogView.vue'),
    meta: { title: 'স্বাস্থ্য ও পুষ্টি | Safe Food Movement' },
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('@/views/BlogPostView.vue'),
    meta: { title: 'ব্লগ পোস্ট | Safe Food Movement' },
  },
  {
    path: '/entrepreneurs',
    name: 'Entrepreneurs',
    component: () => import('@/views/EntrepreneursView.vue'),
    meta: { title: 'আমাদের কৃষক ও উদ্যোক্তা | Safe Food Movement' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'আমাদের সম্পর্কে | Safe Food Movement' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'যোগাযোগ | Safe Food Movement' },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/CartView.vue'),
    meta: { title: 'কার্ট | Safe Food Movement' },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('@/views/CheckoutView.vue'),
    meta: { title: 'চেকআউট | Safe Food Movement', requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { title: 'লগইন | Safe Food Movement', guestOnly: true },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/RegisterView.vue'),
    meta: { title: 'নিবন্ধন | Safe Food Movement', guestOnly: true },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { title: 'ড্যাশবোর্ড | Safe Food Movement', requiresAuth: true },
    children: [
      {
        path: '',
        name: 'DashboardHome',
        component: () => import('@/views/dashboard/DashboardHome.vue'),
      },
      {
        path: 'orders',
        name: 'DashboardOrders',
        component: () => import('@/views/dashboard/DashboardOrders.vue'),
      },
      {
        path: 'profile',
        name: 'DashboardProfile',
        component: () => import('@/views/dashboard/DashboardProfile.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '404 - পাওয়া যায়নি | Safe Food Movement' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

// Navigation guards
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Safe Food Movement'
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
  } else if (to.meta.guestOnly && authStore.isAuthenticated) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
