/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class ProductComponent {
  abstract getPrice(): number;
  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
  getChild(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce(
      (sum, children) => sum + children.getPrice(),
      0,
    );
  }

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }
}

const smartphone = new ProductLeaf('Iphone', 800);
const car = new ProductLeaf('Hilux', 80000);
const whisky = new ProductLeaf('Whisky', 1000);

const productBox = new ProductComposite();
productBox.add(smartphone, car, whisky);
console.log(productBox);
console.log(productBox.getPrice());

const tablet = new ProductLeaf('Ipad', 2000);
const kindle = new ProductLeaf('Amazon Kindle', 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
