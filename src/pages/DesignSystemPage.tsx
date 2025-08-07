import React from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { designSystemCategories } from '../data/designSystemData';
import PageLayout from '../components/PageLayout';

const { Title } = Typography;

const DesignSystemPage: React.FC = () => {
  const breadcrumbItems = [
    { path: '/', name: 'Inicio' },
    { name: 'Design System' },
  ];

  return (
    <PageLayout
      breadcrumbItems={breadcrumbItems}
      pageTitle="Design System 1"
    >
        {designSystemCategories.map(category => (
          <div key={category.path} style={{ marginBottom: '40px' }}>
            <Title level={3}>{category.name}</Title>
            {category.subcategories.map(subcategory => (
              <div key={subcategory.path} style={{ marginBottom: '24px' }}>
                <Title level={4}>{subcategory.name}</Title>
                <Row gutter={[16, 16]}>
                  {subcategory.components.map(component => (
                    <Col xs={24} sm={12} md={8} lg={6} key={component.path}>
                      <Link to={`/design-system/${category.path}/${subcategory.path}/${component.path}`}>
                        <Card
                          title={component.name}
                          hoverable
                          onClick={() => {}}
                          style={{ textAlign: 'center' }}
                        >
                          <Button type="link">Ver Componente</Button>
                        </Card>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
        </div>
      ))}
    </PageLayout>
  );
};

export default DesignSystemPage; 