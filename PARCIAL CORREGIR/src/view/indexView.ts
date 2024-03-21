// src/view/ItemView.ts

import { Item } from '../model/indexModel'; // Importa el modelo de Item
import { ItemController } from '../controller/indexController'; // Importa el controlador de ítems

// Clase vista para mostrar la interfaz de usuario
export class ItemView {
  private controller: ItemController; // Instancia del controlador

  constructor(controller: ItemController) {
    this.controller = controller;
  }

  // Método para mostrar los ítems en la interfaz
  displayItems(items: Item[]) {
    items.forEach(item => {
      console.log(`Title: ${item.title}`);
      console.log(`Author: ${item.author}`);
      console.log(`Abstract: ${item.abstract}`);
      console.log(`Year: ${item.year}`);
      console.log(`Keywords: ${item.keywords.join(', ')}`);
      console.log('------------------------');
    });
  }

  // Método para buscar ítems por palabra clave
  searchItems(keyword: string) {
    const searchResults = this.controller.searchItem(keyword);
    this.displayItems(searchResults);
  }
}
