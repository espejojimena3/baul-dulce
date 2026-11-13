# Baúl Dulce

Baúl Dulce es una página web para nuestra pastelería, un emprendimiento real dedicado a la elaboración de tartas, cupcakes y dulces personalizados.

Este proyecto lo he desarrollado como trabajo final, creando tanto la parte visual de la web como su servidor y su base de datos.

## Problema y solución

**Problema:**

Necesitábamos un espacio donde mostrar nuestros productos de una manera organizada y donde las personas interesadas pudieran conocer mejor la pastelería y contactar con nosotras.

**Público:**

La web está pensada para personas que buscan tartas, cupcakes, cajas de dulces o productos personalizados para celebraciones.

**Solución:**

La página permite consultar nuestro catálogo, buscar productos, ver sus precios y detalles, conocer nuestra historia, explorar ejemplos de tartas temáticas y enviarnos consultas mediante un formulario de contacto.

## Enlaces

- **Frontend publicado:** https://beamish-cannoli-d4f606.netlify.app
- **API publicada:** https://baul-dulce.onrender.com/productos
- **Repositorio frontend:** https://github.com/espejojimena3/baul-dulce
- **Repositorio backend:** https://github.com/espejojimena3/baul-dulce

El frontend y el backend están dentro del mismo repositorio, organizados en carpetas diferentes.

## Tecnologías utilizadas

### Frontend

- React
- Vite
- HTML
- CSS
- JavaScript
- React Router
- Fetch API

### Backend

- Node.js
- Express
- MySQL
- MySQL2
- dotenv
- CORS

### Despliegue

- **Frontend:** Netlify
- **Backend:** Render
- **Base de datos:** Clever Cloud (MySQL)
- **Formulario de contacto:** Formspree
- **Control de versiones:** Git y GitHub

## Funcionalidades principales

-  Listado de productos obtenidos desde la API.
-  Búsqueda de productos.
-  Formulario de contacto con validaciones.
-  Estados de carga, error y sin resultados.
-  CRUD de productos en la API.
-  Fichas con información detallada de cada producto.
-  Diseño adaptable a ordenadores y móviles.
-  Navegación entre las distintas páginas.

La web tiene cinco apartados principales:

1. **Inicio:** presentación de Baúl Dulce.
2. **Productos:** catálogo con imágenes, precios y descripciones.
3. **Nosotros:** historia de nuestra pastelería.
4. **Temáticos:** galería de tartas personalizadas.
5. **Contacto:** formulario para enviar consultas.

## Instalación local

### Requisitos

Para ejecutar el proyecto es necesario tener instalados Node.js, pnpm y MySQL.

### Frontend

1. Clonar el repositorio:

   `git clone https://github.com/espejojimena3/baul-dulce.git`

2. Entrar en la carpeta del proyecto:

   `cd baul-dulce`

3. Instalar las dependencias:

   `pnpm install`

4. Iniciar el frontend:

   `pnpm dev`

La página se abrirá normalmente en `http://localhost:5173`.

Para indicar la dirección del backend, se puede crear un archivo `.env` en la raíz del proyecto con esta variable:

`VITE_API_URL=http://localhost:3000`

### Backend

Desde la carpeta del proyecto:

1. Entrar en la carpeta del servidor:

   `cd backend`

2. Instalar las dependencias:

   `npm install`

3. Crear el archivo `.env` con las variables necesarias para conectar MySQL.

4. Iniciar el servidor:

   `npm start`

El backend se ejecutará normalmente en `http://localhost:3000`.

### Variables de entorno del backend

El archivo `backend/.env.example` sirve como referencia. Las variables necesarias son:

- `PORT=3000`
- `DB_HOST=localhost`
- `DB_USER=tu_usuario`
- `DB_PASSWORD=tu_contraseña`
- `DB_NAME=baul_dulce`
- `DB_PORT=3306`
- `ADMIN_API_KEY=tu_clave_privada`

Cada persona debe utilizar sus propias credenciales de MySQL.

**Importante:** no se debe subir el archivo `.env` ni compartir contraseñas o claves privadas en GitHub.

## Base de datos

El proyecto utiliza MySQL. Durante el desarrollo trabajé con una base de datos local y después la publiqué en Clever Cloud.

### Recursos principales

**Productos:** contiene los datos de los dulces, como nombre, descripción, precio, imagen, ingredientes, alérgenos, porciones y stock.

**Categorías:** permite clasificar los productos.

**Encargos:** almacena encargos asociados a productos, con su cantidad y estado.

### Relaciones

- Cada producto pertenece a una categoría mediante `categoria_id`.
- Cada encargo está relacionado con un producto mediante `producto_id`.

Estas relaciones se realizan mediante claves foráneas en MySQL.

## API y endpoints

La API está desarrollada con Node.js y Express, y devuelve los datos en formato JSON.

### Productos

| Método | Ruta | Función |
|---|---|---|
| GET | `/productos` | Obtener todos los productos |
| GET | `/productos/:id` | Obtener un producto por su ID |
| POST | `/productos` | Crear un producto |
| PUT | `/productos/:id` | Actualizar un producto |
| DELETE | `/productos/:id` | Eliminar un producto |

### Categorías

| Método | Ruta | Función |
|---|---|---|
| GET | `/categorias` | Obtener las categorías |

### Encargos

| Método | Ruta | Función |
|---|---|---|
| GET | `/encargos` | Consultar los encargos |

### Seguridad

La consulta de productos y categorías es pública.

Las operaciones de creación, modificación y eliminación de productos, así como la consulta de encargos, están protegidas mediante una clave de administrador enviada en la cabecera `x-api-key`.

Esta clave se guarda en las variables de entorno del backend y no se incluye en el código público del frontend.

### Respuestas y errores

La API utiliza respuestas JSON y códigos HTTP para indicar el resultado de las solicitudes.

Entre los códigos utilizados están:

- **200:** solicitud correcta.
- **400:** datos incorrectos.
- **401:** acceso no autorizado.
- **404:** recurso o ruta no encontrada.
- **500:** error del servidor.

## Organización del proyecto

El código está separado para facilitar su mantenimiento.

- `src/`: componentes y páginas del frontend.
- `public/images/`: imágenes de los productos y de la pastelería.
- `backend/app.js`: configuración principal del servidor.
- `backend/rutas/`: rutas de la API.
- `backend/controladores/`: lógica de las peticiones.
- `backend/data/`: conexión con MySQL.
- `backend/middlewares/`: control de errores y protección de rutas.

## Conclusión

Con este proyecto aprendí a conectar una página de React con una API desarrollada en Express y una base de datos MySQL.

También aprendí a trabajar con GitHub, organizar los archivos del proyecto y publicar las distintas partes de la aplicación en Internet.

Lo que más me gusta es que el trabajo está basado en nuestra pastelería real. No es solamente una actividad de clase, sino una web que también podemos utilizar para dar a conocer Baúl Dulce.

## Autora

Jimena Espejo
