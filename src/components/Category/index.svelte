<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import axios from '@/module/Axios'
	import Toaster from '../Toast';
	import type { ICategory } from "./interface";
  const dispatch = createEventDispatcher()

  export let category: ICategory

  const onDelete = async () => {
    try {
      await axios.delete(`/categories/${category.id}`)

      dispatch('deleted', { category })
      Toaster.success('categoryDeleted')    
    } catch (e) {}
  }
</script>

<div class="flex justify-between items-center shadow-sm px-2 py-3 rounded-md mb-3">
  { category.title }

  <div>
    <button type="button" on:click={onDelete}>D</button>
    <a href={`/categories/${category.id}`}>E</a>
  </div>
</div>