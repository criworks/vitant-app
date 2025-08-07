// src/components/AppLayout.tsx
import React from 'react';
import { Layout, Menu, Divider, Typography, Flex, Affix } from 'antd';
import { Outlet, Link } from 'react-router-dom'; // Usamos Outlet para renderizar las rutas anidadas

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const AppLayout: React.FC = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Affix offsetTop={0}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Flex align="center" justify="center" style={{ width: '200px' }}>
            <Text strong>VitAnt</Text>
          </Flex>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={[
              { key: '1', label: <Link to="/">Inicio</Link> },
              { key: '2', label: <Link to="/search">Búsqueda</Link> },
              { key: '3', label: <Link to="/design-system">Design System</Link> },
              { key: '4', label: <Link to="/tests">Pruebas</Link> },
              { key: '5', label: <Link to="/about">Acerca de</Link> },

              // Puedes añadir más elementos de menú aquí
            ]}
          />
        </Header>
        <Divider style={{ margin: 0 }} />
      </Affix>
      <Layout>
        <Affix offsetTop={65}>
          <Sider width={200} style={{ height: '100vh' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                { key: '1', label: <Link to="/">Inicio</Link> },
                { key: '2', label: <Link to="/search">Búsqueda</Link> },
                { key: '3', label: <Link to="/manage">Seguimiento</Link> },
                { key: '4', label: <Link to="/calendar">Calendario</Link> },
                { key: '5', label: <Link to="/reports">Reportes</Link> },
                { key: '6', label: <Link to="/settings">Configuración</Link> },
                { key: '7', label: <Link to="/tests">Página de Pruebas</Link> },
                { key: '8', label: <Link to="/design-system">Design System</Link> },
                // Más enlaces de navegación aquí
              ]}
            />
          </Sider>
        </Affix>
        <Divider style={{ margin: 0, height: 'auto' }} type="vertical" />
        <Layout>
          {/* Aquí puedes añadir Breadcrumb u otros elementos */}
          <Content style={{ padding: '24px' }}>
            {/* Las rutas anidadas se renderizarán aquí */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;