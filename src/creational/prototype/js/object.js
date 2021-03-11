const personPrototype = {
  firstName: 'José',
  age: 30,
  lastName: 'Paulo',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
