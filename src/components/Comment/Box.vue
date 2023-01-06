<script lang="ts">
interface Comment {
  auther: any,
  id: string,
  body: string
}

interface Props {
  comment: Comment
}
</script>

<script lang="ts" setup>
  defineProps<Props>()
</script>

<template>
  <div class="comment-box">
    <RouterLink :to="{ name: 'user-profile', params: { id: comment.auther.id } }" class="block text-indigo-600 hover:text-indigo-800">
      {{ comment?.auther.name }}
    </RouterLink>

    {{ comment.body }}
  </div>
</template>

<style lang="postcss">
.comment-box {
  @apply border border-gray-100 p-4 mb-3 rounded-sm;
}
</style>