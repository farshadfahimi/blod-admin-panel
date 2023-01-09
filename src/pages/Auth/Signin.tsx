import AuthBaseForm, { FormType as AuthFormType } from '@/components/Auth/BaseForm'

export default () => (
  <div className='grid place-content-center h-full'>
    <AuthBaseForm type={AuthFormType.SIGNIN} />
  </div>
)