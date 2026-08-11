import { useState, useMemo} from 'react'
import './App.css'
import type { Commander } from './commanders/commanders';
 import { commanders as initialCommanders } from './commanders/commanders';
 import { defaultCommander } from './commanders/commanders';
 
function App() {
   const [commanders, setCommanders] = useState<Commander[]>(initialCommanders);
    const [isOpen, setIsOpen] = useState(false);

  function addCommander() {
  setCommanders((prevCommanders) => [
    ...prevCommanders,
    {
      ...defaultCommander,
      id: Date.now()
    }
  ]);
}
 
function openModal () {
setIsOpen(true)
} 
  function closeModal ()  {
 setIsOpen(false);
  } 
   
 



 return <h1>gh</h1>
}

export default App
