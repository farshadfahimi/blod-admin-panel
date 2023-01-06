<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Toast from './components/Toast/index.vue'
</script>

<template>
  <Header />
  <Toast />
  
  <Suspense>
    <RouterView />

    <template #fallback>
      loading ...
    </template>
  </Suspense>
</template>
