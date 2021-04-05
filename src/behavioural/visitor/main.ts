import { AlcholicDrink } from './alcoholic-drink';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { GermanyTaxVisitor } from './germany-tax-visitor';

const food = new Food(10);
const cigarette = new Cigarette(5);
const drink = new AlcholicDrink(5);

const cart = [food, cigarette, drink];

const brazilTaxVisitor = new BrazilTaxVisitor();
const germanTaxVisitor = new GermanyTaxVisitor();

const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalWithBrazilianTaxes = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);

const totalWithGermanTaxes = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(germanTaxVisitor) + sum,
  0,
);

console.log(total);
console.log(totalWithBrazilianTaxes);
console.log(totalWithGermanTaxes);
