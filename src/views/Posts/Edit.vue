<script lang="ts" setup>
import PostForm from '@/components/Post/Form.vue'
import type { AxiosInstance, AxiosResponse } from 'axios';
import { useRoute, useRouter } from 'vue-router'
import { inject } from 'vue';

const axios = inject('axios') as AxiosInstance
const route = useRoute()
const router = useRouter()

const response: AxiosResponse = await axios.get(`/posts/${route.params.id}`)
</script>

<template>
  <div class="container">
    <PostForm :post="response.data" @on-store="router.go(-1)" />
  </div>
</template>