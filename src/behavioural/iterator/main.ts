import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C');

const [a, b] = dataStructure;

console.log('STOLEN: ', a, b);
console.log('EXECUTED MANY THINGS THEN I USED ITERATOR');
const [c, ...rest] = dataStructure;
console.log(c, rest);

for (const data of dataStructure) {
  console.log(data);
}

console.log();
dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
