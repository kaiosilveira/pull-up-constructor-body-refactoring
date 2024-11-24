import { Employee } from '..';

export class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    this.finishConstruction();
  }

  get name() {
    return this._name;
  }

  get grade() {
    return this._grade;
  }

  get isPrivileged() {
    return this._grade > 4;
  }

  finishConstruction() {
    if (this.isPrivileged) this.assignCar();
  }
}
