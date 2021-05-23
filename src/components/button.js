import React, { useContext } from 'react'
import { ValueContext } from '../index'

const Button = ({ click }) => {
  const context = useContext(ValueContext)
  return (
    <button onClick={() => click(context.state.value)}>Increment</button>
  )
}
export default Button