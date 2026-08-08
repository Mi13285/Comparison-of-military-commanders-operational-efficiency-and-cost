


  export interface Commander {
   id: number;          
  name: string;        
  country: string;     
  efficiency: number;  
  casualties: number;        
  photo: string;       
  biography?: string;  
}
 export const  zhukov: Commander = {
  id: 1,
  name: "Георгий Жуков",
  country: "СССР",
  efficiency: 20,
  casualties:  3_529_700,
  photo: ""
};

 export const  rokossovsky: Commander = {
  id: 2,
  name: "Константин Рокоссовский",
  country: "СССР",
  efficiency: 60,
  casualties:  2_589_800,
  photo: ""
};

 export const rommel: Commander = {
  id: 3,
  name: "Эрвин Роммель",
  country: "Германия",
  efficiency: 95,
  casualties:  250_000,
  photo: ""
};
export const  Montgomery : Commander = {
  id: 4,
  name: "Бернарда Монтгомери",
  country: "Великобритания",
  efficiency: 75,
  casualties:  185_000,
  photo: ""
};

export const  Eisenhower : Commander = {
  id: 5,
  name: " Dwight Eisenhower",
  country: "США",
  efficiency:  80,
  casualties:  550_000,
  photo: ""
};
export const commanders: Commander[] = [
  zhukov,
  rokossovsky,
  rommel
];