import { ref, computed } from 'vue'
import { toast } from 'vue3-toastify'

const wishlistItems = ref(JSON.parse(localStorage.getItem('taraban_wishlist') || '[]'))

export function useWishlist() {
  const count = computed(() => wishlistItems.value.length)

  function persist() {
    localStorage.setItem('taraban_wishlist', JSON.stringify(wishlistItems.value))
  }

  function isInWishlist(productId) {
    return wishlistItems.value.some(item => item.id === productId)
  }

  function toggleWishlist(product) {
    if (isInWishlist(product.id)) {
      wishlistItems.value = wishlistItems.value.filter(i => i.id !== product.id)
      toast.info('পছন্দের তালিকা থেকে সরানো হয়েছে')
    } else {
      wishlistItems.value.push(product)
      toast.success('পছন্দের তালিকায় যোগ হয়েছে ❤️')
    }
    persist()
  }

  function addToWishlist(product) {
    if (!isInWishlist(product.id)) {
      wishlistItems.value.push(product)
      persist()
      toast.success('পছন্দের তালিকায় যোগ হয়েছে ❤️')
    }
  }

  function removeFromWishlist(productId) {
    wishlistItems.value = wishlistItems.value.filter(i => i.id !== productId)
    persist()
  }

  function clearWishlist() {
    wishlistItems.value = []
    persist()
  }

  return {
    wishlistItems,
    count,
    isInWishlist,
    toggleWishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
  }
}
