import type { Handle } from "@sveltejs/kit";
import { authHook } from "./lib/Auth";

export const handle = (async ({ event, resolve }) => {
  await authHook(event.cookies)

  return await resolve(event)
}) satisfies Handle