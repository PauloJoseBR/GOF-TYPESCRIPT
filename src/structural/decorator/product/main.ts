import { ProductStampDecorator } from './product-stamp-decoration';
import { TShirt } from './t-shirt';

const tShirt = new TShirt();
const decoratedTShirt = new ProductStampDecorator(tShirt);
console.log(tShirt.getPrice());
console.log(decoratedTShirt.getPrice());
