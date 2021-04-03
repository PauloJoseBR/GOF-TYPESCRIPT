import { resolve } from 'path';
import { CustomerDataParserTxt } from './customer-data-aparse-txt';

async function run() {
  const filePath = resolve(__dirname, 'files', 'customer.txt');
  console.log(filePath);
  const customerDataParser = new CustomerDataParserTxt(filePath);
  await customerDataParser.fixCustomerData();
  console.log(customerDataParser.customerData);
}

run();
