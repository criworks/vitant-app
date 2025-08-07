import React from 'react';
import { Empty } from 'antd';
import PageLayout from '../components/PageLayout';

const ManagePage: React.FC = () => {
  const breadcrumbItems = [
    { path: '/', name: 'Inicio' },
    { name: 'Seguimiento' },
  ];

  return (
    <PageLayout
      breadcrumbItems={breadcrumbItems}
      pageTitle="Seguimiento"
    >
      <Empty description="En desarrollo" />
    </PageLayout>
  );
};

export default ManagePage; 