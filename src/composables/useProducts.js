import { ref, computed } from 'vue'
import { products as allProducts } from '@/data'

export function useProducts() {
  const loading = ref(false)
  const error = ref(null)
  const searchQuery = ref('')
  const activeCategory = ref('all')
  const sortBy = ref('default')
  const priceRange = ref([0, 5000])

  const categories = [
    { slug: 'all', name: 'সকল পণ্য', nameEn: 'All Products', icon: '🌿' },
    { slug: 'organic', name: 'জৈব খাদ্য', nameEn: 'Organic Foods', icon: '🌾' },
    { slug: 'honey', name: 'প্রাকৃতিক মধু', nameEn: 'Natural Honey', icon: '🍯' },
    { slug: 'grains', name: 'শস্য ও ডাল', nameEn: 'Grains & Pulses', icon: '🫘' },
    { slug: 'dry', name: 'শুকনো খাবার', nameEn: 'Dry Foods', icon: '🌰' },
  ]

  const filteredProducts = computed(() => {
    let result = [...allProducts]

    // Category filter
    if (activeCategory.value !== 'all') {
      result = result.filter(p => p.category === activeCategory.value)
    }

    // Search filter
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }

    // Price range filter
    result = result.filter(p => p.price >= priceRange.value[0] && p.price <= priceRange.value[1])

    // Sort
    switch (sortBy.value) {
      case 'price-low':  result.sort((a, b) => a.price - b.price); break
      case 'price-high': result.sort((a, b) => b.price - a.price); break
      case 'rating':     result.sort((a, b) => b.rating - a.rating); break
      case 'newest':     result.sort((a, b) => b.id - a.id); break
    }

    return result
  })

  const featuredProducts = computed(() => allProducts.filter(p => p.badge).slice(0, 4))

  function getProductById(id) {
    return allProducts.find(p => p.id === Number(id))
  }

  function getRelatedProducts(product, limit = 4) {
    return allProducts
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, limit)
  }

  function resetFilters() {
    searchQuery.value = ''
    activeCategory.value = 'all'
    sortBy.value = 'default'
    priceRange.value = [0, 5000]
  }

  return {
    loading,
    error,
    searchQuery,
    activeCategory,
    sortBy,
    priceRange,
    categories,
    filteredProducts,
    featuredProducts,
    getProductById,
    getRelatedProducts,
    resetFilters,
  }
}
