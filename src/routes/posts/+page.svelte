<script lang="ts">
	import type { PageData } from "./$types";
  import PostItem from '@/components/Post/Item.svelte'


  export let data: PageData
</script>

<div>
  { #each data.posts as post, i }
    <PostItem {post} />
  { /each }
</div>