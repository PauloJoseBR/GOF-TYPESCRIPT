import { resolve } from 'path';
import { CustomerDataParserTxt } from './customer-data-aparse-txt';
import { CustomerDataParserJson } from './customer-data-parser-json';

async function run() {
  const filePathTXT = resolve(__dirname, 'files', 'customer.txt');
  console.log(filePathTXT);
  const customerDataParserTXT = new CustomerDataParserTxt(filePathTXT);
  await customerDataParserTXT.fixCustomerData();
  console.log(customerDataParserTXT.customerData);

  console.log();

  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  console.log(filePathJson);
  const customerDataParserJson = new CustomerDataParserJson(filePathJson);
  await customerDataParserJson.fixCustomerData();
  console.log(customerDataParserJson.customerData);
}

run();
