<script lang="ts">
	import type { PageData } from "./$types";
  import CategoryForm from '@/components/Category/Form.svelte'
	import { redirect } from "@sveltejs/kit";

  export let data: PageData

  const onUpdate = () => {
    redirect(302, '/categories')
  }
</script>

<div>
  Breadcrumbs goes here
</div>

<CategoryForm {...data.category} on:submit={onUpdate} />