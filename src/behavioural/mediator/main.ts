import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Tshirts', price: 49.9 });
seller1.addProduct({ id: '2', name: 'Sneakers', price: 74.9 });

const seller2 = new Seller();
seller1.addProduct({ id: '3', name: 'Underwear', price: 15.9 });
seller1.addProduct({ id: '4', name: 'Watch', price: 25.9 });

mediator.addSeller(seller1, seller2);
mediator.showProducts();
