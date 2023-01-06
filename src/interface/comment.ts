import type { Form } from "./form"
import type { User } from './user'

export interface CommentState extends Form {
  body: string
}

export interface Comment {
  id: string,
  body: string,
  auther: User,
}