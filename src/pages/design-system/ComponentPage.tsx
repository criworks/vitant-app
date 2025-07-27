import React from 'react';
import { Typography, Breadcrumb } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { designSystemCategories } from '../../data/designSystemData';

const { Title, Text } = Typography;

const ComponentPage: React.FC = () => {
  const { category, subcategory, component } = useParams<{ category: string; subcategory: string; component: string }>();

  const currentCategory = designSystemCategories.find(cat => cat.path === category);
  const currentSubcategory = currentCategory?.subcategories.find(subcat => subcat.path === subcategory);
  const currentComponent = currentSubcategory?.components.find(comp => comp.path === component);

  if (!currentCategory || !currentSubcategory || !currentComponent) {
    return <Title level={2}>Componente no encontrado</Title>;
  }

  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to="/">Inicio</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/design-system">Design System</Link></Breadcrumb.Item>
        <Breadcrumb.Item>{currentComponent.name}</Breadcrumb.Item>
      </Breadcrumb>
      <Title level={2}>{currentComponent.name}</Title>
      <Text>Esta es la página del componente {currentComponent.name}. Aquí se mostrarán ejemplos de uso, propiedades y directrices.</Text>
      {/* Aquí se pueden añadir ejemplos específicos del componente */}
    </div>
  );
};

export default ComponentPage; 