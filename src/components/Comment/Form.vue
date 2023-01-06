<script lang="ts" setup>
import type { CommentState } from '@/interface/comment'
import type { IToaster } from '@/plugins/toast';
import toast from '@/plugins/toast';
import type { AxiosInstance, AxiosResponse } from 'axios';
import { reactive, inject } from 'vue';

const axios = inject('axios') as AxiosInstance
const toaster = inject('toaster') as IToaster
const emit = defineEmits<{
  (e: 'onStore', comment: any): void
}>()

const { endpoint } = defineProps({ endpoint: { type: String, required: true }, id: { type: String, required: true } });
const state = reactive<CommentState>({ body: '', busy: false });

const onSubmit = async () => {
  state.busy = true


  try {
    const comment: AxiosResponse = await axios.post(endpoint, {
      body: state.body
    })

    emit('onStore', comment)

    state.body = ''

    toaster.success('Your comment is saved')
  } catch (e: any) {
    if (e.response)
      toaster.danger(e.response.data.message)
    else
      toaster.danger('error on connection')
  }

  state.busy = false
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="py-3">
    <textarea v-model="state.body" class="p-1 block w-full border mb-4" rows="10"></textarea>

    <button :disabled="state.busy || !state.body.length" type="submit" class="btn-submit">
      Submit Comment
    </button>
  </form>
</template>