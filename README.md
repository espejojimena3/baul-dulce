# Baúl Dulce 🍰

## Sobre el proyecto

Baúl Dulce es una pastelería que tenemos mi hermana Dina y yo. Empezamos durante la pandemia, vendiendo dulces a familiares y vecinos, y poco a poco fuimos creciendo.

Para mi proyecto final decidí crear una página web para nuestro emprendimiento, donde los clientes puedan conocer nuestra historia, ver los productos y ponerse en contacto con nosotras.

## ¿Qué tiene la página?

- **Inicio:** presentación de nuestra pastelería.
- **Productos:** catálogo de dulces con fotografías, precios, buscador y una ventana con más detalles.
- **Nosotros:** la historia de cómo empezamos Baúl Dulce.
- **Contacto:** formulario conectado con Formspree para recibir mensajes.

## Tecnologías utilizadas

Para desarrollar la página he utilizado React, Vite, JavaScript y CSS.

También he creado un backend con Node.js y Express, conectado a una base de datos que gestiono con XAMPP y phpMyAdmin.

La API permite consultar, añadir, modificar y eliminar productos mediante las operaciones CRUD.

## Cómo ejecutar el proyecto

Primero hay que configurar la base de datos `baul_dulce` y crear el archivo `backend/.env` siguiendo el ejemplo de `.env.example`.

**Backend:**

```bash
cd backend
npm install
node app.js
```

**Frontend:** desde la carpeta principal del proyecto:

```bash
pnpm install
pnpm dev
```

## Conclusión

Con este proyecto he podido aplicar lo que he aprendido durante el curso a un negocio que forma parte de mi vida. Me ha gustado especialmente poder crear una web para nuestra propia pastelería y conectar los productos con una base de datos real.
