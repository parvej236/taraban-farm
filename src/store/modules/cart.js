import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref(JSON.parse(localStorage.getItem('taraban_cart') || '[]'))
  const isOpen = ref(false)

  const itemCount = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))
  const total = computed(() => items.value.reduce((sum, item) => sum + item.price * item.quantity, 0))
  const isEmpty = computed(() => items.value.length === 0)

  function persist() {
    localStorage.setItem('taraban_cart', JSON.stringify(items.value))
  }

  function addItem(product, quantity = 1) {
    const existing = items.value.find(i => i.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        nameEn: product.nameEn,
        price: product.price,
        image: product.image,
        weight: product.weight,
        quantity,
      })
    }
    persist()
  }

  function removeItem(productId) {
    items.value = items.value.filter(i => i.id !== productId)
    persist()
  }

  function updateQuantity(productId, quantity) {
    const item = items.value.find(i => i.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeItem(productId)
      } else {
        item.quantity = quantity
        persist()
      }
    }
  }

  function clearCart() {
    items.value = []
    persist()
  }

  function toggleDrawer() {
    isOpen.value = !isOpen.value
  }

  function openDrawer() {
    isOpen.value = true
  }

  function closeDrawer() {
    isOpen.value = false
  }

  return {
    items, isOpen, itemCount, total, isEmpty,
    addItem, removeItem, updateQuantity, clearCart,
    toggleDrawer, openDrawer, closeDrawer,
  }
})
