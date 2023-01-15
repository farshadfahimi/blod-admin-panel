<script lang="ts">
	import type { PageData } from "./$types";
  import PostForm from '@/components/Post/Form.svelte'


  export let data: PageData
</script>

<div>
  Breadcrumbs goes here
</div>

<PostForm {...data.post} />

