import { AlcholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';

export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number;
  calculateTaxesForCigarette(cigarrete: Cigarette): number;
  calculateTaxeForAlcholicDrink(alcoholicDrink: AlcholicDrink): number;
}
