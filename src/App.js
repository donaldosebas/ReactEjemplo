import React, { useState, useEffect, useContext } from 'react'
import './App.css';
import Button from './components/button'
import Counter from './components/counter'
import Input from './components/input'
import { ValueContext } from './index'

const App = () => {
  const context = useContext(ValueContext)
  const [count, setCount] = useState(0)
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
  })

  console.log('Render')
  
  const click = (value) => {
    setCount((prevState) => prevState + value)
  }

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <>
      <Input setUserData={setUserData} userData={userData} />
      <Counter count={count} />
      <Button click={click} />
      <button onClick={() => context.dispatch({ type: 'UNO', multiply: 2 })}>Cambiar a 1</button>
      <button onClick={() => context.dispatch('DOS')}>Cambiar a 2</button>
    </>
  );
}

export default App;
