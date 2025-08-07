import React from 'react';
import { Empty } from 'antd';
import PageLayout from '../components/PageLayout';

const SearchPage: React.FC = () => {
  const breadcrumbItems = [
    { path: '/', name: 'Inicio' },
    { name: 'Búsqueda' },
  ];

  return (
    <PageLayout
      breadcrumbItems={breadcrumbItems}
      pageTitle="Búsqueda"
    >
      <Empty description="En desarrollo" />
    </PageLayout>
  );
};

export default SearchPage; 