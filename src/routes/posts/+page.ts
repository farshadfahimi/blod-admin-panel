import axios from '@/module/Axios'
import type { PageLoad } from "./$types";

export const load = (async () => {
  try {
    const response = await axios.get(`/posts`)

    return {
      posts: response.data
    }
  } catch (e) {

  }
}) satisfies PageLoad