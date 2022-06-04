import React, { useState } from 'react'

const Main = ({ category }) => {

  const [valueInput, setValueInput] = useState('')

  const handleClick = (ev) => {
    category(valueInput)
    console.log('el evento o algo', ev)
  }

  return (
    <>
      <div>
        <h2>Giphy App</h2>
        <input
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          type="text"
          placeholder="Search for a gif" />
        <button onClick={(ev) => handleClick(ev)}>
          click
        </button>
      </div>
    </>
  )
}

export default Main