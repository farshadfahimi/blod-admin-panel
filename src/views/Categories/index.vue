<script lang="ts" setup>
import type { AxiosInstance, AxiosResponse } from 'axios';
import { inject } from 'vue'
import CategoryBox from '@/components/Category/Box.vue'
const axios = inject('axios') as AxiosInstance

const { data }: AxiosResponse = await axios.get('/categories')
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-4 gap-4">
      <CategoryBox v-for="category of data" :key="`category-box-item-${category.id}`" :category="category" />
    </div>
  </div>
</template>