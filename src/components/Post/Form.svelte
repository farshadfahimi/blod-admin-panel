<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import axios from '@/module/Axios'
	import Toaster from '../Toast';
  import type { IPost } from './interface'

  const dispatch = createEventDispatcher()

  let busy: boolean = false
  export let post: IPost|undefined = undefined
  let form: IPost = {
    title: '',
    slug: '',
    shortDesc: '',
    body: '',
    category: null
  }

  onMount(() => {
    if (post)
      form = {...post}
  })

  const handleSubmit = async () => {
    busy = true

    try {
      const response = await (post ? update() : create())

      Toaster.success('Post Created')
      dispatch('submit', response.data)
    } catch(e) {
      Toaster.danger('Failed On Submit Form')
    }

    busy = false
  }

  const create = () => {
    return axios.post(`/posts`, form)
  }

  const update = () => {
    return axios.put(`/posts/${post?.id}`, form)
  }
</script>

<form method="post" on:submit|preventDefault={handleSubmit}>
  <div class="grid grid-rows-4 gap-8">
    <div>
      <label for="">title</label>
      <input type="text" class="form-input" bind:value={form.title} />
    </div>
  
    <div>
      <label for="">Slug</label>
      <input type="text" class="form-input" bind:value={form.slug} />
    </div>
  
    <div class="row-span-3">
      <label for="">Short Description</label>
      <input type="text" class="form-input" bind:value={form.shortDesc} />
    </div>
  </div>

  <div>
    <label for="">Content</label>
    <textarea class="w-full form-textarea" bind:value={form.body}></textarea>
  </div>

  <button>{ busy ? 'Wating...' : 'Submit' }</button>
</form>