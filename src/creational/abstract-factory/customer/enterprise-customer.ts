import { Customer } from '../customer/interfaces/customer';

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {}
}
