<script lang="ts">
  import Category from '@/components/Category/index.svelte'
  import type { ICategory } from '@/api/categories'
  import type { PageData } from "./$types";


  export let data: PageData

  function handleDelete(event: any) {
    const category = event.details.categories
    const categories = data.categories as ICategory[]

    const index = categories.findIndex((item: ICategory) => item.id === category.id)
    categories.slice(index, 1)
  }
</script>

<div class="flex justify-between items-center">
  Breadcrumbs commes here

  <button>Add Button</button>
</div>

<div class="grid grid-rows-2 grid-flow-col gap-4 mt-4">
  {#each data.categories as category, i}
  <Category {category} on:deleted={handleDelete} />
  {/each}
</div>