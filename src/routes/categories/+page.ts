import axios from '@/module/Axios'
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from "./$types";

export const load = (async () => {
  try {
    const response = await axios.get('/categories')

    return {
       categories: response.data
    }
  } catch (e) {
    redirect(302, '/')
  }
}) satisfies PageLoad