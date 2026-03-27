<template>
  <div class="flex items-center gap-1" :title="`${modelValue} / 5`">
    <button
      v-for="star in 5"
      :key="star"
      type="button"
      @click="!readonly && $emit('update:modelValue', star)"
      @mouseenter="!readonly && (hovered = star)"
      @mouseleave="!readonly && (hovered = 0)"
      :class="[
        'transition-transform duration-100',
        !readonly && 'hover:scale-125 cursor-pointer',
        readonly && 'cursor-default',
      ]"
      :aria-label="`${star} তারা`"
    >
      <svg
        class="transition-colors duration-150"
        :class="[
          star <= (hovered || modelValue) ? 'star-filled' : 'star-empty',
          sizeClass,
        ]"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </button>
    <span v-if="showCount && count > 0" class="text-xs text-gray-400 ml-1 bangla">({{ count }})</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  readonly: { type: Boolean, default: false },
  size: { type: String, default: 'md' },  // sm, md, lg
  showCount: { type: Boolean, default: false },
  count: { type: Number, default: 0 },
})
defineEmits(['update:modelValue'])

const hovered = ref(0)
const sizeClass = computed(() => ({
  sm: 'w-3.5 h-3.5',
  md: 'w-5 h-5',
  lg: 'w-7 h-7',
}[props.size]))
</script>
