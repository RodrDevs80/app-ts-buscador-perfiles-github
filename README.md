# App Buscador de Perfiles de GitHub

## Descripción

Esta aplicación es una herramienta sencilla que permite buscar perfiles de GitHub utilizando la API oficial de GitHub. Con ella, puedes ingresar un nombre de usuario y obtener información relevante sobre el perfil, como el nombre completo, biografía, ubicación y su avatar.

## Tecnologías Utilizadas

- **React** (v18.3.1): Biblioteca para construir interfaces de usuario.
- **TypeScript** (v5.6.2): Añade tipado estático al desarrollo.
- **Vite** (v6.0.5): Herramienta de desarrollo rápida y eficiente.
- **Axios** (v1.7.9): Cliente HTTP para consumir la API de GitHub.
- **ESLint**: Configurado con soporte para React y TypeScript.

## Características

- Busca usuarios de GitHub por nombre de usuario.
- Muestra información detallada sobre el usuario, incluyendo:
  - Nombre de usuario.
  - Nombre completo (si está disponible).
  - Biografía.
  - Ubicación.
  - Imagen del avatar del usuario.
- Manejo de errores para usuarios no encontrados o problemas de conexión.

## Estructura del Proyecto

```
├── public/
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── github.svg
│   ├── components/
│   │   ├── App-buscador.tsx
│   │   └── UserGithub.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu_usuario/app-buscador-user-github.git
   ```
2. Accede al directorio del proyecto:
   ```bash
   cd app-buscador-user-github
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

### Ejecutar en modo desarrollo

Inicia el servidor de desarrollo con el siguiente comando:

```bash
npm run dev
```

El proyecto estará disponible próximamente.

### Crear una build para producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`.

### Previsualizar la build de producción

```bash
npm run preview
```

## Scripts Disponibles

- **`dev`**: Inicia el servidor de desarrollo.
- **`build`**: Genera los archivos para producción.
- **`lint`**: Ejecuta ESLint para identificar problemas de estilo o errores.
- **`preview`**: Previsualiza la build de producción.

## Configuración de ESLint

El archivo `eslint.config.js` incluye configuraciones para:

- Reglas recomendadas de JavaScript y TypeScript.
- Soporte para React y hooks de React.
- Ignorar la carpeta `dist`.

## Estilos

Los estilos están definidos en el archivo `src/index.css` usando variables CSS y principios de diseño responsive.

## creador

https://github.com/RodrDevs80

## Licencia

Este proyecto está bajo la [Licencia MIT](./LICENSE).
