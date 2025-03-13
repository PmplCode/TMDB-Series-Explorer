# Series Explorer

## Descripción

Series Explorer es una aplicación web moderna desarrollada con Next.js que permite a los usuarios explorar, buscar y descubrir series de televisión. La aplicación utiliza la API de TMDB (The Movie Database) para proporcionar información actualizada sobre series populares, recomendaciones y detalles específicos.

## Características

- **Exploración de series populares**: Visualiza las series más populares del momento
- **Búsqueda avanzada**: Encuentra series por nombre o palabras clave
- **Detalles completos**: Accede a información detallada de cada serie, incluyendo:
  - Sinopsis
  - Fecha de estreno
  - Número de temporadas y episodios
  - Géneros
  - Calificación
  - Estado actual
- **Recomendaciones personalizadas**: Descubre series similares y recomendadas basadas en tus intereses
- **Interfaz responsiva**: Experiencia de usuario optimizada para cualquier dispositivo

## Tecnologías utilizadas

- **Next.js 15**: Framework de React para aplicaciones web
- **React 19**: Biblioteca para construir interfaces de usuario
- **TypeScript**: Superset tipado de JavaScript
- **SASS**: Preprocesador CSS para estilos avanzados
- **API de TMDB**: Fuente de datos para información de series

## Requisitos previos

- Node.js v22.13.0 o superior
- PNPM como gestor de paquetes

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/my-series-app.git
   cd my-series-app
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Crea un archivo `.env.local` en la raíz del proyecto con tu clave API de TMDB:

   ```
   NEXT_PUBLIC_TMDB_API_KEY=tu_clave_api_aquí
   ```

   Puedes obtener tu API key registrándote en [The Movie Database (TMDB)](https://www.themoviedb.org/) y solicitando acceso a la API en la sección de API Documentation.

4. Inicia el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

```
my-series-app/
├── src/
│   ├── app/                  # Rutas y páginas de la aplicación
│   ├── components/           # Componentes reutilizables
│   ├── services/             # Servicios para comunicación con APIs
│   ├── styles/               # Estilos SCSS
│   └── types/                # Definiciones de tipos TypeScript
├── public/                   # Archivos estáticos
└── ...                       # Archivos de configuración
```

## Despliegue

Para construir la aplicación para producción:

```bash
pnpm build
```

Para iniciar la versión de producción:

```bash
pnpm start
```

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto

Para cualquier consulta o sugerencia, no dudes en contactar con el equipo de desarrollo.

---

Desarrollado con ❤️ usando Next.js y React.
