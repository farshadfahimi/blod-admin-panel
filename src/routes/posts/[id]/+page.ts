import axios from '@/module/Axios'
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
  try {
    const response = await axios.get(`/posts/${params.id}`)

    return {
      post: response.data
    }
  } catch (e) { redirect(302, '/') }
}) satisfies PageLoad