import { Employee } from '..';

export class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    if (this.isPrivileged) this.assignCar();
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
}
