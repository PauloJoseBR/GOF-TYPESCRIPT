import { ProductProtocol } from './product-protocol';

export class TShirt implements ProductProtocol {
  constructor(protected product: ProductProtocol) {}

  private name = 'Camiseta';
  private price = 49.9;

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}
