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
- **Transiciones fluidas**: Implementación de la API View Transitions para una navegación visualmente atractiva

## Tecnologías utilizadas

- **Next.js 15**: Framework de React para aplicaciones web
- **React 19**: Biblioteca para construir interfaces de usuario
- **TypeScript**: Superset tipado de JavaScript
- **SASS**: Preprocesador CSS para estilos avanzados
- **API de TMDB**: Fuente de datos para información de series
- **View Transitions API**: Para transiciones suaves entre páginas

## Requisitos previos

- Node.js v22.13.0 o superior
- PNPM como gestor de paquetes

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/PmplCode/TMDB-Series-Explorer
cd TMDB-Series-Explorer
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Crea un archivo .env.local en la raíz del proyecto con tu clave API de TMDB:

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
│   ├── app/        # Rutas y páginas de la aplicación
│   ├── components/ # Componentes reutilizables
│   ├── services/   # Servicios para comunicación con APIs
│   ├── styles/     # Estilos SCSS
│   └── types/      # Definiciones de tipos TypeScript
├── public/         # Archivos estáticos
└── ...             # Archivos de configuración
```

## Transiciones fluidas

Series Explorer implementa la API de View Transitions de React mediante:

```jsx
import { unstable_ViewTransition as ViewTransition } from "react";
```

Esta característica proporciona transiciones suaves y animadas entre páginas, mejorando significativamente la experiencia de usuario. Sin embargo, es importante tener en cuenta que:

- La API View Transitions es experimental y puede no estar disponible en todos los navegadores
- En dispositivos o navegadores no compatibles, la aplicación funcionará normalmente pero sin las transiciones animadas

## Futuras mejoras

### Personalización avanzada

- **Perfil de usuario AI-powered**: Implementación de un sistema de recomendación basado en inteligencia artificial que aprenda de tus preferencias con cada interacción
- **Modo "Discover"**: Algoritmo de descubrimiento que te presenta series de nicho fuera de tu zona de confort pero potencialmente interesantes

### Experiencia inmersiva

- **Notificaciones contextuales**: Alertas inteligentes sobre estrenos de nuevas temporadas basadas en tus patrones de visualización

### Funcionalidades sociales

- **Series Clubs**: Creación de comunidades temáticas para discutir episodios y teorías
- **Watch Parties**: Sincronización de visualización para ver series simultáneamente con amigos a distancia

### Optimización técnica

- **Streaming progresivo de datos**: Implementación de Suspense y Server Components para mejorar la percepción de velocidad
- **PWA completa**: Convertir la aplicación en una Progressive Web App para uso offline y experiencia nativa

## Implementación

Para conseguir estas mejoras, se planea:

- Investigar e implementar modelos de ML para procesamiento de preferencias de usuario
- Establecer un sistema de microservicios para manejar funcionalidades sociales
- Integrar WebRTC para la sincronización de watch parties

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
