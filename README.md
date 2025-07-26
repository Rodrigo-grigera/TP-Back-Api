Descripción:
Esta API fue desarrollada como parte de un proyecto integrador. Permite obtener, buscar y filtrar instrumentos musicales por distintos criterios como tipo, origen, nombre o ID. Pensada para ser consumida desde un frontend, permite paginado, búsqueda y exploración de datos.

Tecnologías utilizadas
- Node.js con Express
- TypeScript
- Base de datos/local data (detallar si es mock, archivo .json, etc.)
- Cors.

Estructura del proyecto:

src/
├── controllers/
├── routes/
├── models/
├── data/
└── index.ts

Endpoints disponibles:
- GET /instrumentos
   Obtiene todos los instrumentos.

- GET /instrumentos?tipo={tipo}
   Filtra los instrumentos por tipo (ejemplo: tipo=guitarra).

- GET /instrumentos?origen={origen}
   Filtra por origen del instrumento (ejemplo: origen=españa).

- GET /instrumentos/:id
   Obtiene los datos de un instrumento por su ID.
   Cómo funciona la API
  
La API lee los instrumentos desde una fuente local (En este caso, un archivo JSON). Usa métodos como:
filter() para aplicar filtros por tipo o por origen (parametros query).
Normaliza texto con .normalize("NFD").replace(/[\u0300-\u036f]/g, "") para hacer que búsquedas como "españa" y "espana" funcionen igual.
Las respuestas son en formato JSON.


   
