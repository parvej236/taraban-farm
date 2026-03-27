import axios from 'axios'

// Base API instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
})

// Request interceptor — attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('taraban_token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor — handle auth errors globally
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('taraban_token')
      localStorage.removeItem('taraban_user')
      window.location.href = '/login'
    }
    return Promise.reject(error.response?.data || error)
  }
)

// ─── Auth endpoints ────────────────────────────────────────────
export const authApi = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
  refreshToken: () => api.post('/auth/refresh'),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (data) => api.post('/auth/reset-password', data),
  getProfile: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/me', data),
}

// ─── Product endpoints ─────────────────────────────────────────
export const productApi = {
  getAll: (params) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
  getBySlug: (slug) => api.get(`/products/slug/${slug}`),
  getByCategory: (category, params) => api.get(`/products/category/${category}`, { params }),
  getFeatured: () => api.get('/products/featured'),
  search: (query) => api.get('/products/search', { params: { q: query } }),
  getReviews: (productId) => api.get(`/products/${productId}/reviews`),
  addReview: (productId, review) => api.post(`/products/${productId}/reviews`, review),
}

// ─── Order endpoints ───────────────────────────────────────────
export const orderApi = {
  create: (orderData) => api.post('/orders', orderData),
  getMyOrders: (params) => api.get('/orders/my', { params }),
  getById: (id) => api.get(`/orders/${id}`),
  cancel: (id) => api.patch(`/orders/${id}/cancel`),
  track: (id) => api.get(`/orders/${id}/track`),
}

// ─── Blog endpoints ────────────────────────────────────────────
export const blogApi = {
  getAll: (params) => api.get('/blog', { params }),
  getBySlug: (slug) => api.get(`/blog/${slug}`),
  getByCategory: (category) => api.get(`/blog/category/${category}`),
  getFeatured: () => api.get('/blog/featured'),
}

// ─── Entrepreneur endpoints ────────────────────────────────────
export const entrepreneurApi = {
  getAll: () => api.get('/entrepreneurs'),
  getById: (id) => api.get(`/entrepreneurs/${id}`),
}

// ─── Category endpoints ────────────────────────────────────────
export const categoryApi = {
  getAll: () => api.get('/categories'),
}

// ─── Contact endpoint ──────────────────────────────────────────
export const contactApi = {
  send: (data) => api.post('/contact', data),
}

// ─── Newsletter endpoint ───────────────────────────────────────
export const newsletterApi = {
  subscribe: (email) => api.post('/newsletter/subscribe', { email }),
}

// ─── Payment endpoint ──────────────────────────────────────────
export const paymentApi = {
  initiate: (data) => api.post('/payment/initiate', data),
  verify: (transactionId) => api.post('/payment/verify', { transactionId }),
}

export default api
