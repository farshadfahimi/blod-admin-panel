<script lang="ts">
interface States {
  email: string
  password: string
}
</script>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router'
const router = useRoute()
const form = reactive<States>({
  email: '',
  password: ''
})

onMounted(() => {
  if (router.query && router.query.email) {
    form.email = router.query.email as string
  }
})

const onSubmit = async () => {
  alert('form submit')
}
</script>

<template>
  <div class="mx-auto max-w-lg my-8">
    <form class="border border-solid rounded p-4" @submit.prevent="onSubmit">
      <div class="mb-4 grid grid-cols-4">
        <label for="emailInput">Email: </label>
        <input id="emailInput" type="email" class="px-3 py-1 border rounded-sm col-span-3" v-model="form.email" required />
      </div>

      <div class="mb-4 grid grid-cols-4">
        <label for="passwordInput">Password: </label>
        <input id="passwordInput" type="password" class="px-3 py-1 border rounded-sm col-span-3" v-model="form.password" required />
      </div>

      <button type="submit" class="transition duration-350 ease-in-out py-2 px-5 bg-green-600 text-white rounded shadow hover:bg-green-800" :disabled="form.busy">
        {{ form.busy ? 'Please wait...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>