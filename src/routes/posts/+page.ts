import { fetchPosts } from '@/api/posts'
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from "./$types";

export const load = (async () => {
  try {
    const response = await fetchPosts()

    return {
      posts: response.data
    }
  } catch (e) {
    redirect(302, '/')
  }
}) satisfies PageLoad