import { AlcholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.05;
  }
  calculateTaxesForCigarette(cigarrete: Cigarette): number {
    return cigarrete.getPrice() + cigarrete.getPrice() * 1.5;
  }
  calculateTaxeForAlcholicDrink(alcoholicDrink: AlcholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5;
  }
}
