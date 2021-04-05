import { MyDataStructure } from './my-data-structure';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C');

const [a, b] = dataStructure;

console.log('STOLEN: ', a, b);

for (const data of dataStructure) {
  console.log(data);
}

console.log("I don't have values anymore");

for (const data of dataStructure) {
  console.log(data);
}
