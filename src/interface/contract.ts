import type { User } from './user'

export interface Contract {
  title: string,
  content: string,
  creator: User,
}