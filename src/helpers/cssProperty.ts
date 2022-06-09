import { JSX } from 'solid-js'

export const cssPropertyFactory = <T>(name: string) => (value: T): JSX.CSSProperties => ({
  [name]: value
})
