import Axios from '@/plugins/axios'
import { useState } from "react"

export interface IPostForm {
  id?: string
  title: string,
  body: string
}

export interface IFormProps {
  post: IPostForm
}

export default (props: IPostForm | null) => {
  const [ form, setForm ] = useState<IPostForm>({ title: '', body: ''})

  const update = async () :Promise<void> => {
    return await Axios.post(`/posts/${form.id}`, form)
  }

  const create = async () :Promise<void> => {
    return await Axios.post('/posts', form)
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    if (props) {
      await update()
    } else
      await create()
  }


  return (
    <form onSubmit={ onSubmit }>
      <div className="flex flex-col mb-4">
        <label htmlFor="posttitle" className="mb-2">Post title: </label>
        <input id="posttitle" type="text" className="input" onChange={ e => setForm({ ...form, title: e.currentTarget.value}) } />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="postBody" className="mb-2">Content: </label>
        <textarea id="postBody" rows={10} className="py-2 px-3 border rounded" onChange={ e => setForm({ ...form, body: e.currentTarget.value })}></textarea>
      </div>

      <button type="submit" className="py-3 px-6 bg-green-500 rounded text-white">Submit</button>
    </form>
  )
}