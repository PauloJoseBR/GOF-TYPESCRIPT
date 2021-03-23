import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Joao', '15A', 'Av Silva', 'SP');
deliveryContext(factory, 'Maria', '15A', 'Av Silva', 'SP');
deliveryContext(factory, 'Carla', '16A', 'Av Fonseca', 'SP');

console.log();
console.log(factory.getLocations());
