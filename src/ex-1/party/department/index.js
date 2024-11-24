import { Party } from '..';

export class Department extends Party {
  constructor(name, staff) {
    super();
    this._name = name;
    this._staff = staff;
  }

  get name() {
    return this._name;
  }

  get staff() {
    return this._staff;
  }

  get monthlyCost() {
    return this._staff.reduce((acc, employee) => acc + employee.monthlyCost, 0);
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}
