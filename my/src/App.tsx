import { useState, } from 'react'
import './App.css'
import type { Commander } from './commanders/commanders';
 import { commanders as initialCommanders } from './commanders/commanders';
 import { defaultCommander } from './commanders/commanders';
 
function App() {
   const [commanders, setCommanders] = useState<Commander[]>(initialCommanders);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | 'All'>('All');
     const [selectedCommanders, setSelectedCommanders] = useState<Commander[]>(commanders);


  function addCommander() {
  setCommanders((prevCommanders) => [
    ...prevCommanders,
    {
      ...defaultCommander,
      id: Date.now()
    }
  ]);
}
 
const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  function filteredCommanders() {
  setSelectedCountry(
    commanders.filter((item: Commander) => 
      (item.country === "all" || item.country === "Германия" || item.country ===  "СССР" || item.country === "Великобритания" || item.country === "США") &&
      (item.TO === "MTO" || item.TO === "Eastern Front")
    )
  );
}
 function Validation(text: string): boolean {
    return !!text.trim();
}


 function handleDelete (id : number) : void {
if (selectedCountry?.Id === id) {
 selectedCountry((prevCountries: any) => prevCountries.filter((item: any) => item.Id !== id));
}
setSelectedCountry(null)
 }

return <h1>gh</h1>
}

 

export default App
