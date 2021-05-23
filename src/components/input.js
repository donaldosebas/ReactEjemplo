import React from 'react'

const Input = ({ userData, setUserData }) => {
  console.log(userData)
  return (
    <>
      <input 
        placeholder="Name"
        onChange={(e) => setUserData({ ...userData, name: e.target.value})}
        value={userData.name}
      />
      <input 
        placeholder="Last name"
        onChange={(e) => setUserData({ ...userData, lastName: e.target.value})}
        value={userData.lastName}
      />
    </>
  )
}
export default Input