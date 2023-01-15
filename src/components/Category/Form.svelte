<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import { create, update, type ICategory } from '@/api/categories'
	import Toaster from '@/components/Toast';
	import type { IForm } from './interface';
  const dispatch = createEventDispatcher()

  
  export let category: ICategory|undefined = undefined
  let busy: boolean = false
  let form: IForm = {
    title: '',
    slug: ''
  }

  onMount(() => {
    if (category) {
      form = {
        title: category.title,
        slug: category.slug
      }
    }
  })

  const submitForm = async () => {
    busy = true

    try {
      const response = await (category !== undefined ? update(category.id, form) : create(form))
      Toaster.success('categories created')

      dispatch('submit', response.data)
    } catch (e) {
      Toaster.danger('failed creating store')
    }

    busy = false
  }
</script>

<form method="post" on:submit|preventDefault={submitForm}>
  <div class="form-group">
    <label for="">title</label>
    <input type="text" class="form-control" bind:value={form.title} />
  </div>

  <div class="form-group">
    <label for="">Slug</label>
    <input type="text" class="form-control" bind:value={form.slug} />
  </div>

  <button type="submit">{ busy ? 'Wating...' : 'Submit' }</button>
</form>