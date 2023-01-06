<script lang="ts">
interface Post {
  id?: string
  title: string,
  body: string
}
</script>

<script lang="ts" setup>
import type { IToaster } from '@/plugins/toast';
import type { AxiosInstance, AxiosResponse } from 'axios';
import { inject, reactive, type PropType } from 'vue';
const axios = inject('axios') as AxiosInstance
const toaster = inject('toaster') as IToaster

const emit = defineEmits<{
  (e: 'onStore', post: any): void
}>()

const props = defineProps({ post: { type: Object as PropType<Post>, required: false, default: null } })

const form = reactive<Post>({
  title: props.post?.title,
  body: props.post?.body
})

const store = async (): Promise<AxiosResponse> => {
  return await axios.post('/posts', form)
}

const update = async (): Promise<AxiosResponse> => {
  return await axios.put(`/posts/${props.post.id}`, form)
}

const onSubmit = async () => {
  try {
    let response = null
    if (props.post.id)
      response = await update()
    else
      response = await store()

    
    toaster.success('post Store successFully')
    emit('onStore', response.data)
  } catch (e: any) {
    if (e.response) {
      return toaster.danger(e.response.data.message)
    }

    return toaster.danger('uncatched error happend')
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col mb-4">
      <label for="posttitle" class="mb-2">Post title: </label>
      <input id="posttitle" type="text" v-model="form.title" class="input" />
    </div>

    <div class="flex flex-col mb-4">
      <label for="postBody" class="mb-2">Content: </label>
      <textarea id="postBody" rows="10" v-model="form.body" class="py-2 px-3 border rounded"></textarea>
    </div>

    <button type="submit" class="py-3 px-6 bg-green-500 rounded text-white">Submit</button>
  </form>
</template>