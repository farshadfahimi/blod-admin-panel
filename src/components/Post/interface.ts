import type { ICategory } from "../Category/interface"

export interface IPost {
  id?: string
  title: string,
  slug: string,
  cover?: string
  shortDesc: string,
  body: string
  category: ICategory|null
  auther?: Object,
  createdAt?: string,
  updatedAt?: string
}