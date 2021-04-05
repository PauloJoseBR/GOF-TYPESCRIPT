import { VisitableProduct } from './visitable-product';

export class AlcholicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('Drink', price);
  }
}
