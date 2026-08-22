
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
  photo: "https://yandex.net",
  biography : "Marshal of the Soviet Union. His career rose with the victory at Khalkhin Gol (1939), followed by the Yelnya offensive, the critical Defense of Moscow, the brutal Battles of Rzhev, and the breakthrough at the Seelow Heights, culminating in the capture of Berlin."
};

 export const  rokossovsky: Commander = {
  id: 2,
  name: "Константин Рокоссовский",
  country: "СССР",
  efficiency: 60,
  TO: "Eastern Front",
  casualties:  2_589_800,
  photo: "https://wikimedia.org",
  biography :"Konstantin Konstantinovich Rokossovsky (1896–1968) was one of the greatest Soviet military commanders, a Marshal of the Soviet Union, and a Marshal of Poland [S1]. He went down in history as a brilliant strategist of World War II, known for his iron self-control and deep respect for ordinary soldiers [S1].Early Life and WWI: Born into a Polish-Russian family. He lost his parents early and worked as a stonemason [S1]. In 1914, he volunteered for the Russian cavalry, showed immense bravery, and was awarded the Cross of St. George [S1].Civil War and Repression: In 1917, he joined the Red Army . In 1937, during the Great Purge, he was falsely accused of spying for Poland and Japan [S1]. He spent two and a half years in prison under severe pressure but refused to sign any false confessions or implicate his colleagues [S1]. In March 1940, he was fully exonerated and reinstated in the army [S1].World War II: He became a key figure in the major battles of the war [S1]. He commanded an army in the Battle of Moscow, led the Don Front during the destruction of Paulus's army at Stalingrad, and brilliantly organized the defense at the Battle of Kursk [S1].Operation Bagration: The pinnacle of his strategic genius was the liberation of Belorussia in 1944 [S1]. Rokossovsky insisted on striking two simultaneous main blows through the swamps, which Stalin initially considered a mistake [S1]. Rokossovsky's plan worked perfectly and led to the total destruction of the German Army Group Centre [S1].Triumph: In June 1945, Stalin entrusted Rokossovsky to command the historic Victory Parade on Red Square in Moscow ."
 }
 export const rommel: Commander = {
  id: 3,
  name: "Эрвин Роммель",
  country: "Германия",
  efficiency: 95,
  casualties:  250_000,
  photo: "https://wikimedia.org",
  TO : "MTO",
  biography :"",
};
export const  Montgomery : Commander = {
  id: 4,
  name: "Бернарда Монтгомери",
  country: "Великобритания",
  efficiency: 75,
  casualties:  185_000,
  photo: "https://wikimedia.org",
  TO :"MTO",
  biography :"",
};

export const  Eisenhower : Commander = {
  id: 5,
  name: " Dwight Eisenhower",
  country: "США",
  efficiency:  80,
  casualties:  550_000,
  photo: "https://wikimedia.org",
  TO :"ETO",
  biography : "General of the Army and Supreme Commander of the Allied Expeditionary Force in Europe. He masterminded Operation Overlord (D-Day) and successfully coordinated the Allied drive into Germany to end the war in Europe",
}; 
export const defaultCommander: Commander = {
  id: 6, 
  name: "Манштейн",
  country: "Германия",
  efficiency: 85,
  casualties: 700000,
  photo: "https://wikimedia.org",
  TO : "Eastern Front",
  biography : "Field Marshal of the Wehrmacht, widely regarded as one of Germany's most talented strategists. He drafted the invasion plan for France (1940), captured Sevastopol in the Crimean campaign, executed the backhand blow at Kharkov, and commanded Army Group South during the Battle of Kursk",
};
export const commanders: Commander[] = [
  zhukov,
  rokossovsky,
  rommel,
  defaultCommander
];
  