import React, { useState, useRef } from 'react';
import { Popover, Button, Input, Switch, Typography, Space, Dropdown } from 'antd';
import PageLayout from '../components/PageLayout';
import { MessageOutlined, TagsOutlined } from '@ant-design/icons';
import ProductSearchDropdown from '../components/ProductSearchDropdown';
import type { Product } from '../data/mockProducts';

const { TextArea } = Input;
const { Text } = Typography;

interface Item {
  id: string;
  codigo: string;
  nombre: string;
  cantidad: number;
  unidad: string;
  selected: boolean;
  isAdjudicated: boolean;
  precioOfertado: string;
  especificacionProveedor: string;
  comentarios: string;
  popoverVisible: boolean;
  searchDropdownVisible: boolean; // Añadir esta propiedad para el control individual del dropdown de búsqueda
}

const TestPage: React.FC = () => {
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false); // Estado para el popover principal
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Item[]>(
    [
      { id: '1', codigo: 'COD001', nombre: 'PETOS DEPORTIVOS SIMPLES (15 PETOS POR JUEGO)', cantidad: 10, unidad: 'ud', selected: false, isAdjudicated: false, precioOfertado: '', especificacionProveedor: '', comentarios: '', popoverVisible: false, searchDropdownVisible: false },
      { id: '2', codigo: 'COD002', nombre: 'CAMISETAS DE FUTBOL (1 DAMAS 1Y 1 JUEGO VARONES)', cantidad: 5, unidad: 'ml', selected: true, isAdjudicated: false, precioOfertado: '15000', especificacionProveedor: 'Especificación del proveedor 2', comentarios: 'Comentarios para el ítem 2', popoverVisible: false, searchDropdownVisible: false },
      { id: '3', codigo: 'COD003', nombre: 'BALONES DE FÚTBOL EQUIVALENTES A TRAIN', cantidad: 2, unidad: 'kg', selected: false, isAdjudicated: true, precioOfertado: '2500', especificacionProveedor: 'Especificación adjudicada', comentarios: 'Ítem adjudicado', popoverVisible: false, searchDropdownVisible: false },
    ]
  );
  const [allItemsDisabled] = useState<boolean>(false);
  const [searchDropdownVisible, setSearchDropdownVisible] = useState<boolean>(false);
  const [searchDropdownItemId, setSearchDropdownItemId] = useState<string>('');
  // Eliminar el estado global searchDropdownVisible

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const contentPopover = (
    <div>
      <TextArea
        rows={4}
        placeholder="Escribe tus especificaciones"
        value={textAreaValue}
        onChange={handleTextAreaChange}
        style={{ width: '200px' }}
      />
      <div style={{ textAlign: 'right', marginTop: 8 }}>
        <Space>
          <Button size="small" onClick={() => setPopoverVisible(false)}>
            Cancelar
          </Button>
          <Button size="small" type="primary" onClick={() => setPopoverVisible(false)}>
            Guardar
          </Button>
        </Space>
      </div>
    </div>
  );

  const handleItemToggle = (itemId: string, checked: boolean) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, selected: checked } : item
    ));
  };

  const handleItemChange = (itemId: string, field: keyof Item, value: string) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, [field]: value } : item
    ));
  };

  const handleProductSelect = (selectedProduct: Product, itemId: string) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId
        ? { 
            ...item, 
            precioOfertado: selectedProduct.price, 
            especificacionProveedor: selectedProduct.specification,
            nombre: selectedProduct.name, // Actualizar el nombre del producto
            codigo: selectedProduct.code, // Actualizar el código
            searchDropdownVisible: false, // Cerrar el dropdown después de la selección
          }
        : item
    ));
  };

  const handleProductSearchDropdownVisibility = (itemId: string, visible: boolean) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, searchDropdownVisible: visible } : item
    ));
  };

  const handleItemCommentSave = (itemId: string, newComment: string) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, comentarios: newComment, popoverVisible: false } : item
    ));
    console.log(`Comentario guardado para el ítem ${itemId}: ${newComment}`);
  };

  const handleItemCommentCancel = (itemId: string) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, popoverVisible: false } : item
    ));
    console.log(`Comentario cancelado para el ítem ${itemId}`);
  };

  const handleItemPopoverVisibility = (itemId: string, visible: boolean) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, popoverVisible: visible } : item
    ));
  };

  const CommentPopoverContent: React.FC<{ item: Item, onSave: (value: string) => void, onCancel: () => void }> = 
    ({ item, onSave, onCancel }) => {
    const [currentComment, setCurrentComment] = useState(item.comentarios);

    return (
      <div>
        <TextArea
          rows={4}
          placeholder="Escribe tus comentarios"
          value={currentComment}
          onChange={(e) => setCurrentComment(e.target.value)}
          style={{ width: '200px' }}
        />
        <div style={{ textAlign: 'right', marginTop: 8 }}>
          <Space>
            <Button size="small" onClick={onCancel}>
              Cancelar
            </Button>
            <Button size="small" type="primary" onClick={() => onSave(currentComment)}>
              Guardar
            </Button>
          </Space>
        </div>
      </div>
    );
  };

  const breadcrumbItems = [
    { path: '/', name: 'Inicio' },
    { name: 'Página de Pruebas' },
  ];

  return (
    <PageLayout
      breadcrumbItems={breadcrumbItems}
      pageTitle="Página de Pruebas de Componentes"
    >
      <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '20px' }} ref={containerRef}>
        {/* Aquí es donde añadirás tus componentes para probar */}
        {/* El Popover principal del TextArea, mantenemos su visibilidad global para este ejemplo */}
        <Popover
          content={contentPopover}
          title="Especificaciones Detalladas"
          trigger="click"
          open={popoverVisible}
          onOpenChange={setPopoverVisible}
          getPopupContainer={() => containerRef.current || document.body}
        >
          <TextArea
            rows={1}
            style={{ width: '160px', cursor: 'pointer' }}
            placeholder="Especificaciones (Haz clic para expandir)"
            value={textAreaValue}
            onChange={handleTextAreaChange}
            onClick={() => setPopoverVisible(true)}
          />
        </Popover>
      </div>

      {/* Items list */}
      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.id} className="bg-white" style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '16px', marginBottom: '16px' }}>
            {/* Main item row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', padding: '24px' }}>
              {/* Información del comprador - Lado izquierdo */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '14px', color: '#8c8c8c' }}>
                  <Text>Cód.: {item.codigo}</Text>
                  <Text>{item.cantidad} {item.unidad || 'Ampolla'}</Text>
                </div>
                <Text style={{ fontSize: '14px', color: '#262626', lineHeight: '1.6' }}>
                  {item.nombre}
                </Text>
              </div>

              {/* Panel de postulación - Lado derecho con estilo Figma */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#fff4f0', border: '2px dashed #ffc7b8', borderRadius: '8px', padding: '16px', width: '100%' }}>

                {/* Switch + texto */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Switch
                    checked={item.selected && !item.isAdjudicated}
                    onChange={(checked) => handleItemToggle(item.id, checked)}
                    disabled={item.isAdjudicated || allItemsDisabled}
                  />
                  <Text style={{ fontSize: '14px', fontWeight: '600', color: '#262626', width: '100%' }}>Ofertar</Text>
                </div>

                {/* Botón de búsqueda de productos con Dropdown */}
                <Dropdown
                  overlay={<ProductSearchDropdown onSelectProduct={(product) => handleProductSelect(product, item.id)} />}
                  trigger={['click']}
                  open={searchDropdownVisible && searchDropdownItemId === item.id}
                  onOpenChange={(visible) => handleProductSearchDropdownVisibility(item.id, visible)}
                  getPopupContainer={() => containerRef.current || document.body}
                >
                  <Button
                    size="large"
                    type="default"
                    disabled={!item.selected || item.isAdjudicated}
                    icon={<TagsOutlined style={{ fontSize: '16px' }} />}
                    onClick={() => {
                      setSearchDropdownItemId(item.id);
                      setSearchDropdownVisible(true);
                    }} // Asegurarse de abrir el correcto
                  />
                </Dropdown>

                {/* Valor unitario */}

                <Input
                  placeholder="Ingresa un monto"
                  size="large"
                  prefix={<Text>$</Text>}
                  style={{ borderRadius: '0 6px 6px 0', borderLeft: 'none', fontSize: '14px', width: '200px' }}
                  value={item.precioOfertado}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleItemChange(item.id, 'precioOfertado', e.target.value)}
                  disabled={!item.selected || item.isAdjudicated}
                  type="number"
                />

                {/* Especificación del proveedor */}
                <div>
                  <TextArea
                    placeholder="Escribe tus especificaciones"
                    size="large"
                    rows={1}
                    style={{ fontSize: '14px', resize: 'vertical', width: '240px' }}
                    value={item.especificacionProveedor}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleItemChange(item.id, 'especificacionProveedor', e.target.value)}
                    disabled={!item.selected || item.isAdjudicated}
                  />
                </div>

                {/* Botón de comentarios */}
                <div>
                  <Popover
                    content={(
                      <CommentPopoverContent 
                        item={item} 
                        onSave={(newComment) => handleItemCommentSave(item.id, newComment)}
                        onCancel={() => handleItemCommentCancel(item.id)}
                      />
                    )}
                    title="Comentarios"
                    trigger="click"
                    open={item.popoverVisible}
                    onOpenChange={(visible) => handleItemPopoverVisibility(item.id, visible)}
                    getPopupContainer={() => containerRef.current || document.body}
                  >
                    <Button
                      onClick={() => handleItemPopoverVisibility(item.id, true)}
                      disabled={!item.selected || item.isAdjudicated}
                      icon={<MessageOutlined />}
                    >
                      {item.comentarios ? item.comentarios.length : 0}
                    </Button>
                  </Popover>
                </div>

              </div>
            </div>

            {/* Botones de análisis - siguiendo Figma exactamente */}
            <div style={{ padding: '0 24px 24px' }}>
              <Space>
                <Button type="link">Ver convocatorias similares</Button>
                <Button type="link">Ver historial de precios</Button>
              </Space>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default TestPage;
