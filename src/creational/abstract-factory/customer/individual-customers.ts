import { Customer } from '../customer/interfaces/customer';

export class InvidualCustomer implements Customer {
  constructor(public name: string) {}
}
