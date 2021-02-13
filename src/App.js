import React, { useState, useCallback } from 'react'
import List from './components/List'
import { ParentComponent } from './components/ParentComponent'

//useCallback is a hook that will return a memoized version of the callback function 
//that only changes if one of the dependencies has changed

//useful when passing callbacks to optimized children components
const App = () => {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  //returns the function so allows us to pass through params
  const getItems = useCallback((incrementor) => {
    return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
      <List getItems={getItems} />
      <ParentComponent />
    </div>
  )
}

export default App