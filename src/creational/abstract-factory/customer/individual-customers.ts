import { Customer } from '../interfaces/customer';

export class InvidualCustomer implements Customer {
  constructor(public name: string) {}
}
