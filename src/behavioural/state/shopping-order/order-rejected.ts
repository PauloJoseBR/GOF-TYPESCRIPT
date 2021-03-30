import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}
  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log('Cartão de crédito inválido');
  }

  rejectPayment(): void {
    console.log('Não posso recusar o pagamento porque o pedido foi recusado. ');
  }

  waitPayment(): void {
    console.log('Pedido já foi recusado');
  }
  shipOrder(): void {
    console.log('Não posso enviar com pagamento recusado')
  }
}
