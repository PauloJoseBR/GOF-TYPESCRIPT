import { CustomerData } from './files/customer-data';

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  async fixCustomerData(): Promise<void> {
    await this.parseDate();
  }

  protected abstract parseDate(): Promise<CustomerData[]>;
}
