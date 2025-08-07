import React from 'react';
import { Empty } from 'antd';
import PageLayout from '../components/PageLayout';

const ReportsPage: React.FC = () => {
  const breadcrumbItems = [
    { path: '/', name: 'Inicio' },
    { name: 'Reportes' },
  ];

  return (
    <PageLayout
      breadcrumbItems={breadcrumbItems}
      pageTitle="Reportes"
    >
      <Empty description="En desarrollo" />
    </PageLayout>
  );
};

export default ReportsPage; 