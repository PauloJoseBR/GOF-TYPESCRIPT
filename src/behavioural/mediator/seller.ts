import { Mediator } from './mediator';
import { SellerProduct } from './seller-product';

export class Seller {
  private products: SellerProduct[] = [];
  private mediator?: Mediator;

  showProducts(): void {
    this.products.forEach((product) =>
      console.log(product.id, product.price, product.price),
    );
  }

  addProduct(...products: SellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  setMedidator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}
