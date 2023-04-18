import { Order, Product } from 'src/interfaces/interfaces';

const orderOne: Product = { id: '1', name: 'First Order', price: 220 };
const orderTwo: Product = { id: '2', name: 'Second Order', price: 220 };
const orderThree: Product = { id: '3', name: 'Third Order', price: 220 };
const orderFour: Product = { id: '4', name: 'Fourth Order', price: 220 };

export const orderFirst: Order[] = [
  {
    id: '1',
    placedAt: new Date(),
    products: [orderOne, orderTwo],
  },
];

export const orderScnd: Order[] = [
  {
    id: '2',
    placedAt: new Date(),
    products: [orderThree, orderFour],
  },
];
