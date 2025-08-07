import React from 'react';
import { Typography, Empty } from 'antd';
import { useParams } from 'react-router-dom';
import { designSystemCategories } from '../../data/designSystemData';
import PageLayout from '../../components/PageLayout';

const { Title } = Typography;

const ComponentPage: React.FC = () => {
  const { category, subcategory, component } = useParams<{ category: string; subcategory: string; component: string }>();

  const currentCategory = designSystemCategories.find(cat => cat.path === category);
  const currentSubcategory = currentCategory?.subcategories.find(subcat => subcat.path === subcategory);
  const currentComponent = currentSubcategory?.components.find(comp => comp.path === component);

  if (!currentCategory || !currentSubcategory || !currentComponent) {
    return <Title level={2}>Componente no encontrado</Title>;
  }

  const breadcrumbItems = [
    { path: '/', name: 'Inicio' },
    { path: '/design-system', name: 'Design System' },
    { name: currentComponent.name },
  ];

  return (
    <PageLayout
      breadcrumbItems={breadcrumbItems}
      pageTitle={currentComponent.name}
    >
      <Empty description="En desarrollo" />
    </PageLayout>
  );
};

export default ComponentPage; 