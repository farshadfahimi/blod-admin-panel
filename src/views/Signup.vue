<script lang="ts">
interface States {
  email: string,
  password: string,
  busy: boolean
}
</script>

<script setup lang="ts">
import type { AxiosInstance, AxiosError, AxiosResponse } from "axios"
import { reactive, inject, onMounted } from "vue"
import { useRouter } from 'vue-router'
import type { IToaster } from "@/plugins/toast";

const axios = inject('axios') as AxiosInstance
const toaster = inject('toaster') as IToaster
const router = useRouter()

const form = reactive<States>({
  email: '',
  password: '',
  busy: false,
})


const onSubmit = async () => {
  form.busy = true

  try {
    const response: AxiosResponse = await axios.post('/auth/signup', form)

    window.localStorage.setItem('auth_token', `Bearer ${response.data.token}`)
    router.push({ name: 'home' })
  } catch (e: any & AxiosError) {
    form.busy = false

    if (e.response) {
      if (e.response.status === 409) {
        toaster.warning('this user exists')
        return router.push({ name: 'signin', query: { email: form.email } })
      } else {
        return toaster.danger(e.response.data.message)
      }
    }
    
    return toaster.danger('Some thing crach')
  }
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