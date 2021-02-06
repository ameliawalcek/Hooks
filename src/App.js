import React, { useRef, useEffect, useState } from 'react'
import { useInputValue } from './hooks'

function App() {

  const inputRef = useRef(null)
  const prevName = useRef('')

  const [name, setName] = useState('')
  // const [name, setName] = useInputValue('')

  const focusInput = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <div className="App">
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <button onClick={focusInput}>Focus</button>
      <div>My name is {name} it used to be {prevName.current}</div>
    </div>
  )
}

export default App
