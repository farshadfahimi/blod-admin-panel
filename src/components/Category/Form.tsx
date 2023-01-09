import { useState } from 'react'
import { Form } from 'react-router-dom'
import Axios from '../../plugins/axios'

interface IState {
  title: string
  slug: string
  description: string
}

export default () => {
  const [form, setForm] = useState<IState>({ title: '', slug: '', description: '' })

  const submitForm = async (e: any) => {
    e.preventDefault()

    const response = await Axios.post('/categories', { ...form })

    console.log(response)
  }

  return (
    <Form method='post' onSubmit={ submitForm }>
      <div className='form-group'>
        <label htmlFor="title">Title</label>
        <input type="text" id='title' className='input-control' defaultValue={ form.title } onChange={ e => setForm({ ...form, title: e.currentTarget.value }) } />
      </div>

      <div className='form-group'>
        <label htmlFor="slug">Slug</label>
        <input type="text" id='slug' className='input-control' defaultValue={ form.slug } onChange={ e => setForm({ ...form, slug: e.currentTarget.value }) } />
      </div>

      <div className='form-group'>
        <label htmlFor="description">Description</label>
        <textarea className='input-control' defaultValue={ form.description } onChange={ e => setForm({ ...form, description: e.currentTarget.value }) }></textarea>
      </div>

      <button type='submit' className='py-3 px-7 bg-green-600 text-white rounded hover:bg-green-800 transition'>Submit</button>
    </Form>
  )
}