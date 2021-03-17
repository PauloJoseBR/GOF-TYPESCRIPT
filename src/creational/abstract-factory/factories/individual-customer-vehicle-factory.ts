import { Customer } from '../customer/interfaces/customer';
import { VehicleProtocol } from '../customer/interfaces/vehicle-protocol';
import { InvidualCustomer as Individual } from '../customer/individual-customers';
import { Individual as IndividualCar } from '../vehicle/individual-car';

export class InvidualCreateVehicheCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new Individual(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
