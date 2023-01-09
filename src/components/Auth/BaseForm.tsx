import { useState } from "react"
import { BaseAuthForm, baseSigninUser, baseSignupUser } from "../../plugins/auth"

export enum FormType {
  SIGNIN = 'signin' ,
  SIGNUP = 'signup'
}

export interface AuthProp {
  type: string
}

const AuthBaseForm = (props: AuthProp) => {
  const [ form, setForm ] = useState<BaseAuthForm>({ email: '', password: '' })
  const [ loading, setLoading ] = useState<boolean>(false)

  const submitForm = async (e: any) => {
    setLoading(true)
    e.preventDefault()

    try {
      if (props.type === FormType.SIGNIN)
        await baseSigninUser(form)
      
      if (props.type === FormType.SIGNUP)
        await baseSignupUser(form)
    } catch (e) {
      
    }

    setLoading(false)
  }

  return (
    <div className="border rounded shadow-lg">
      <div className="p-4 border-b">
        <h4>{ props.type === FormType.SIGNIN ? 'Signin Form' : 'Signup Form' }</h4>
      </div>

      <form className="p-4" method="post" onSubmit={ submitForm }>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="input-control" onChange={ e => setForm({ ...form, email: e.currentTarget.value })} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="input-control" onChange={e => setForm({ ...form, password: e.currentTarget.value })} />
        </div>

        <button type="submit" className="btn btn-success">
          { loading ? 'waiting...' : 'Submit' }
        </button>
      </form>
    </div>
  )
}

export default AuthBaseForm