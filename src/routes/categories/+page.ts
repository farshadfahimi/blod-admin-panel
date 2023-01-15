import { fetchCategories } from '@/api/categories'
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from "./$types";

export const load = (async () => {
  try {
    const response = await fetchCategories()

    return {
       categories: response.data
    }
  } catch (e) {
    redirect(302, '/')
  }
}) satisfies PageLoad