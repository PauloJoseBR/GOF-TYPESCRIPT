import { Cigarette } from './cigarette';
import { Food } from './food';

export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): void;
  calculateTaxesForCigarette(cigarrete: Cigarette): void;
  calculateTaxeForAlcholicDrink(alcoholicDrink: Cigarette): void;
}
