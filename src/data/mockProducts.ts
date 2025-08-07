export interface Product {
  id: string;
  name: string;
  price: string;
  code: string;
  material: string;
  specification: string;
}

export const mockProducts: Product[] = [
  {
    id: 'prod1',
    name: 'Petos deportivos',
    price: '20.000',
    code: '511442807',
    material: 'Poliéster 100%',
    specification: 'Petos deportivos simples (15 petos por juego)',
  },
  {
    id: 'prod2',
    name: 'Camisetas de Fútbol',
    price: '20.000',
    code: '511442807',
    material: 'Poliéster 100%',
    specification: 'Camisetas de fútbol (1 damas y 1 juego varones)',
  },
  {
    id: 'prod3',
    name: 'Balones',
    price: '20.000',
    code: '511442807',
    material: 'Caucho de alta resistencia',
    specification: 'Balones de fútbol equivalentes a TRAIN',
  },
  {
    id: 'prod4',
    name: 'Conos de Entrenamiento',
    price: '5.000',
    code: '511442808',
    material: 'Plástico flexible',
    specification: 'Set de 10 conos para entrenamiento de agilidad',
  },
  {
    id: 'prod5',
    name: 'Vallas de Agilidad',
    price: '12.000',
    code: '511442809',
    material: 'PVC ligero',
    specification: 'Vallas ajustables para ejercicios de coordinación',
  },
]; 