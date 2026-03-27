import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('taraban_user') || 'null'))
  const token = ref(localStorage.getItem('taraban_token') || null)
  const loading = ref(false)

  const isAuthenticated = computed(() => !!token.value && !!user.value)

  async function login(credentials) {
    loading.value = true
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      const mockUser = {
        id: 1,
        name: 'আবদুল করিম',
        email: credentials.email,
        phone: '+880 1711-000000',
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80',
        orders: [],
      }
      const mockToken = 'mock_jwt_token_' + Date.now()
      user.value = mockUser
      token.value = mockToken
      localStorage.setItem('taraban_user', JSON.stringify(mockUser))
      localStorage.setItem('taraban_token', mockToken)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      loading.value = false
    }
  }

  async function register(userData) {
    loading.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        avatar: null,
        orders: [],
      }
      const mockToken = 'mock_jwt_token_' + Date.now()
      user.value = newUser
      token.value = mockToken
      localStorage.setItem('taraban_user', JSON.stringify(newUser))
      localStorage.setItem('taraban_token', mockToken)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('taraban_user')
    localStorage.removeItem('taraban_token')
  }

  function updateProfile(data) {
    user.value = { ...user.value, ...data }
    localStorage.setItem('taraban_user', JSON.stringify(user.value))
  }

  return { user, token, loading, isAuthenticated, login, register, logout, updateProfile }
})
