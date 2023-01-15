<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { destroy, type ICategory } from '@/api/categories'
  import Toaster from '../Toast';
  const dispatch = createEventDispatcher()

  export let category: ICategory

  const onDelete = async () => {
    try {
      await destroy(category.id)

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