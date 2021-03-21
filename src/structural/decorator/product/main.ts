import { ProductCustomizationDecorator } from './product-customization-decorator';
import { ProductStampDecorator } from './product-stamp-decoration';
import { TShirt } from './t-shirt';

const tShirt = new TShirt();
const decoratedTShirt = new ProductStampDecorator(tShirt);
const tShirtStampFrontAndBack = new ProductStampDecorator(decoratedTShirt);
const customizedTshirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(decoratedTShirt.getPrice(), decoratedTShirt.getName());
console.log(
  tShirtStampFrontAndBack.getPrice(),
  tShirtStampFrontAndBack.getName(),
);
console.log(customizedTshirt.getName(), customizedTshirt.getPrice());
