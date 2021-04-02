import { CustomerData } from './files/customer-data';

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  async fixCustomerData(): Promise<void> {
    await this.parseDate();
  }

  private fixCpf(): CustomerData[] {
    return this.customerData.map((customer) => {
      return { ...customer, cpf: customer.cpf.replace(/\D/g, '') };
    });
  }

  protected abstract parseDate(): Promise<CustomerData[]>;
}
