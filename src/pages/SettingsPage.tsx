import React from 'react';
import { Empty } from 'antd';
import PageLayout from '../components/PageLayout';

const SettingsPage: React.FC = () => {
  const breadcrumbItems = [
    { path: '/', name: 'Inicio' },
    { name: 'Configuración' },
  ];

  return (
    <PageLayout
      breadcrumbItems={breadcrumbItems}
      pageTitle="Configuración"
    >
      <Empty description="En desarrollo" />
    </PageLayout>
  );
};

export default SettingsPage; 