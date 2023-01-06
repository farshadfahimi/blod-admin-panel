<script setup lang="ts">
import CommentForm from '@/components/Comment/Form.vue'
import CommentBox from '@/components/Comment/Box.vue'
import type { AxiosInstance } from 'axios';
import { inject } from 'vue'
import { useRoute } from 'vue-router';
const axios = inject('axios') as AxiosInstance
const route = useRoute()

const { data } = await axios.get(`/posts/${route.params.id}`)
const addComment = (comment: any) => {
  data.push(comment)
}

</script>

<template>
  <div class="container my-5 relative">
    <h1 class="mb-4 text-2xl">
      {{ data.title }}

      <RouterLink :to="{ name: 'post-edit', params: { id: data.id } }">(Edit)</RouterLink>
    </h1>

    <section class="content whitespace-pre-line">
      {{ data.body }}
    </section>

    <hr class="border my-7" />

    <CommentForm :endpoint="`/posts/${data.id}/comments`" :id="data.id" @on-store="addComment" />

    <div class="comment-container mt-5">
      <CommentBox v-for="comment of data.comments" :key="`post-comment-item-${comment.id}`" :comment="comment" />
    </div>
  </div>
</template>