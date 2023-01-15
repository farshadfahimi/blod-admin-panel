<script lang="ts">
import CategoryForm from '@/components/Category/Form.svelte'
	import { redirect } from '@sveltejs/kit';

const onCreate = () => {
  redirect(302, '/categories')
}
</script>

<div>
  Beadrumbs goes here

  <CategoryForm on:submit={onCreate} />
</div>