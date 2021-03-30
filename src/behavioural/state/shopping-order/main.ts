import { ShoppingOrder } from './shopping-order';

const order = new ShoppingOrder(); // Pendente
order.approvePayment(); // Aprovado
order.waitPayment();
order.shipOrder();
order.rejectPayment();
order.approvePayment();
