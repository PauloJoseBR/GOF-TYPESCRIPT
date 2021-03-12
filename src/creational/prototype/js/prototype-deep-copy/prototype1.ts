export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = [...this.addresses];
    return newObj;
  }

  addAdress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Ricardo', 30);
person1.addAdress(address1);
const person2 = person1.clone();

person1.name = 'Joaninha'; //It doesn't affect person2
person1.addresses[0].street = 'Bla bla bla'; //It affects person2 because a shallow clone was used

person2.name = 'Joana';
console.log(person2);
console.log(person2.addresses);
