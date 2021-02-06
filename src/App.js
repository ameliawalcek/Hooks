import React from 'react'
import { ParentComponent } from './components/ParentComponent'

//useCallback is a hook that will return a memoized version of the callback function 
//that only changes if one of the dependencies has changed

//useful when passing callbacks to optimized children components
const App = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  )
}

export default App