import { InvidualCreateVehicheCustomerFactory } from '../factories/individual-customer-vehicle-factory';
import { EnterpriseCreateVehicheCustomerFactory } from '../factories/enterprise-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicheCustomerFactory();
const individualCreateFactory = new InvidualCreateVehicheCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Fiat Uno', 'João');
const car2 = enterpriseFactory.createVehicle('Volkswagen Gol', 'José');

car1.pickUp();
car2.pickUp();

const car3 = individualCreateFactory.createVehicle(
  'Mercedez Bens',
  'Mr. Montenegro',
);
const car4 = individualCreateFactory.createVehicle('Limosine', 'Mr. Riquinho');

car3.pickUp();
car4.pickUp();
