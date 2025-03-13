# Series Explorer

## Descripción

Series Explorer es una aplicación web moderna desarrollada con Next.js que permite a los usuarios explorar, buscar y descubrir series de televisión. La aplicación utiliza la API de TMDB (The Movie Database) para proporcionar información actualizada sobre series populares, recomendaciones y detalles específicos de cada serie.

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
- **Interfaz responsiva**: Disfruta de una experiencia de usuario óptima en cualquier dispositivo

## Tecnologías utilizadas

- **Next.js 15.2.2**: Framework de React para aplicaciones web
- **React 19**: Biblioteca JavaScript para construir interfaces de usuario
- **TypeScript**: Superset de JavaScript con tipado estático
- **SASS**: Preprocesador CSS para estilos avanzados
- **API de TMDB**: Fuente de datos para información de series

## Requisitos previos

- Node.js v22.13.0 o superior
- NPM o Yarn

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/my-series-app.git
   cd my-series-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env.local` en la raíz del proyecto y añade tu clave API de TMDB:

   ```
   NEXT_PUBLIC_TMDB_API_KEY=tu_clave_api_aquí
   ```

   Puedes obtener una clave API registrándote en [TMDB](https://www.themoviedb.org/documentation/api).

## Uso

### Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### Producción

Para construir la aplicación para producción:

```bash
npm run build
```

Para iniciar el servidor de producción:

```bash
npm run start
```

## Estructura del proyecto

```
my-series-app/
├── src/
│   ├── app/                  # Rutas y páginas de la aplicación
│   ├── components/           # Componentes reutilizables
│   ├── services/             # Servicios para API y lógica de negocio
│   ├── styles/               # Estilos SCSS
│   └── types/                # Definiciones de tipos TypeScript
├── public/                   # Archivos estáticos
└── ...
```

## Contribución

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`)
4. Sube los cambios a tu fork (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## Contacto

Para cualquier consulta o sugerencia, no dudes en contactar con el equipo de desarrollo.

---

Desarrollado con ❤️ usando Next.js y React.
