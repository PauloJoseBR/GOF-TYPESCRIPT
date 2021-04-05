import { MyDataStructure } from './my-data-structure';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C');

const [a, b] = dataStructure;

console.log('ROUBADOS: ', a, b);

for (const data of dataStructure) {
  console.log(data);
}
