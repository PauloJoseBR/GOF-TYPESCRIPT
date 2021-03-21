import { ProductDecorator } from './product-decorator';
import { TShirt } from './t-shirt';

const tShirt = new TShirt();
const decoratedTShirt = new ProductDecorator(tShirt);
console.log(tShirt.getPrice());
