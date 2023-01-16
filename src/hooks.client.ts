import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    console.log({ section: 'client', event})
    return await resolve(event);
}) satisfies Handle;