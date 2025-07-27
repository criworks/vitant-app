// src/components/AppLayout.tsx
import React from 'react';
import { Layout, Menu, Divider } from 'antd';
import { Outlet, Link } from 'react-router-dom'; // Usamos Outlet para renderizar las rutas anidadas

const { Header, Content, Sider } = Layout;

const AppLayout: React.FC = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" style={{ width: '200px', color: 'var(--primary)', fontSize: '18px', fontWeight: 'semibold', display: 'flex', justifyContent: 'center' }}>
          vitant
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[
            { key: '1', label: <Link to="/">Inicio</Link> },
            { key: '2', label: <Link to="/page">Página</Link> },
            // Puedes añadir más elementos de menú aquí
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Divider style={{ margin: 0, borderColor: 'var(--border-color-base)' }} />
      <Layout>
        <Sider width={200} style={{  }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            items={[
              {
                key: 'sub1',
                label: 'Navegación',
                children: [
                  { key: '1', label: <Link to="/">Página de Inicio</Link> },
                  { key: '2', label: <Link to="/page">Página</Link> },
                  { key: 'design-system', label: <Link to="/design-system">Design System</Link> },
                  { key: '3', label: <Link to="/page">Página</Link> },
                  { key: '4', label: <Link to="/page">Página</Link> },
                  { key: '5', label: <Link to="/page">Página</Link> },
                  { key: '6', label: <Link to="/page">Página</Link> },
                  { key: '7', label: <Link to="/page">Página</Link> },
                  { key: '8', label: <Link to="/page">Página</Link> },
                  { key: '9', label: <Link to="/page">Página</Link> },
                  // Más enlaces de navegación aquí
                ],
              },
            ]}
          />
        </Sider>
        <Divider style={{ margin: 0, borderColor: 'var(--border-color-base)', height: 'auto' }} type="vertical" />
        <Layout style={{ padding: '24px 24px' }}>
          {/* Aquí puedes añadir Breadcrumb u otros elementos */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {/* Las rutas anidadas se renderizarán aquí */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;