import { VehicleProtocol } from '../interfaces/vehicle-protocol';
import { Customer } from '../interfaces/customer';
export class EnterpriseCar implements VehicleProtocol {
  constructor(public name: string, private readonly customer: Customer) {}
  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer.name}`);
  }
}
