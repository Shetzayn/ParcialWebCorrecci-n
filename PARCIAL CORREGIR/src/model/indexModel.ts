// src/model/Item.ts

export interface Item {
    id: number;
    title: string;
    author: string;
    abstract: string;
    year: number;
    keywords: string[];
  }
  
  // Ejemplo de un ítem
  const exampleItem: Item = {
    id: 1,
    title: "Model-based architecting and model driven approaches",
    author: "Dehbi, R",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    year: 2016,
    keywords: ["Model-Based Architecting", "Model driven Architecture", "Software engineering"],
  };
  
  export default exampleItem;
  