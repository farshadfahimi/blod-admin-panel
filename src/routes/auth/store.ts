import { writable, type Writable } from "svelte/store";

interface User {
  id: string
  name: string
}

export const isLoggedin: Writable<boolean> = writable(true)

export const user: Writable<null|User> = writable(null)