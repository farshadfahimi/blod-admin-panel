<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import axios from '@/module/Axios'
	import Toaster from '@/components/Toast';
	import type { AxiosResponse } from 'axios';
	import type { ICategory, IForm } from './interface';
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
      const response = await (category !== undefined ? update() : create())
      Toaster.success('categories created')

      dispatch('submit', response.data)
    } catch (e) {
      Toaster.danger('failed creating store')
    }

    busy = false
  }

  const create = () :Promise<AxiosResponse> => {
    return axios.post('/categories', form)
  }

  const update = () :Promise<AxiosResponse> => {
    if (category === undefined)
      throw Error()

    return axios.put(`/categories/${category.id}`, form)
    
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