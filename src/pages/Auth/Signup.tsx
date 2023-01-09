import AuthBaseForm, { FormType as AuthFormType } from '@/components/Auth/BaseForm'

export default () => (
  <div>
    <AuthBaseForm type={AuthFormType.SIGNUP} />
  </div>
)