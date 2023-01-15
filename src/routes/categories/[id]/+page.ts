import axios from '@/module/Axios'
import type { PageLoad, RouteParams } from "../$types";

interface Params {
  id: string
}

export const load = (async ({ params }) => {
  try {
    const response = await axios.get(`/categories/${params.id}`)
    return {
      category: response.data
    }
  } catch (e) {

  }
}) satisfies PageLoad