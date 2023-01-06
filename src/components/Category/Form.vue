<script lang="ts">
interface State {
  title: string,
  slug: string
}
</script>

<script lang="ts" setup>
import type { Category, Form } from '@/interface';
import type { IToaster } from '@/plugins/toast';
import type { AxiosInstance, AxiosResponse } from 'axios';
import { reactive, inject, type PropType, onMounted } from 'vue';
const emit = defineEmits<{
  (e: 'onSubmit', category: Category): void
}>()
const axios = inject('axios') as AxiosInstance
const toaster = inject('toaster') as IToaster
const { category } = defineProps({ category: { type: Object as PropType<Category>, required: false } })

const state = reactive<State & Form>({ title: '', slug: '', busy: false })

const store = async () :Promise<AxiosResponse> => {
  return await axios.post('/categories', { title: state.title, slug: state.slug })
}

const update = async () :Promise<AxiosResponse> => {
  return await axios.put(`/categories/${category?.id}`)
}

onMounted(() => {
  if (category) {
    state.title = category.title
    state.slug = category.slug
  }
})

const onSubmit = async () => {
  state.busy = true

  try {
    let response: AxiosResponse
    if (category?.id)
      response = await update()
    else
      response = await store()

    toaster.success('Category Store Successfully')
    state.title = ''
    state.slug = ''

    emit('onSubmit', response.data)
  } catch (e: any) {
    if (e.response)
      toaster.danger(e.response.data.message)
    else
      toaster.danger('Error on server connection')
  }

  state.busy = false
}
</script>

<template>
<form class="my-7" @submit.prevent="onSubmit">
  <div class="flex flex-col mb-4">
    <label for="categories-title" class="mb-3">Title</label>
    <input id="categories-title" v-model="state.title" type="text" class="input" />
  </div>

  <div class="flex flex-col">
    <label for="categories-slug" class="mb-3">Slug</label>
    <input id="categories-slug" v-model="state.slug" type="text" class="input" />
  </div>

  <button type="submit" class="mt-4 btn-submit">
    Submit
  </button>
</form>
</template>