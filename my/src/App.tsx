import { useState } from 'react'
import './App.css'
import type { Commander } from './commanders/commanders';
 import { commanders as initialCommanders } from './commanders/commanders';
 
function App() {
   const [commanders, setCommanders] = useState<Commander[]>(initialCommanders);
  function addCommander(newCommander: Commander) {
  setCommanders((prevCommanders) => [
    ...prevCommanders,
    {
      ...newCommander,
      id: Date.now()
    }
  ]);
}



 return <h1>gh</h1>
}

export default App
