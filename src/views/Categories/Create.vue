<script lang="ts" setup>
import CategoryForm from '@/components/Category/Form.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

</script>

<template>
  <div class="container">
    <CategoryForm @on-submit="router.go(-1)" />
  </div>
</template>