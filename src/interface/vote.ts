export interface Props {
  title: string
}

export interface Vote {
  name: string,
  email: string
}

export interface Reactive {
  votes: Array<Vote>,
}