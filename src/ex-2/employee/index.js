export class Employee {
  constructor(name) {
    this._name = name;
  }

  assignCar() {
    console.log(`Car assigned to ${this._name}`);
  }
}
