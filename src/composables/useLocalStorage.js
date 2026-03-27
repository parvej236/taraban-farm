import { ref, watch } from 'vue'

/**
 * Reactive ref that syncs with localStorage
 */
export function useLocalStorage(key, defaultValue) {
  const stored = localStorage.getItem(key)
  const parsed = stored ? JSON.parse(stored) : defaultValue
  const data = ref(parsed)

  watch(
    data,
    (val) => {
      if (val === null || val === undefined) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(val))
      }
    },
    { deep: true }
  )

  return data
}
