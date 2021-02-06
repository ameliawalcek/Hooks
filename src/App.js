import React, { createContext } from 'react'
import './App.css'
import { CompA } from './Components/CompA'

export const UserContext = createContext()
export const CourseContext = createContext()

function App() {
  return (
    <UserContext.Provider value={'Dave'}>
      <CourseContext.Provider value={'Elevation'}>
        <div className="App">
          <CompA />
        </div>
      </CourseContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
