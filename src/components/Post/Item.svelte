<script lang="ts">
  import type { IPost } from './interface'

  export let post: IPost
</script>

<div>
  <img src={post.cover} alt={post.title} />

  <h5>{ post.title }</h5>

  <p>{ post.shortDesc }</p>

  <div class="flex justify-between">
    { post.createdAt }

    <a href={`/posts/${post.id}`}>More...</a>
  </div>
</div>