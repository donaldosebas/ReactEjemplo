import React from 'react'

const Counter = ({ count, noExiste }) => {
  return (
    <>
      {count === 0 ? (
        <h1>No hay numeros</h1>
      ) : (
        <h1>{count}</h1>
      )}
      {noExiste &&  console.log('hola')}
    </>
  )
}
export default Counter
