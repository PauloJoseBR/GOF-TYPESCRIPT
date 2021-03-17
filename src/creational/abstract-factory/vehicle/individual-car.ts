import { VehicleProtocol } from '../customer/interfaces/vehicle-protocol';
import { Customer } from '../customer/interfaces/customer';
export class Individual implements VehicleProtocol {
  constructor(public name: string, private readonly customer: Customer) {}
  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer.name}`);
  }
}
