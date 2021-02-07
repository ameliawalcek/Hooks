import React, { useState, useMemo, useEffect } from 'react'
import Counter from './components/Counter'
//memo memorization cache the value

export default function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  //every time we updated the number the themeStyles object 
  //found new place in memory meaning that it updated too running this useEffect
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('theme change')
  }, [themeStyles])

  return (
    <div>
      <Counter />
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

function slowFunction(num) {
  console.log('calling slow function')
  let i = 0
  while (i < 2000000000) i++
  return num * 2
}