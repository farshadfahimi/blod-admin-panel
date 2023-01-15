import { fetchPost } from '@/api/posts';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
  try {
    const response = await fetchPost(params.id)

    return {
      post: response.data
    }
  } catch (e) { redirect(302, '/') }
}) satisfies PageLoad