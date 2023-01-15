import { writable, type Writable } from 'svelte/store'

export enum ToastType {
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info'
}

export interface IMessage {
  type: ToastType
  message: string
}

// store the messages object
export const messages: Writable<IMessage[]> = writable([])
let timeId

// watch the change of store
// to remove after a
// specific time
messages.subscribe(messages => {
  timeId = setTimeout(() => Toaster.remove(), 2000)

  if (!messages.length)
    clearTimeout(timeId)
})

// class For add Toast messages
class Toaster {
  static success(items: string|string[]) {
    const to: IMessage[] = this.add(ToastType.SUCCESS, items)

    messages.update(from => [...from, ...to])
  }

  static danger(items: string|string[]) {
    const to: IMessage[] = this.add(ToastType.DANGER, items)

    messages.update(from => [...from, ...to])
  }

  static warning (items: string|string[]) {
    const to: IMessage[] = this.add(ToastType.WARNING, items)

    messages.update(from => [...from, ...to])
  }

  static info (items: string|string[]) {
    const to: IMessage[] = this.add(ToastType.INFO, items)

    messages.update(from => [...from, ...to])
  }

  static add(type: ToastType, messages: string|string[]) :IMessage[] {
    const data: IMessage[] = []

    if (typeof messages === 'string')
      data.push({ type, message: messages })
    else {
      messages.forEach((message) => data.push({ type, message }))
    }

    return data
  }

  static clear() {
    messages.set([])
  }

  static remove() {
    messages.update(val => val.slice(0, -1))
  }
}

export default Toaster