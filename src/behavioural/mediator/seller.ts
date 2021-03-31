export type SellerProduct = { id: string; name: string; price: number };

export class Seller {
  private products: SellerProduct[] = [];

  showProducts(): void {
    this.products.forEach((product) =>
      console.log(product.id, product.price, product.price),
    );
  }

  addProduct(...products: SellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }
}
