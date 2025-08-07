import React from 'react';
import { Breadcrumb, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface PageLayoutProps {
  breadcrumbItems: Array<{ path?: string; name: string }>;
  pageTitle: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ breadcrumbItems, pageTitle, children }) => {
  return (
    <>
      <Space direction="vertical">

        <Breadcrumb>
          {breadcrumbItems.map((item, index) => (
            <Breadcrumb.Item key={index}>
              {item.path ? <Link to={item.path}>{item.name}</Link> : item.name}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>

        <Title level={4}>{pageTitle}</Title>

        {children}
        
      </Space>
    </>
  );
};

export default PageLayout; 