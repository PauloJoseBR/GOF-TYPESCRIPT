import { CustomerDataParser } from './customer-data-parser';
import { CustomerData } from './files/customer-data';
import * as fs from 'fs';

export class CustomerDataParserJson extends CustomerDataParser {
  protected async parseDate(): Promise<CustomerData[]> {
    const rawData = fs.promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());

    const customerData: CustomerData[] = [];

    for (const customer of data) {
      const { name, age, cpf } = customer;

      customerData.push({ name, age, cpf });
    }

    return customerData;
  }
}
