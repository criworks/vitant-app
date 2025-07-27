# Vitant App: Explorando React y Ant Design

Este proyecto es una aplicación web construida con **React**, **Vite** y **TypeScript**, diseñada con la intención principal de **dominar la configuración y el uso de Ant Design**. Sirve como un entorno de aprendizaje y experimentación para implementar un sistema de diseño utilizando los componentes y las directrices de Ant Design.

## Características Principales

- **Configuración de Ant Design**: Explora cómo integrar y personalizar Ant Design en un proyecto React.
- **Sistema de Diseño**: Incluye una sección dedicada al Design System con ejemplos de componentes de Ant Design.
- **Componentes Reutilizables**: Demuestra la creación de componentes UI siguiendo las mejores prácticas.
- **Enrutamiento**: Utiliza `react-router-dom` para la navegación entre diferentes secciones de la aplicación.
- **Tipado Fuerte**: Desarrollado con TypeScript para mejorar la robustez y el mantenimiento del código.

## Tecnologías Utilizadas

- **[React](https://react.dev/):** Una biblioteca de JavaScript para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/):** Una herramienta de construcción frontend de próxima generación que proporciona una experiencia de desarrollo extremadamente rápida.
- **[TypeScript](https://www.typescriptlang.org/):** Un superconjunto de JavaScript que añade tipado estático.
- **[Ant Design](https://ant.design/docs/react/introduce):** Un sistema de diseño y biblioteca de componentes UI para React de alta calidad.
- **[React Router DOM](https://reactrouter.com/en/main/start/overview):** Biblioteca para el enrutamiento declarativo en aplicaciones React.
- **[React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter):** Componente para resaltar sintaxis en el código.
- **[ESLint](https://eslint.org/):** Herramienta de linting para identificar y reportar patrones problemáticos encontrados en el código JavaScript/TypeScript.
- **[npm](https://docs.npmjs.com/):** Gestor de paquetes utilizado para instalar y administrar las dependencias del proyecto.

## Cómo Ejecutar el Proyecto

Para poner en marcha este proyecto en tu máquina local, sigue los siguientes pasos:

### 1. Clona el Repositorio

```bash
git clone https://github.com/criworks/vitant-app.git
cd vitant-app
```

### 2. Instala las Dependencias

Este proyecto utiliza `npm` como gestor de paquetes. Asegúrate de tener Node.js (versión 20.x recomendada) y npm instalados en tu sistema.

```bash
npm install
```

### 3. Inicia la Aplicación en Modo de Desarrollo

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en `http://localhost:5173` (o un puerto similar, que se mostrará en tu terminal).

### 4. Compila la Aplicación para Producción

Para compilar la aplicación para despliegue en producción:

```bash
npm run build
```

Esto generará los archivos optimizados en la carpeta `dist/`.

### 5. Previsualiza la Compilación de Producción

Para previsualizar la compilación de producción localmente:

```bash
npm run preview
```

### 6. Ejecuta el Linter

Para verificar problemas de linting en el código:

```bash
npm run lint
```

## Despliegue en Vercel

Este proyecto puede ser desplegado fácilmente en Vercel. Asegúrate de que la configuración de Node.js en tu `package.json` esté establecida y que el `package-lock.json` esté sincronizado. Si encuentras errores de módulos en Vercel, intenta una implementación con caché limpia desde el panel de control de Vercel.

```json
// En package.json
"engines": {
  "node": "20.x"
}
```

---

¡Esperamos que este proyecto te sea útil para dominar Ant Design con React!
