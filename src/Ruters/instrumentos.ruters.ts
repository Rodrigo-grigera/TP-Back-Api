//Importamos ruters de express para crear las rutas.
// Definimos los puntos de entrada de nuestra api para que reciba todos los request
import routers from "express";

// instanciamos routers() de express para utilizalo
const rute = routers();

import { InstrumentosController } from "../Controllers/instrumentos.controllers";
// instanciamos Instrumentosventa para poder utilizar los metodos

const instru = new InstrumentosController();

rute.get("/", instru.todos_instrumentos);
rute.get("/filtros", instru.getQuery);
rute.get("/nombre/:nombre", instru.getParams);
rute.get("/:id", instru.getById);

/* el problema que surgia en rute.get(/query, instru.getQuery) era porque la ruta /:id estaba en segundo posicion
esto generaba que el programa interpretara que todo lo que sigue despues de la barra sea un id. 
por eso orgdeno de esta manera las rutas.
otra opcion era rute.get(/query/filtro, instru.getQuery) esta ruta si andaba */

//exportamos todas los rutas que creamos aca para importarlas y usarlas en el archivo appi.ts
export default rute