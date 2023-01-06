<script lang="ts" setup>
import PostForm from '@/components/Post/Form.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const storePost = () => {
  return router.push({ name: 'posts' })
}
</script>

<template>
  <div class="mx-auto max-w-4xl my-8">
    <PostForm @onStore="storePost" />
  </div>
</template>