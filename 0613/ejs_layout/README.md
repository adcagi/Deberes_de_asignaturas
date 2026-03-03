\# Dashboard de Posts

Este proyecto es un \*\*dashboard de análisis de posts\*\* usando \*\*Node.js, Express, EJS y SQLite\*\*. Permite sincronizar datos desde la API de \[JSONPlaceholder\](https://jsonplaceholder.typicode.com/) y mostrar estadísticas visuales con \*\*Chart.js\*\*.

\#\# Características

\- Mediana de posts por usuario   
\- Top 5 contributors   
\- Top 5 posts más comentados   
\- Posts por usuario   
\- Gráficos interactivos y responsivos   
\- Botón de sincronización para actualizar los datos 

\---

\#\# Requisitos

\- Node.js ≥ 18   
\- npm ≥ 9 

\---

\#\# Instalación

1\. Clona el repositorio o descarga los archivos.   
2\. Abre la terminal en la carpeta del proyecto.   
3\. Instala las dependencias:

\`\`\`bash  
npm install  
---

## **Uso**

1. Inicia el servidor:

npm start

2. Abre tu navegador en:

http://localhost:3000

3. En la página principal:  
   * Pulsa **Sincronizar** para obtener posts y comentarios desde la API.  
   * El dashboard se actualizará mostrando los insights y gráficos.

---

## **Estructura de Archivos**

dashboard/  
│── app.js  
│── package.json  
│  
├── routes/  
│   ├── sync.js       \# Ruta para sincronizar posts y comentarios  
│   └── api.js        \# Ruta para dashboard y cálculos  
│  
├── views/  
│   ├── dashboard.ejs       \# Dashboard principal con gráficos  
│   └── partials/  
│       └── header.ejs     \# Encabezado HTML y Chart.js CDN  
│  
├── public/  
│   └── css/  
│       └── style.css      \# Estilos del dashboard  
---

## **Tecnologías utilizadas**

* [Node.js](https://nodejs.org/)  
* [Express](https://expressjs.com/)  
* [EJS](https://ejs.co/)  
* [SQLite](https://www.sqlite.org/) con [Better-SQLite3](https://github.com/WiseLibs/better-sqlite3)  
* [Chart.js](https://www.chartjs.org/)

---

## **Cómo funciona**

1. **Sincronización:**  
   La ruta `/sync/posts` descarga los datos de posts y comentarios de JSONPlaceholder y los guarda en SQLite.  
2. **Cálculos del dashboard:**  
   * Mediana de posts por usuario  
   * Top 5 contributors  
   * Top 5 posts más comentados  
   * Conteo de posts por usuario  
3. **Visualización:**  
   Todos los datos se muestran en gráficos interactivos generados con Chart.js en `dashboard.ejs`.

---

## **Personalización**

* Puedes cambiar colores y estilos editando `public/css/style.css`.  
* Para agregar nuevos gráficos, modifica `routes/api.js` para calcular los datos y `dashboard.ejs` para visualizarlos.

---

## **Notas**

* Si no hay datos, los gráficos mostrarán un mensaje indicando que es necesario sincronizar primero.  
* Se usa `<%- JSON.stringify(...) %>` para pasar correctamente los datos de Node a JavaScript sin escapar caracteres.

