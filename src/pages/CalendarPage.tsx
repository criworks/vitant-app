import React from 'react';
import { Empty } from 'antd';
import PageLayout from '../components/PageLayout';

const CalendarPage: React.FC = () => {
  const breadcrumbItems = [
    { path: '/', name: 'Inicio' },
    { name: 'Calendario' },
  ];

  return (
    <PageLayout
      breadcrumbItems={breadcrumbItems}
      pageTitle="Calendario"
    >
      <Empty description="En desarrollo" />
    </PageLayout>
  );
};

export default CalendarPage; 