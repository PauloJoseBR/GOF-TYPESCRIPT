import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class AlcholicDrink extends VisitableProduct {
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxeForAlcholicDrink(this);
  }
  constructor(protected price: number) {
    super('Drink', price);
  }
}
