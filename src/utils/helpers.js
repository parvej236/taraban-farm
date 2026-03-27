/**
 * Format price in Bangladeshi Taka with Bengali numerals option
 */
export function formatPrice(amount, useBengali = false) {
  if (useBengali) {
    const bn = amount.toString().replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d])
    return `৳${bn}`
  }
  return `৳${Number(amount).toLocaleString('en-BD')}`
}

/**
 * Convert English numerals to Bengali
 */
export function toBengaliNumeral(num) {
  return num.toString().replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d])
}

/**
 * Format date to Bangla readable format
 */
export function formatDateBn(dateStr) {
  const months = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর']
  const d = new Date(dateStr)
  const day = toBengaliNumeral(d.getDate())
  const month = months[d.getMonth()]
  const year = toBengaliNumeral(d.getFullYear())
  return `${day} ${month} ${year}`
}

/**
 * Truncate string with ellipsis
 */
export function truncate(str, length = 100) {
  if (!str) return ''
  return str.length > length ? str.slice(0, length) + '...' : str
}

/**
 * Calculate discount percentage
 */
export function discountPercent(original, current) {
  if (!original || original <= current) return 0
  return Math.round(((original - current) / original) * 100)
}

/**
 * Debounce function
 */
export function debounce(fn, delay = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Generate order number
 */
export function generateOrderNumber() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return 'TF' + Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

/**
 * Validate Bangladeshi phone number
 */
export function isValidBDPhone(phone) {
  return /^(\+88)?01[3-9]\d{8}$/.test(phone.replace(/\s/g, ''))
}

/**
 * Slugify text (for Bangla + English)
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .trim()
}

/**
 * Group array by key
 */
export function groupBy(array, key) {
  return array.reduce((result, item) => {
    const group = item[key]
    if (!result[group]) result[group] = []
    result[group].push(item)
    return result
  }, {})
}

/**
 * Get initials from name
 */
export function getInitials(name = '') {
  return name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase()
}
