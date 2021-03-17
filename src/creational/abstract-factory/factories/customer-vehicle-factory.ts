import { Customer } from '../customer/interfaces/customer';
import { Vehicle } from '../../factory-methods/vehichle';

export interface CreateVehicheCustomer {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
