import { VisitableProduct } from './visitable-product';

export class Cigarettes extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }
}
