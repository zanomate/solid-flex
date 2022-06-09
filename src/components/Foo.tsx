import { Component } from 'solid-js'

interface FooProps {
  text?: string
}

const Foo: Component<FooProps> = () => {
  return <div>Hello World!</div>
}

export { Foo }
