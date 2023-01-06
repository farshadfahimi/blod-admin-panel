<script setup lang="ts">
import ListItem from '@/components/Post/ListItem.vue'
import type { AxiosInstance } from 'axios';
import { inject } from 'vue'
const axios = inject('axios') as AxiosInstance

const { data } = await axios.get('/posts')

</script>

<template>
  <div class="mx-auto max-w-7xl">
    <ListItem v-for="post of data" :key="`list-post-item-${post.id}`" :post="post" />
  </div>
</template>