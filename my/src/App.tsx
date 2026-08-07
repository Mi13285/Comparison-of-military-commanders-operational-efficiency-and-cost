import { useState } from 'react'
import './App.css'
    interface Commander {
   id: 1          
  name: string;        
  country: string;     
  efficiency: number;  
  cost: number;        
  photo: string;       
  biography?: string;  
}
const commander: Commander = {
  id: 1,
  name: "Георгий Жуков",
  country: "СССР",
  efficiency: 85,
  cost: 90,
  photo: ""
};
function App() {
 return <h1>gh</h1>
}

export default App
