import React, { useState } from 'react';
import { Input, List, Typography, Divider, Space, Select, Button, Flex } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { Product } from '../data/mockProducts';
import { mockProducts } from '../data/mockProducts';

const { Text } = Typography;
const { Search } = Input;

interface ProductSearchDropdownProps {
  onSelectProduct: (product: Product) => void;
}

const ProductSearchDropdown: React.FC<ProductSearchDropdownProps> = ({ onSelectProduct }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [category, setCategory] = useState<string | undefined>(undefined);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    filterProducts(value, category);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value === 'all' ? undefined : value);
    filterProducts(searchTerm, value === 'all' ? undefined : value);
  };

  const filterProducts = (term: string, cat?: string) => {
    let results = mockProducts;

    if (cat) {
      // En un caso real, aquí filtrarías por la categoría
      // results = results.filter(product => product.category === cat);
    }

    if (term) {
      results = results.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.code.toLowerCase().includes(term.toLowerCase()) ||
        product.specification.toLowerCase().includes(term.toLowerCase())
      );
    }
    setFilteredProducts(results);
  };

  const categories = [
    { value: 'all', label: 'Todas las categorías' },
    // Aquí agregarías tus categorías reales
    { value: 'equipos_deportivos', label: 'Equipos deportivos' },
  ];

  return (
    <div style={{ padding: '8px', width: '400px' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Flex gap="small">
          <Search
            placeholder="Buscar productos por nombre, código o especificación..."
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            enterButton
            style={{ flex: 1 }}
          />
          <Select
            value={category || 'all'}
            style={{ width: '160px' }}
            onChange={handleCategoryChange}
            options={categories}
          />
        </Flex>

        {category === 'equipos_deportivos' && (
          <Divider orientation="left" plain style={{ margin: '8px 0' }}>
            <Text type="secondary">Equipos deportivos</Text>
          </Divider>
        )}

        <List
          size="small"
          dataSource={filteredProducts}
          renderItem={product => (
            <List.Item
              key={product.id}
              actions={[
                <Button type="link" onClick={() => onSelectProduct(product)}>
                  Seleccionar
                </Button>,
              ]}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
              }}
            >
              <Flex gap="small" align="center">
                <Text strong>${product.price}</Text>
                <Text>{product.name}</Text>
                <Text type="secondary">Cód.: {product.code}</Text>
                <Text type="secondary">Material: {product.material}</Text>
              </Flex>
            </List.Item>
          )}
        />
      </Space>
    </div>
  );
};

export default ProductSearchDropdown; 