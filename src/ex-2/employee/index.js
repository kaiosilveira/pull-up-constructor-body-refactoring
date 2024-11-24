export class Employee {
  constructor(name) {
    this._name = name;
  }

  finishConstruction() {
    if (this.isPrivileged) this.assignCar();
  }

  assignCar() {
    console.log(`Car assigned to ${this._name}`);
  }
}
