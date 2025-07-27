import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

const AboutPage: React.FC = () => {
  return (
    <Space direction="vertical" style={{ padding: '20px' }}>
      <Title level={2}>Otra página</Title>
      <Paragraph>
        Esta es la página "Acerca de". Aquí podrías poner información sobre tu aplicación.
      </Paragraph>
      <Paragraph>
        Volver a la <Link to="/">Página de Inicio</Link>.
      </Paragraph>
    </Space>
  );
};

export default AboutPage; 