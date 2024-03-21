// src/app.ts

import { ItemController } from './controller/indexController'; // Importa el controlador de ítems
import { ItemView } from './view/indexView'; // Importa la vista de ítems
import exampleItem from './model/indexModel'; // Importa un ejemplo de ítem

// Crea una instancia del controlador
const controller = new ItemController();

// Agrega el ejemplo de ítem al controlador
controller.addItem(exampleItem);

// Crea una instancia de la vista
const view = new ItemView(controller);

// Ejemplo de búsqueda por palabra clave
view.searchItems
