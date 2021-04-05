import { AlcholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';

const food = new Food(10);
const cigarette = new Cigarette(5);
const drink = new AlcholicDrink(5);

const cart = [food, cigarette, drink];

const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
console.log(total);
