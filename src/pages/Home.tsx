import { useEffect, useState } from "react"

interface IForm {
  title: string
  slug: string
  description: string
}

function Home() {
  // const [form, setForm] = useState<IForm>({ title: '', slug: '', description: '' })
  // useEffect(() => {
  //   console.log(form)
  // })

  return(
    <div>
      {/* <div>
        <label htmlFor="title">title: { form.title }</label>
        <input type="text" id="title" defaultValue={form.title} onChange={ e => setForm({ ...form, title: e.currentTarget.value })} />
      </div>

      <div>
        <label htmlFor="slug">slug</label>
        <input type="text" id="slug" defaultValue={form.slug} onChange={ e => setForm({ ...form, slug: e.currentTarget.value })} />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea defaultValue={form.description} onChange={ e => setForm({ ...form, description: e.currentTarget.value}) }></textarea>
      </div> */}
    </div>
  )
}

export default Home