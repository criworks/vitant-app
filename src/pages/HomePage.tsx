import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  return (
    <Space direction="vertical" style={{ padding: '20px' }}>
      <Title level={2}>Bienvenido a la Página de Inicio</Title>
      <Paragraph>
        Esta es la página de inicio de tu aplicación Vitant con React y Ant Design.
        Aquí puedes empezar a construir tu interfaz de usuario.
      </Paragraph>
      <Paragraph>
        Navega a la <Link to="/page">Página Acerca de</Link>.
      </Paragraph>
    </Space>
  );
};

export default HomePage; 