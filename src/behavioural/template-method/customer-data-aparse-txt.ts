import { CustomerDataParser } from './customer-data-parser';
import { CustomerData } from './files/customer-data';
import * as fs from 'fs';

export class CustomerDataParserTxt extends CustomerDataParser {
  protected async parseDate(): Promise<CustomerData[]> {
    const rawData = fs.promises.readFile(this.filePath);

    const data = (await rawData).toString();
    const lines = data.split('\n');

    const customerData: CustomerData[] = [];

    for (const line of lines) {
      const [name, age, cpf] = line.split('\t');

      customerData.push({ name, age, cpf });
    }

    return customerData;
  }
}
