import React from 'react';
import { Breadcrumb, Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { designSystemCategories } from '../data/designSystemData';

const { Title, Text } = Typography;

const DesignSystemPage: React.FC = () => {
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to="/">Inicio</Link></Breadcrumb.Item>
        <Breadcrumb.Item>Design System</Breadcrumb.Item>
      </Breadcrumb>
      <Title level={2}>Design System</Title>
      <Text>Aquí encontrarás una colección de componentes UI para usar en tu aplicación, organizados por categorías.</Text>

      <div style={{ marginTop: '24px' }}>
        {designSystemCategories.map(category => (
          <div key={category.path} style={{ marginBottom: '40px' }}>
            <Title level={3}>{category.name}</Title>
            {category.subcategories.map(subcategory => (
              <div key={subcategory.path} style={{ marginBottom: '20px' }}>
                <Title level={4}>{subcategory.name}</Title>
                <Row gutter={[16, 16]}>
                  {subcategory.components.map(component => (
                    <Col key={component.path} xs={24} sm={12} md={8} lg={6}>
                      <Link to={`/design-system/${category.path}/${subcategory.path}/${component.path}`}>
                        <Card hoverable title={component.name} style={{ textAlign: 'center' }}>
                          <p>{`Preview de ${component.name}`}</p>
                        </Card>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignSystemPage; 