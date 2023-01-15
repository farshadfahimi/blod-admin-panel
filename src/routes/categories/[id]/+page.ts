import { fetchCategory } from '@/api/categories'
import type { PageLoad } from "../$types";

interface Params {
  id: string
}

export const load = (async ({ params }) => {
  try {
    const response = await fetchCategory(params.id)
    return {
      category: response.data
    }
  } catch (e) {

  }
}) satisfies PageLoad