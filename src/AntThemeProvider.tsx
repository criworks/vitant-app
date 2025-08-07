// import type { ThemeConfig } from 'antd'; // Importa ThemeConfig para tipado
import React from 'react';
import { ConfigProvider } from 'antd';

const AntThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ConfigProvider
        theme={{
            // Global Tokens (Seed, Map, Alias) https://ant.design/docs/react/customize-theme
            token: {
                // Seed Tokens (Colores de la marca, radios de borde, tipografía base)
                // borderRadius: 6, Default de Ant
                // Usa parseFloat si tu variable CSS es un número (ej. "4px")
                //colorBgBase: '#1890FF', 
                colorPrimary: '#F9523B',
                colorSuccess: '#52c41a',
                colorWarning: '#FAAD14',
                colorError: '#F5222D',
                colorInfo: '#1890FF',
                colorLink: '#F9523B',

                // Para fuentes y tamaños base, a veces es mejor definirlos globalmente en CSS
                // o si los quieres controlar desde JS:
                fontFamily: 'Roboto, sans-serif',

                // Alias Tokens (colores de texto, fondo, borde, etc.)
                colorTextBase: '#101828',
                colorTextSecondary: '#64748B',
                colorTextHeading: '#101828',
                colorTextDisabled: '#64748B',

                colorBgLayout: '#FAFAFA', // Fondo de Layout: Header, Sider, Content.
                // colorBgContainer: 'blue', // Transparente para Fondo de Container: Card, Content.
                
                colorBorder: '#E2E8F0', // Color de borde transversal.
                colorSplit: '#E2E8F0', // Color de borde en menú y separadores de Space Items.

                // Sombras
                // boxShadow: 'var(--box-shadow-base)',

                // Puedes añadir más tokens globales aquí según necesites
                // Por ejemplo, para espaciados, aunque Ant Design v5 usa un sistema diferente
                // sizeStep: 4, // Puedes usar esto para definir un incremento base para tamaños

                // Otras propiedades globales
                wireframe: false, // Puedes cambiar esto para ver el wireframe de los componentes
            },

            // Component Tokens (personalización de componentes específicos)
            components: {
            //     //Button: {
            //         //colorPrimary: 'var(--primary)', // Color del botón principal
            //         //colorPrimaryText: 'var(--background-color-base)', // Color del texto en botón primary
            //         //borderRadius: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--border-radius-base')),
            //         //fontWeight: 500,
            //         //algorithm: true,
            //         // Puedes añadir más tokens específicos para el botón aquí
            //     //},
            //     Input: {
            //         colorPrimary: 'var(--primary)',
            //         borderRadius: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--border-radius-base')),
            //         // ...
            //     },
            //     //Card: {
            //         //borderRadius: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--border-radius-lg')),
            //         // colorBgContainer: 'var(--background-color-container)',
            //         // ...
            //     //},
                Layout: {
                    // bodyBg: '#FAFAFA', // Fondo de Layout: Header, Sider, Content. Es Alias de colorBgLayout
                    headerBg: '#FFFFFF', // Fondo del Header - Si está vacío, es transparente y toma el del Layout
                    headerPadding: '', // Padding del Header - Si está vacío, es 0
                    siderBg: '#FFFFFF', // Fondo del Sider - Si está vacío, es transparente y toma el del Layout
                },
                Menu: {
                    // Colores para menú en tema oscuro
                    // colorItemBg: 'transparent',
                    // colorItemText: 'rgba(255, 255, 255, 0.85)', // Color del texto por defecto en tema oscuro
                    // colorItemTextSelected: 'var(--primary)', // Color del texto seleccionado
                    // colorItemBgSelected: 'color-mix(in srgb, var(--primary) 15%, transparent)', // Un 15% de tu primary para el fondo seleccionado
                    // itemHoverColor: 'var(--primary)', // Color del texto al pasar el ratón
                    colorBgContainer: '', // Fondo del Menu - Si está vacío es transparente y toma el del Sider
                    // Puedes añadir más si usas tema claro en algún menú
                    lineType: 'none', // Una línea al final del menú
                },
            //     Table: {
            //         borderRadius: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--border-radius-base')),
            //         fontSize: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size-base')),
            //         // ...
            //     },
            //     Typography: {
            //         colorTextHeading: 'var(--heading-color)',
            //         // ...
            //     },
            //     Divider: {
            //         lineType: 'solid',
            //         // verticalMargin: 0,
            //         // horizontalMargin: 0,
            //         colorSplit: 'var(--border-color-base)',
            //     },
            //     // Añade más componentes según tus necesidades
            }
        }}
    >
        {children}
    </ConfigProvider>
);

export default AntThemeProvider;