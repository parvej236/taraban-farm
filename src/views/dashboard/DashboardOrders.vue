<template>
  <div class="bg-white rounded-2xl shadow-md p-6">
    <h1 class="font-display text-2xl font-bold text-forest-900 bangla mb-6">অর্ডার ইতিহাস</h1>
    <div class="text-center py-16">
      <div class="text-6xl mb-4">📦</div>
      <h3 class="font-display text-xl text-forest-900 bangla mb-2">কোনো অর্ডার নেই</h3>
      <p class="text-gray-400 bangla text-sm mb-6">আপনি এখনো কোনো অর্ডার দেননি।</p>
      <RouterLink to="/products" class="btn-primary">পণ্য দেখুন ও অর্ডার করুন</RouterLink>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
