
  export interface Commander {
   id: number;          
  name: string;        
  country: string;     
  efficiency: number;  
  casualties: number; 
  TO : string;       
  photo: string;       
  biography: string;  
}
 export const  zhukov: Commander = {
  id: 1,
  name: "Георгий Жуков",
  country: "СССР",
  efficiency: 20,
    TO: "Eastern Front",
  casualties:  3_529_700,
  photo: "",
  biography : "Marshal of the Soviet Union. His career rose with the victory at Khalkhin Gol (1939), followed by the Yelnya offensive, the critical Defense of Moscow, the brutal Battles of Rzhev, and the breakthrough at the Seelow Heights, culminating in the capture of Berlin."
};

 export const  rokossovsky: Commander = {
  id: 2,
  name: "Константин Рокоссовский",
  country: "СССР",
  efficiency: 60,
  TO: "Eastern Front",
  casualties:  2_589_800,
  photo: "",
 }
 export const rommel: Commander = {
  id: 3,
  name: "Эрвин Роммель",
  country: "Германия",
  efficiency: 95,
  casualties:  250_000,
  photo: "",
  TO : "MTO",
  biography :"",
};
export const  Montgomery : Commander = {
  id: 4,
  name: "Бернарда Монтгомери",
  country: "Великобритания",
  efficiency: 75,
  casualties:  185_000,
  photo: "",
  TO :"MTO",
  biography :"",
};

export const  Eisenhower : Commander = {
  id: 5,
  name: " Dwight Eisenhower",
  country: "США",
  efficiency:  80,
  casualties:  550_000,
  photo: "",
  TO :"ETO",
  biography : "General of the Army and Supreme Commander of the Allied Expeditionary Force in Europe. He masterminded Operation Overlord (D-Day) and successfully coordinated the Allied drive into Germany to end the war in Europe",
}; 
export const defaultCommander: Commander = {
  id: 6, 
  name: "Манштейн",
  country: "Германия",
  efficiency: 85,
  casualties: 700000,
  photo: "",
  TO : "Eastern Front",
  biography : "Field Marshal of the Wehrmacht, widely regarded as one of Germany's most talented strategists. He drafted the invasion plan for France (1940), captured Sevastopol in the Crimean campaign, executed the backhand blow at Kharkov, and commanded Army Group South during the Battle of Kursk",
};
export const commanders: Commander[] = [
  zhukov,
  rokossovsky,
  rommel,
  defaultCommander
];
  