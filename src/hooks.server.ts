import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
  console.log({ section: 'server', event  })
  return await resolve(event)
}) satisfies Handle