import type { ThemeConfig } from 'antd'; // Importa ThemeConfig para tipado

const themeConfig: ThemeConfig = {
    cssVar: true, // ¡Esencial para que funcione con variables CSS!

    // Global Tokens (Seed, Map, Alias)
    token: {
        // Seed Tokens (Colores de la marca, radios de borde, tipografía base)
        colorPrimary: 'var(--primary)',
        colorSuccess: 'var(--success)',
        colorWarning: 'var(--warning)',
        colorError: 'var(--error)',
        colorInfo: 'var(--info)',

        borderRadius: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--border-radius-base')),
        // Usa parseFloat si tu variable CSS es un número (ej. "4px")

        // Para fuentes y tamaños base, a veces es mejor definirlos globalmente en CSS
        // o si los quieres controlar desde JS:
        fontFamily: 'var(--font-family-base)',

        // Alias Tokens (colores de texto, fondo, borde, etc.)
        colorText: 'var(--text-color)',
        colorTextSecondary: 'var(--text-color-secondary)',
        colorTextHeading: 'var(--heading-color)',
        colorTextDisabled: 'var(--disabled-color)',

        // colorBgBase: 'var(--background-color-red)',
        // colorBgLayout: 'var(--background-color-red)', // Podrías usar un color más claro para el layout
        // colorBgContainer: 'var(--background-color-container)', // Transparente para Card, Content

        colorBorder: 'var(--border-color-base)',
        colorBorderSecondary: 'var(--border-color-split)',

        // Sombras
        boxShadow: 'var(--box-shadow-base)',
        boxShadowSecondary: 'var(--box-shadow-hover)',
        boxShadowTertiary: 'var(--box-shadow-active)',

        // Puedes añadir más tokens globales aquí según necesites
        // Por ejemplo, para espaciados, aunque Ant Design v5 usa un sistema diferente
        // sizeStep: 4, // Puedes usar esto para definir un incremento base para tamaños

        // Otras propiedades globales
        wireframe: false, // Puedes cambiar esto para ver el wireframe de los componentes
    },

    // Component Tokens (personalización de componentes específicos)
    components: {
        Button: {
            colorPrimary: 'var(--primary)', // Color del botón principal
            colorPrimaryText: 'var(--background-color-base)', // Color del texto en botón primary
            borderRadius: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--border-radius-base')),
            fontWeight: 500,
            // Puedes añadir más tokens específicos para el botón aquí
        },
        Input: {
            colorPrimary: 'var(--primary)',
            borderRadius: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--border-radius-base')),
            // ...
        },
        Card: {
            borderRadius: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--border-radius-lg')),
            // colorBgContainer: 'var(--background-color-container)',
            // ...
        },
        Layout: {
            // colorBgHeader: 'var(--background-color-base)', // Color de fondo del Header
            // colorBgBody: 'var(--background-color-light)', // Color de fondo del body del layout
            siderBg: 'var(--background-color-sider)', // Color de fondo del Sider
            headerBg: 'var(--background-color-header)', // Para que el Header no tenga su propio color y tome el del Layout
            bodyBg: 'var(--background-color-body)', // Color de fondo del body del layout
            headerPadding: '0',

        },
        Menu: {
            // Colores para menú en tema oscuro
            // colorItemBg: 'transparent',
            // colorItemText: 'rgba(255, 255, 255, 0.85)', // Color del texto por defecto en tema oscuro
            colorItemTextSelected: 'var(--primary)', // Color del texto seleccionado
            colorItemBgSelected: 'color-mix(in srgb, var(--primary) 15%, transparent)', // Un 15% de tu primary para el fondo seleccionado
            itemHoverColor: 'var(--primary)', // Color del texto al pasar el ratón
            // colorBgContainer: 'transparent', // Fondo transparente si el Sider ya tiene color
            // Puedes añadir más si usas tema claro en algún menú
            lineType: 'none',
        },
        Table: {
            borderRadius: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--border-radius-base')),
            fontSize: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size-base')),
            // ...
        },
        Typography: {
            colorTextHeading: 'var(--heading-color)',
            // ...
        },
        Divider: {
            lineType: 'solid',
            // verticalMargin: 0,
            // horizontalMargin: 0,
            colorSplit: 'var(--border-color-base)',
        },
        // Añade más componentes según tus necesidades
    }
};

export default themeConfig;