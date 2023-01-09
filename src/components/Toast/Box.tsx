import { CheckCircle, ExclamationCircle, InfoCircle, XMarkCircle } from '../Icons'

export enum EnumTypes {
  sucess = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
}

interface ToastProps {
  type: EnumTypes,
  message: string | string[]
}

export default ({ type, message }: ToastProps) => (
  <div className={`toast toast-${type}`}>
    <div className="toast-icon">
      { type === EnumTypes.sucess && <CheckCircle/> }
      { type === EnumTypes.danger && <XMarkCircle/> }
      { type === EnumTypes.warning && <ExclamationCircle/> }
      { type === EnumTypes.info && <InfoCircle/> }
    </div>

    <div className="toast-message">
      { typeof message === 'string' ? message : message.join('\n\r') }
    </div>
  </div>
)