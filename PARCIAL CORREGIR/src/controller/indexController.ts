// src/controller/ItemController.ts

import { Item } from '../model/indexModel'; // Importa el modelo de Item

// Clase controlador para manejar operaciones de ítems
export class ItemController {
  private items: Item[]; // Array para almacenar los ítems

  constructor() {
    this.items = []; // Inicializa el array de ítems
  }

  // Método para agregar un ítem al array
  addItem(item: Item) {
    this.items.push(item);
  }

  // Método para buscar un ítem por palabra clave
  searchItem(keyword: string): Item[] {
    return this.items.filter(item =>
      item.title.toLowerCase().includes(keyword.toLowerCase()) ||
      item.author.toLowerCase().includes(keyword.toLowerCase()) ||
      item.keywords.some(kw => kw.toLowerCase().includes(keyword.toLowerCase()))
    );
  }

  // Método para obtener todos los ítems
  getAllItems(): Item[] {
    return this.items;
  }
}
