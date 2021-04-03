import { resolve } from 'path';
import { CustomerDataParserTxt } from './customer-data-aparse-txt';

async function run() {
  const filePathTXT = resolve(__dirname, 'files', 'customer.txt');
  console.log(filePathTXT);
  const customerDataParserTXT = new CustomerDataParserTxt(filePathTXT);
  await customerDataParserTXT.fixCustomerData();
  console.log(customerDataParserTXT.customerData);
}

run();
