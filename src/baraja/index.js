// src/baraja/index.js

import { crearCartaHTML } from '../usecases/crear-carta-html.js';
import { crearDeck } from '../usecases/crear-deck.js';
import { pedirCarta } from '../usecases/pedir-carta.js';
import { turnoComputadora } from '../usecases/turno-computadora.js';
import { valorCarta } from '../usecases/valor-carta.js';

export { crearCartaHTML }; // Asegúrate de que sea "crearCartaHtml"
export { crearDeck };
export { pedirCarta };
export { turnoComputadora };
export { valorCarta };