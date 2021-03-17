import { Customer } from '../customer/interfaces/customer';
import { VehicleProtocol } from '../customer/interfaces/vehicle-protocol';
import { InvidualCustomer } from '../customer/individual-customers';
import { InvidualCar } from '../vehicle/invidual-car';

export class InvidualCreateVehicheCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new InvidualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new InvidualCar(vehicleName, customer);
  }
}
