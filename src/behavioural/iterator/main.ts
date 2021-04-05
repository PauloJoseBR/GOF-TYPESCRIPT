import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;
console.log('STOLEN:', a, b);
console.log('HAD EXECUTED MANY THINGS THAN I USED ITERATOR');
const [c, d, ...rest] = dataStructure;
console.log(c, d, rest);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
console.log();

console.log('Must RESET Iterator');
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
